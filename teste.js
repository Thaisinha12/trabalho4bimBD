const { query, testConnection } = require('./database.js');

async function verificarDependencias() {
  // Testa a conexão
  const conectado = await testConnection();
  if (!conectado) {
    console.error("❌ Falha ao conectar no banco. Encerrando execução.");
    process.exit(1);
  }

  console.log("=================================================");
  console.log("== Descobridor de Dependências Funcionais (DFs) ==");
  console.log("=================================================\n");

    // Descobre automaticamente a primeira tabela do banco
   const resultadoTabelas = await query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    LIMIT 1;
  `);

  const nomeTabela = resultadoTabelas.rows[0]?.table_name;
  if (!nomeTabela) {
    console.error("❌ Nenhuma tabela encontrada no banco!");
    process.exit(1);
  }

  console.log(`📋 Tabela detectada automaticamente: ${nomeTabela}\n`);

  // Busca os nomes das colunas
  const resultadoColunas = await query(`
    SELECT column_name
    FROM information_schema.columns
    WHERE table_name = '${nomeTabela}';
  `);

  const lista_atributos = resultadoColunas.rows.map(r => r.column_name);
  console.log(`Colunas encontradas: ${lista_atributos.join(', ')}\n`);

  let vetorA_B = [];
  let vetorAB_C = [];

  // ====================== A -> B ======================
  for (const lado_direito of lista_atributos) {
    for (const lado_esquerdo of lista_atributos) {
      if (lado_direito === lado_esquerdo) continue;

      const sql = `
        SELECT ${lado_esquerdo}
        FROM ${nomeTabela}
        GROUP BY ${lado_esquerdo}
        HAVING COUNT(DISTINCT ${lado_direito}) > 1;
      `;

      const resultado = await query(sql);

      if (resultado.rows.length === 0) {
        vetorA_B.push([lado_esquerdo, lado_direito]);
      }
    }
  }

  vetorA_B.sort((a, b) => a[0].localeCompare(b[0]));

  console.log("Dependências funcionais para A->B");
  for (const [a, b] of vetorA_B) {
    console.log(`${a} -> ${b}`);
  }

  // ====================== AB -> C ======================
  console.log("\n-----------------------  AB->C ----------------------");

  const setUnicos = new Set();

  for (const lado_direito of lista_atributos) {
    for (const lado_esquerdo1 of lista_atributos) {
      if (lado_direito === lado_esquerdo1) continue;

      for (const lado_esquerdo2 of lista_atributos) {
        if ([lado_esquerdo1, lado_direito].includes(lado_esquerdo2)) continue;

        // Ordena os dois lados esquerdos alfabeticamente
        const esquerdoOrdenado = [lado_esquerdo1, lado_esquerdo2].sort();

        const sql = `
          SELECT ${esquerdoOrdenado[0]}, ${esquerdoOrdenado[1]}
          FROM ${nomeTabela}
          GROUP BY ${esquerdoOrdenado[0]}, ${esquerdoOrdenado[1]}
          HAVING COUNT(DISTINCT ${lado_direito}) > 1;
        `;

        const resultado = await query(sql);

        if (resultado.rows.length === 0) {
          const chave = `${esquerdoOrdenado[0]},${esquerdoOrdenado[1]}=>${lado_direito}`;
          if (!setUnicos.has(chave)) {
            setUnicos.add(chave);
            vetorAB_C.push([esquerdoOrdenado[0], esquerdoOrdenado[1], lado_direito]);
          }
        }
      }
    }
  }

  vetorAB_C.sort((a, b) => {
    const keyA = a[0] + a[1] + a[2];
    const keyB = b[0] + b[1] + b[2];
    return keyA.localeCompare(keyB);
  });

  console.log("Dependências funcionais para AB->C");
  for (const [a, b, c] of vetorAB_C) {
    console.log(`${a}, ${b} -> ${c}`);
  }

  console.log("\n✅ Verificação concluída!");
}


// Executa o script
verificarDependencias().catch(err => console.error("Erro geral:", err));
