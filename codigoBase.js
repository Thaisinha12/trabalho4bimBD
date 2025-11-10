//Verificar se A -> B
let lista_atributos = ["A", "B"];

for (const coluna1 of lista_atributos) {
  for (const coluna2 of lista_atributos) {
    if (coluna1 === coluna2) continue;

    console.log(`Verificando ${coluna1} -> ${coluna2}`);

    let consulta1 = `
      SELECT *
      FROM tabela1
      GROUP BY ${coluna1}
      HAVING COUNT(DISTINCT ${coluna2}) > 1;
    `;

    console.log(consulta1);
  }
}


// Verificar se AB -> C
lista_atributos = ["A", "B", "C"];

for (const coluna1 of lista_atributos) {
  for (const coluna2 of lista_atributos) {
    if (coluna1 === coluna2) continue;

    for (const coluna3 of lista_atributos) {
      if (coluna3 === coluna1 || coluna3 === coluna2) continue;

      console.log(`Verificando ${coluna1}, ${coluna2} -> ${coluna3}`);

      let consulta2 = `
        SELECT *
        FROM tabela1
        GROUP BY ${coluna1}, ${coluna2}
        HAVING COUNT(DISTINCT ${coluna3}) > 1;
      `;

      console.log(consulta2);
    }
  }
}


// Verificar se ABC -> D
lista_atributos = ["A", "B", "C", "D"];

for (const coluna1 of lista_atributos) {
  for (const coluna2 of lista_atributos) {
    if (coluna1 === coluna2) continue;

    for (const coluna3 of lista_atributos) {
      if (coluna3 === coluna1 || coluna3 === coluna2) continue;

      for (const coluna4 of lista_atributos) {
        if (
          coluna4 === coluna1 ||
          coluna4 === coluna2 ||
          coluna4 === coluna3
        ) continue;

        console.log(`Verificando ${coluna1}, ${coluna2}, ${coluna3} -> ${coluna4}`);

        let consulta3 = `
          SELECT *
          FROM tabela1
          GROUP BY ${coluna1}, ${coluna2}, ${coluna3}
          HAVING COUNT(DISTINCT ${coluna4}) > 1;
        `;

        console.log(consulta3);
      }
    }
  }
}
