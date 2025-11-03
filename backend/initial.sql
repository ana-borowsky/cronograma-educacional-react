-- Ensure the script and connection use UTF-8 (utf8mb4) to preserve accents
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
    endTime TIME NOT NULL,
    PRIMARY KEY(idTime),
    FOREIGN KEY(idUser) REFERENCES user(idUser)
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
    FOREIGN KEY(idUser) REFERENCES user(idUser)
);

CREATE TABLE IF NOT EXISTS task (
    idTask INTEGER NOT NULL AUTO_INCREMENT,
    idDiscipline INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    estimatedHours TIME NOT NULL,
    dueDate DATE NOT NULL,
    status ENUM('Pending', 'Done') NOT NULL,
    weight SMALLINT NOT NULL,
    PRIMARY KEY(idTask),
    FOREIGN KEY(idDiscipline) REFERENCES discipline(idDiscipline)
);

CREATE TABLE IF NOT EXISTS planning (
    idPlanning INTEGER NOT NULL AUTO_INCREMENT,
    idTask INTEGER NOT NULL,
    executionDate DATE NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    finalWeight INTEGER NOT NULL,
    PRIMARY KEY(idPlanning),
    FOREIGN KEY(idTask) REFERENCES task(idTask)
);

CREATE TABLE IF NOT EXISTS schedule (
    idSchedule INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    idPlanning INTEGER NOT NULL,
    PRIMARY KEY(idSchedule),
    FOREIGN KEY(idUser) REFERENCES user(idUser),
    FOREIGN KEY(idPlanning) REFERENCES planning(idPlanning)
);

CREATE TABLE IF NOT EXISTS file (
    idFile INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    data BLOB NOT NULL,
    PRIMARY KEY(idFile),
    FOREIGN KEY(idUser) REFERENCES user(idUser)
);

SET FOREIGN_KEY_CHECKS = 0;
-- Inserir usuários
INSERT INTO user (name, email, password) VALUES
('João Silva', 'joao.silva@email.com', '$2a$10$rZL4YqZqZqZqZqZqZqZqZeuKOX3LqZqZqZqZqZqZqZqZqZqZqZqZq'), -- senha: senha123
('Maria Santos', 'maria.santos@email.com', '$2a$10$rZL4YqZqZqZqZqZqZqZqZeuKOX3LqZqZqZqZqZqZqZqZqZqZqZqZq'),
('Pedro Oliveira', 'pedro.oliveira@email.com', '$2a$10$rZL4YqZqZqZqZqZqZqZqZeuKOX3LqZqZqZqZqZqZqZqZqZqZqZqZq');

-- Inserir tempo livre para os usuários
INSERT INTO freeTime (idUser, weekDay, startTime, endTime) VALUES
(1, 'Monday', '18:00:00', '22:00:00'),
(1, 'Wednesday', '18:00:00', '22:00:00'),
(1, 'Saturday', '09:00:00', '17:00:00'),
(2, 'Tuesday', '19:00:00', '22:00:00'),
(2, 'Thursday', '19:00:00', '22:00:00'),
(2, 'Sunday', '10:00:00', '16:00:00'),
(3, 'Monday', '20:00:00', '23:00:00'),
(3, 'Friday', '18:00:00', '22:00:00');

-- Inserir disciplinas
INSERT INTO discipline (idUser, name, color, project, classroom, day, startTime, endTime, weight) VALUES
-- Disciplinas do João Silva
(1, 'Programação I', 1, 'Sistema Web', 'Lab 101', 'Monday', '08:00:00', '10:00:00', 8),
(1, 'Banco de Dados', 2, 'Banco Relacional', 'Lab 203', 'Tuesday', '10:00:00', '12:00:00', 9),
(1, 'Engenharia de Software', 3, 'App Mobile', 'Sala 305', 'Wednesday', '14:00:00', '16:00:00', 7),
(1, 'Matemática Discreta', 4, 'Teoria dos Grafos', 'Sala 102', 'Thursday', '08:00:00', '10:00:00', 6),
-- Disciplinas da Maria Santos
(2, 'Algoritmos Avançados', 5, 'Pesquisa Operacional', 'Lab 104', 'Monday', '14:00:00', '16:00:00', 8),
(2, 'Inteligência Artificial', 6, 'Chatbot', 'Lab 201', 'Wednesday', '10:00:00', '12:00:00', 9),
(2, 'Redes de Computadores', 7, 'Rede Local', 'Lab 202', 'Friday', '08:00:00', '10:00:00', 7),
-- Disciplinas do Pedro Oliveira
(3, 'Desenvolvimento Web', 1, 'E-commerce', 'Lab 105', 'Tuesday', '14:00:00', '16:00:00', 8),
(3, 'Segurança da Informação', 2, 'Análise de Vulnerabilidades', 'Sala 401', 'Thursday', '16:00:00', '18:00:00', 9);

-- Inserir tarefas
INSERT INTO task (idDiscipline, name, estimatedHours, dueDate, status, weight) VALUES
-- Tarefas de Programação I
(1, 'Exercícios de Loops', '02:00:00', '2025-11-10', 'Pending', 3),
(1, 'Projeto Sistema de Login', '05:00:00', '2025-11-15', 'Pending', 7),
(1, 'Prova Intermediária', '03:00:00', '2025-11-20', 'Pending', 9),
-- Tarefas de Banco de Dados
(2, 'Modelagem ER', '03:00:00', '2025-11-12', 'Done', 6),
(2, 'Queries SQL Avançadas', '04:00:00', '2025-11-18', 'Pending', 7),
(2, 'Projeto Final BD', '08:00:00', '2025-11-25', 'Pending', 10),
-- Tarefas de Engenharia de Software
(3, 'Diagrama de Casos de Uso', '02:30:00', '2025-11-11', 'Done', 5),
(3, 'Documento de Requisitos', '04:00:00', '2025-11-17', 'Pending', 7),
(3, 'Protótipo de Interface', '06:00:00', '2025-11-22', 'Pending', 8),
-- Tarefas de Matemática Discreta
(4, 'Lista de Exercícios 1', '02:00:00', '2025-11-09', 'Done', 4),
(4, 'Trabalho Teoria dos Grafos', '05:00:00', '2025-11-16', 'Pending', 8),
-- Tarefas de Algoritmos Avançados
(5, 'Implementar Dijkstra', '04:00:00', '2025-11-13', 'Pending', 7),
(5, 'Análise de Complexidade', '03:00:00', '2025-11-19', 'Pending', 6),
-- Tarefas de Inteligência Artificial
(6, 'Estudo Redes Neurais', '03:30:00', '2025-11-14', 'Pending', 6),
(6, 'Implementar Chatbot', '08:00:00', '2025-11-28', 'Pending', 10),
-- Tarefas de Redes de Computadores
(7, 'Configurar Rede Local', '03:00:00', '2025-11-11', 'Done', 5),
(7, 'Relatório Protocolos', '04:00:00', '2025-11-18', 'Pending', 7),
-- Tarefas de Desenvolvimento Web
(8, 'Criar Layout Responsivo', '05:00:00', '2025-11-12', 'Pending', 6),
(8, 'Implementar Carrinho', '06:00:00', '2025-11-20', 'Pending', 8),
-- Tarefas de Segurança da Informação
(9, 'Análise de Vulnerabilidades', '04:00:00', '2025-11-15', 'Pending', 7),
(9, 'Implementar Criptografia', '05:00:00', '2025-11-23', 'Pending', 9);

-- Inserir planejamentos
INSERT INTO planning (idTask, executionDate, startTime, endTime, finalWeight) VALUES
-- Planejamentos para tarefas concluídas
(4, '2025-11-08', '14:00:00', '17:00:00', 6),
(7, '2025-11-07', '15:00:00', '17:30:00', 5),
(10, '2025-11-05', '10:00:00', '12:00:00', 4),
(16, '2025-11-06', '09:00:00', '12:00:00', 5),
-- Planejamentos para tarefas pendentes
(1, '2025-11-05', '18:00:00', '20:00:00', 3),
(2, '2025-11-10', '18:00:00', '21:00:00', 7),
(2, '2025-11-12', '18:00:00', '20:00:00', 7),
(3, '2025-11-18', '09:00:00', '12:00:00', 9),
(5, '2025-11-14', '19:00:00', '21:00:00', 7),
(5, '2025-11-16', '19:00:00', '21:00:00', 7),
(6, '2025-11-20', '09:00:00', '13:00:00', 10),
(6, '2025-11-23', '09:00:00', '13:00:00', 10),
(8, '2025-11-13', '19:00:00', '22:00:00', 7),
(8, '2025-11-15', '14:00:00', '15:00:00', 7),
(9, '2025-11-17', '14:00:00', '18:00:00', 8),
(9, '2025-11-21', '14:00:00', '16:00:00', 8),
(11, '2025-11-14', '20:00:00', '23:00:00', 8),
(12, '2025-11-10', '14:00:00', '16:00:00', 7),
(12, '2025-11-16', '14:00:00', '17:00:00', 7),
(13, '2025-11-11', '19:00:00', '21:30:00', 6),
(14, '2025-11-12', '10:00:00', '14:00:00', 6),
(15, '2025-11-24', '10:00:00', '14:00:00', 10),
(15, '2025-11-26', '10:00:00', '14:00:00', 10),
(17, '2025-11-15', '19:00:00', '22:00:00', 7),
(18, '2025-11-08', '18:00:00', '21:00:00', 6),
(18, '2025-11-10', '14:00:00', '16:00:00', 6),
(19, '2025-11-17', '14:00:00', '17:00:00', 8),
(19, '2025-11-19', '14:00:00', '17:00:00', 8),
(20, '2025-11-11', '20:00:00', '23:00:00', 7),
(21, '2025-11-18', '20:00:00', '23:00:00', 9),
(21, '2025-11-21', '20:00:00', '22:00:00', 9);

-- Inserir agendamentos (vinculando usuários aos planejamentos)
INSERT INTO schedule (idUser, idPlanning) VALUES
-- João Silva (idUser = 1)
(1, 1), (1, 2), (1, 3), (1, 4),
(1, 5), (1, 6), (1, 7), (1, 8),
(1, 9), (1, 10), (1, 11), (1, 12),
(1, 13), (1, 14), (1, 15), (1, 16),
(1, 17),
-- Maria Santos (idUser = 2)
(2, 18), (2, 19), (2, 20),
(2, 21), (2, 22), (2, 23), (2, 24),
(2, 25),
-- Pedro Oliveira (idUser = 3)
(3, 26), (3, 27), (3, 28),
(3, 29), (3, 30), (3, 31), (3, 32);

-- Reabilita checagem de chaves estrangeiras
SET FOREIGN_KEY_CHECKS = 1;
