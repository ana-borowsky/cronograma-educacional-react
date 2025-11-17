SET NAMES utf8mb4;
SET @@session.character_set_connection = 'utf8mb4';
CREATE DATABASE IF NOT EXISTS beezer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE beezer;

CREATE TABLE IF NOT EXISTS user (
    idUser INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(256),
    PRIMARY KEY (idUser)
);

CREATE TABLE IF NOT EXISTS freeTime (
    idTime INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    weekDay VARCHAR(45) NOT NULL,
    startTime TIME NOT NULL,
    durationTime INTEGER NOT NULL,
    PRIMARY KEY(idTime),
    FOREIGN KEY(idUser) REFERENCES user(idUser) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS discipline (
    idDiscipline INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    name VARCHAR(150) NOT NULL,
    color VARCHAR(12) NOT NULL,
    project VARCHAR(45) NOT NULL,
    classroom VARCHAR(45),
    day VARCHAR(45),
    startTime TIME,
    endTime TIME,
    weight SMALLINT NOT NULL,
    PRIMARY KEY(idDiscipline),
    FOREIGN KEY(idUser) REFERENCES user(idUser) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS task (
    idTask INTEGER NOT NULL AUTO_INCREMENT,
    idDiscipline INTEGER NOT NULL,
    name VARCHAR(150) NOT NULL,
    type ENUM('Prova', 'Trabalho') NOT NULL,
    estimatedHours TIME NOT NULL,
    dueDate DATE NOT NULL,
    status ENUM('Pendente', 'Concluído') NOT NULL,
    weight SMALLINT NOT NULL,
    PRIMARY KEY(idTask),
    FOREIGN KEY(idDiscipline) REFERENCES discipline(idDiscipline) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS planning (
    idPlanning INTEGER NOT NULL AUTO_INCREMENT,
    idTask INTEGER NOT NULL,
    executionDate DATE NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    finalWeight INTEGER NOT NULL,
    PRIMARY KEY(idPlanning),
    FOREIGN KEY(idTask) REFERENCES task(idTask) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS schedule (
    idSchedule INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    idPlanning INTEGER NOT NULL,
    PRIMARY KEY(idSchedule),
    FOREIGN KEY(idUser) REFERENCES user(idUser) ON DELETE CASCADE,
    FOREIGN KEY(idPlanning) REFERENCES planning(idPlanning) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS file (
    idFile INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    data BLOB NOT NULL,
    PRIMARY KEY(idFile),
    FOREIGN KEY(idUser) REFERENCES user(idUser) ON DELETE CASCADE
);

SET FOREIGN_KEY_CHECKS = 0;
-- Inserindo usuários
INSERT INTO user (name, email, password) VALUES
('Maria Silva', 'maria.silva@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456');

-- Inserindo horários livres
insert into beezer.freeTime (idTime, idUser, weekDay, startTime, durationTime)
values  (1, 1, 'Segunda-feira', '14:00:00', 60),
        (2, 1, 'Segunda-feira', '15:00:00', 60),
        (3, 1, 'Terça-feira', '14:00:00', 60),
        (4, 1, 'Terça-feira', '15:00:00', 60),
        (5, 1, 'Quarta-feira', '14:00:00', 60),
        (6, 1, 'Quarta-feira', '15:00:00', 60),
        (7, 1, 'Quinta-feira', '14:00:00', 60),
        (8, 1, 'Quinta-feira', '15:00:00', 60),
        (9, 1, 'Sexta-feira', '14:00:00', 60),
        (10, 1, 'Sexta-feira', '15:00:00', 60),
        (11, 1, 'Sexta-feira', '16:00:00', 60),
        (12, 1, 'Sexta-feira', '17:00:00', 60),
        (13, 1, 'Sexta-feira', '18:00:00', 60),
        (14, 1, 'Sexta-feira', '19:00:00', 60),
        (15, 1, 'Sexta-feira', '20:00:00', 60),
        (16, 1, 'Sexta-feira', '21:00:00', 60),
        (17, 1, 'Domingo', '14:00:00', 60),
        (18, 1, 'Domingo', '16:00:00', 60),
        (19, 1, 'Domingo', '15:00:00', 60),
        (20, 1, 'Domingo', '17:00:00', 60);

-- Inserindo disciplinas
insert into beezer.discipline (idDiscipline, idUser, name, color, project, classroom, day, startTime, endTime, weight)
values  (1, 1, 'Algoritmos e Programação', 'green', 'Projeto Final', 'Lab 101', 'Segunda-feira', '08:00:00', '10:00:00', 10),
        (2, 1, 'Banco de Dados', 'blue', 'Sistema Web', 'Sala 203', 'Terça-feira', '08:00:00', '10:00:00', 9),
        (3, 1, 'Engenharia de Software', 'sky', 'App Mobile', 'Sala 305', 'Quarta-feira', '10:00:00', '12:00:00', 8);

-- Inserindo tarefas
insert into beezer.task (idTask, idDiscipline, name, type, estimatedHours, dueDate, status, weight)
values  (1, 1, 'Prova Parcial 1', 'Prova', '02:00:00', '2025-11-15', 'Pendente', 10),
        (2, 1, 'Trabalho de Ordenação', 'Trabalho', '08:00:00', '2025-11-20', 'Pendente', 8),
        (3, 1, 'Lista de Exercícios 3', 'Trabalho', '04:00:00', '2025-11-10', 'Pendente', 5),
        (4, 1, 'Prova Final - Estruturas de Dados', 'Prova', '03:00:00', '2025-12-15', 'Pendente', 10),
        (5, 1, 'Trabalho Prático - Recursividade', 'Trabalho', '08:00:00', '2025-11-28', 'Pendente', 7),
        (6, 1, 'Lista Exercícios - Ponteiros e Alocação', 'Trabalho', '05:00:00', '2025-11-20', 'Pendente', 5),
        (7, 1, 'Prova Parcial 2 - Vetores e Matrizes', 'Prova', '02:00:00', '2025-11-24', 'Pendente', 10),
        (8, 2, 'Modelagem de Dados', 'Trabalho', '10:00:00', '2025-11-18', 'Pendente', 9),
        (9, 2, 'Prova de SQL', 'Prova', '02:00:00', '2025-11-25', 'Pendente', 10),
        (10, 2, 'Prova Prática - Joins e Views', 'Prova', '03:00:00', '2025-12-02', 'Pendente', 10),
        (11, 2, 'Projeto Físico - Índices e Procedures', 'Trabalho', '12:00:00', '2025-12-08', 'Pendente', 9),
        (12, 2, 'Trabalho Conceitual - Transações (ACID)', 'Trabalho', '06:00:00', '2025-11-26', 'Pendente', 6),
        (13, 2, 'Prova Parcial 1 - MER/DER', 'Prova', '02:00:00', '2025-11-17', 'Pendente', 10),
        (14, 3, 'Documentação do Projeto', 'Trabalho', '12:00:00', '2025-11-30', 'Pendente', 7),
        (15, 3, 'Apresentação Seminário', 'Trabalho', '06:00:00', '2025-11-22', 'Pendente', 8),
        (16, 3, 'Trabalho - Requisitos Funcionais (RF)', 'Trabalho', '10:00:00', '2025-11-29', 'Pendente', 8),
        (17, 3, 'Prova Conceitual - Métodos Ágeis (Scrum)', 'Prova', '02:00:00', '2025-11-21', 'Pendente', 10),
        (18, 3, 'Trabalho Prático - Diagramas de Caso de Uso', 'Trabalho', '07:00:00', '2025-12-04', 'Pendente', 7),
        (19, 3, 'Relatório de Testes de Unidade', 'Trabalho', '09:00:00', '2025-12-10', 'Pendente', 5),
        (20, 3, 'Prova de Modelagem de Casos de Uso', 'Prova', '02:00:00', '2025-11-21', 'Pendente', 10);
-- Inserindo planejamentos
insert into beezer.planning (idPlanning, idTask, executionDate, startTime, endTime, finalWeight)
values  (1, 2, '2025-11-10', '14:00:00', '16:00:00', 85),
        (2, 4, '2025-11-11', '14:00:00', '16:00:00', 88),
        (3, 1, '2025-11-12', '14:00:00', '16:00:00', 95),
        (4, 2, '2025-11-13', '14:00:00', '16:00:00', 90),
        (5, 2, '2025-11-17', '14:00:00', '18:00:00', 90),
        (6, 4, '2025-11-17', '18:00:00', '21:00:00', 92); 

-- Inserindo agendamentos
insert into beezer.schedule (idSchedule, idUser, idPlanning)
values  (1, 1, 1),
        (2, 1, 2),
        (3, 1, 3),
        (4, 1, 4),
        (5, 1, 5),
        (6, 1, 6);

-- Inserindo arquivos (exemplo com dados fictícios em BLOB)
INSERT INTO file (idUser, name, type, data) VALUES
(1, 'resumo_algoritmos.pdf', 'application/pdf', 0x255044462D312E34),
(1, 'diagrama_er.png', 'image/png', 0x89504E470D0A1A0A),
(2, 'formulas_calculo.docx', 'application/docx', 0x504B0304140006),
(3, 'codigo_avl.cpp', 'text/plain', 0x23696E636C756465);

-- Reabilita checagem de chaves estrangeiras
SET FOREIGN_KEY_CHECKS = 1;
