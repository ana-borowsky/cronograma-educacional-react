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
    name VARCHAR(50) NOT NULL,
    color SMALLINT NOT NULL,
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
    name VARCHAR(50) NOT NULL,
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
('Maria Silva', 'maria.silva@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456'), -- senha hash exemplo
('João Santos', 'joao.santos@email.com', '$2a$10$bcdefghijklmnopqrstuvwxyz234567'),
('Ana Oliveira', 'ana.oliveira@email.com', '$2a$10$cdefghijklmnopqrstuvwxyz345678'),
('Pedro Costa', 'pedro.costa@email.com', '$2a$10$defghijklmnopqrstuvwxyz456789');

-- Inserindo horários livres
INSERT INTO freeTime (idUser, weekDay, startTime, durationTime) VALUES
-- Maria Silva
(1, 'Segunda-feira', '14:00:00', 240),
(1, 'Terça-feira', '09:00:00', 180),
(1, 'Quarta-feira', '14:00:00', 180),
(1, 'Quinta-feira', '10:00:00', 120),
(1, 'Sexta-feira', '15:00:00', 180),
-- João Santos
(2, 'Segunda-feira', '08:00:00', 120),
(2, 'Terça-feira', '14:00:00', 240),
(2, 'Quarta-feira', '08:00:00', 240),
(2, 'Quinta-feira', '16:00:00', 180),
-- Ana Oliveira
(3, 'Segunda-feira', '19:00:00', 180),
(3, 'Quarta-feira', '19:00:00', 180),
(3, 'Sexta-feira', '14:00:00', 240),
(3, 'Sábado', '09:00:00', 180);

-- Inserindo disciplinas
INSERT INTO discipline (idUser, name, color, project, classroom, day, startTime, endTime, weight) VALUES
-- Maria Silva
(1, 'Algoritmos e Programação', 1, 'Projeto Final', 'Lab 101', 'Segunda-feira', '08:00:00', '10:00:00', 10),
(1, 'Banco de Dados', 2, 'Sistema Web', 'Sala 203', 'Terça-feira', '14:00:00', '16:00:00', 9),
(1, 'Engenharia de Software', 3, 'App Mobile', 'Sala 305', 'Quarta-feira', '10:00:00', '12:00:00', 8),
-- João Santos
(2, 'Cálculo I', 4, 'Exercícios', 'Sala 104', 'Segunda-feira', '14:00:00', '16:00:00', 10),
(2, 'Física I', 5, 'Laboratório', 'Lab 202', 'Quarta-feira', '14:00:00', '16:00:00', 9),
(2, 'Programação Web', 6, 'Site E-commerce', 'Lab 103', 'Quinta-feira', '10:00:00', '12:00:00', 8),
-- Ana Oliveira
(3, 'Estrutura de Dados', 7, 'Árvores Binárias', 'Lab 105', 'Terça-feira', '08:00:00', '10:00:00', 10),
(3, 'Redes de Computadores', 8, 'Topologia Rede', 'Lab 301', 'Quinta-feira', '14:00:00', '16:00:00', 9);

-- Inserindo tarefas
INSERT INTO task (idDiscipline, name, type, estimatedHours, dueDate, status, weight) VALUES
-- Algoritmos e Programação (Maria)
(1, 'Prova Parcial 1', 'Prova', '02:00:00', '2025-11-15', 'Pendente', 10),
(1, 'Trabalho de Ordenação', 'Trabalho', '08:00:00', '2025-11-20', 'Pendente', 8),
(1, 'Lista de Exercícios 3', 'Trabalho', '04:00:00', '2025-11-10', 'Concluído', 5),
-- Banco de Dados (Maria)
(2, 'Modelagem de Dados', 'Trabalho', '10:00:00', '2025-11-18', 'Pendente', 9),
(2, 'Prova de SQL', 'Prova', '02:00:00', '2025-11-25', 'Pendente', 10),
-- Engenharia de Software (Maria)
(3, 'Documentação do Projeto', 'Trabalho', '12:00:00', '2025-11-30', 'Pendente', 7),
(3, 'Apresentação Seminário', 'Trabalho', '06:00:00', '2025-11-22', 'Pendente', 8),
-- Cálculo I (João)
(4, 'Prova Integral', 'Prova', '02:30:00', '2025-11-17', 'Pendente', 10),
(4, 'Lista de Derivadas', 'Trabalho', '05:00:00', '2025-11-12', 'Pendente', 6),
-- Física I (João)
(5, 'Relatório Lab 4', 'Trabalho', '04:00:00', '2025-11-14', 'Pendente', 7),
(5, 'Prova Mecânica', 'Prova', '02:00:00', '2025-11-28', 'Pendente', 10),
-- Programação Web (João)
(6, 'Site Responsivo', 'Trabalho', '15:00:00', '2025-12-05', 'Pendente', 9),
-- Estrutura de Dados (Ana)
(7, 'Implementar AVL', 'Trabalho', '10:00:00', '2025-11-16', 'Pendente', 9),
(7, 'Prova Árvores', 'Prova', '02:00:00', '2025-11-21', 'Pendente', 10),
-- Redes de Computadores (Ana)
(8, 'Trabalho sobre TCP/IP', 'Trabalho', '08:00:00', '2025-11-19', 'Pendente', 8);

-- Inserindo planejamentos
INSERT INTO planning (idTask, executionDate, startTime, endTime, finalWeight) VALUES
-- Planejamento para Maria
(1, '2025-11-08', '14:00:00', '16:00:00', 90), -- Estudar para prova
(1, '2025-11-12', '14:00:00', '17:00:00', 95),
(2, '2025-11-10', '15:00:00', '18:00:00', 85), -- Trabalho ordenação
(2, '2025-11-15', '14:00:00', '18:00:00', 90),
(4, '2025-11-11', '14:00:00', '18:00:00', 88), -- Modelagem dados
(4, '2025-11-16', '15:00:00', '19:00:00', 92),
-- Planejamento para João
(8, '2025-11-09', '14:00:00', '17:00:00', 87), -- Prova Cálculo
(8, '2025-11-14', '16:00:00', '19:00:00', 93),
(9, '2025-11-10', '08:00:00', '12:00:00', 85), -- Lista Derivadas
(10, '2025-11-11', '14:00:00', '17:00:00', 90), -- Relatório Física
-- Planejamento para Ana
(13, '2025-11-08', '19:00:00', '22:00:00', 88), -- AVL
(13, '2025-11-13', '19:00:00', '22:00:00', 92),
(14, '2025-11-15', '19:00:00', '22:00:00', 90), -- Prova Árvores
(15, '2025-11-12', '14:00:00', '18:00:00', 86); -- TCP/IP

-- Inserindo agendamentos
INSERT INTO schedule (idUser, idPlanning) VALUES
-- Maria
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
-- João
(2, 7), (2, 8), (2, 9), (2, 10),
-- Ana
(3, 11), (3, 12), (3, 13), (3, 14);

-- Inserindo arquivos (exemplo com dados fictícios em BLOB)
INSERT INTO file (idUser, name, type, data) VALUES
(1, 'resumo_algoritmos.pdf', 'application/pdf', 0x255044462D312E34),
(1, 'diagrama_er.png', 'image/png', 0x89504E470D0A1A0A),
(2, 'formulas_calculo.docx', 'application/docx', 0x504B0304140006),
(3, 'codigo_avl.cpp', 'text/plain', 0x23696E636C756465);

-- Reabilita checagem de chaves estrangeiras
SET FOREIGN_KEY_CHECKS = 1;
