CREATE TABLE Funcionarios (
    id_funcionario SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    cargo VARCHAR(40),
    departamento VARCHAR(30),
    salario NUMERIC(10,2),
    turno VARCHAR(20),
    cidade VARCHAR(40),
    data_admissao DATE
);

CREATE TABLE Cursos (
    cod_curso SERIAL PRIMARY KEY,
    nome_curso VARCHAR(50),
    professor VARCHAR(50),
    turno VARCHAR(20),
    sala VARCHAR(10),
    periodo INT,
    departamento VARCHAR(40),
    carga_horaria INT
);

CREATE TABLE aluno (
    ra INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    curso VARCHAR(10) NOT NULL,
    periodo VARCHAR(10) NOT NULL
);

CREATE TABLE alunos (
    ra INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    curso VARCHAR(10),
    periodo VARCHAR(10) NOT NULL
);