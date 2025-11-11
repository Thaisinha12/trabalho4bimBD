INSERT INTO Funcionarios (nome, cargo, departamento, salario, turno, cidade, data_admissao) VALUES
('João Pereira', 'Analista', 'TI', 5500.00, 'Noturno', 'Curitiba', '2020-03-15'),
('Maria Santos', 'Analista', 'TI', 5500.00, 'Noturno', 'Curitiba', '2021-01-20'),
('Lucas Lima', 'Técnico', 'Manutenção', 4200.00, 'Diurno', 'Londrina', '2019-07-12'),
('Ana Souza', 'Gerente', 'RH', 6800.00, 'Diurno', 'Maringá', '2018-09-01'),
('Pedro Alves', 'Auxiliar', 'Limpeza', 3000.00, 'Noturno', 'Campo Mourão', '2022-02-10'),
('Carla Dias', 'Gerente', 'Financeiro', 7000.00, 'Diurno', 'Maringá', '2017-11-30'),
('Rafael Torres', 'Analista', 'TI', 5500.00, 'Noturno', 'Curitiba', '2021-09-05'),
('Juliana Reis', 'Técnico', 'Manutenção', 4200.00, 'Diurno', 'Londrina', '2020-04-18'),
('Felipe Nunes', 'Auxiliar', 'Limpeza', 3000.00, 'Noturno', 'Campo Mourão', '2023-01-08'),
('Bruna Oliveira', 'Gerente', 'Financeiro', 7000.00, 'Diurno', 'Maringá', '2018-05-22');

INSERT INTO Cursos (nome_curso, professor, turno, sala, periodo, departamento, carga_horaria) VALUES
('Banco de Dados', 'Eduardo Pena', 'Noturno', 'B201', 4, 'Informática', 80),
('Programação Web', 'Camila Rocha', 'Noturno', 'B202', 4, 'Informática', 80),
('Redes de Computadores', 'Paulo Mendes', 'Diurno', 'A103', 3, 'Informática', 60),
('Engenharia de Software', 'Eduardo Pena', 'Noturno', 'B201', 4, 'Informática', 80),
('Sistemas Operacionais', 'Marcos Lima', 'Diurno', 'A102', 3, 'Informática', 60),
('Lógica de Programação', 'Camila Rocha', 'Noturno', 'B202', 4, 'Informática', 80),
('Matemática Aplicada', 'João Ribeiro', 'Diurno', 'A104', 2, 'Matemática', 60),
('Cálculo', 'João Ribeiro', 'Diurno', 'A104', 2, 'Matemática', 60),
('Administração', 'Fernanda Costa', 'Noturno', 'C301', 1, 'Gestão', 60),
('Gestão de Projetos', 'Fernanda Costa', 'Noturno', 'C301', 1, 'Gestão', 60);

INSERT INTO aluno (ra, nome, curso, periodo) VALUES
(1001, 'João', 'ADS', 'Noturno'),
(1002, 'Maria', 'ADS', 'Noturno'),
(1003, 'Pedro', 'SI', 'Diurno'),
(1004, 'Ana', 'ADS', 'Noturno'),
(1005, 'Lucas', 'SI', 'Diurno');
