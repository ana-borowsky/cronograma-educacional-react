CREATE DATABASE IF NOT EXISTS beezer;

CREATE TABLE IF NOT EXISTS beezer.user(
	idUser INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(256),
    PRIMARY KEY (idUser)
);

CREATE TABLE IF NOT EXISTS beezer.freeTime(
	idTime INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    weekDay VARCHAR(45) NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    PRIMARY KEY(idTime),
    FOREIGN KEY(idUser) REFERENCES beezer.user(idUser)
);

CREATE TABLE IF NOT EXISTS beezer.discipline(
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
    FOREIGN KEY(idUser) REFERENCES beezer.user(idUser)
);

CREATE TABLE IF NOT EXISTS beezer.task(
	idTask INTEGER NOT NULL AUTO_INCREMENT,
    idDiscipline INTEGER NOT NULL ,
    name VARCHAR(50) NOT NULL,
    estimatedHours TIME NOT NULL,
    dueDate DATE NOT NULL,
    status ENUM('Pending', 'Done') NOT NULL,
    weight SMALLINT NOT NULL,
    PRIMARY KEY(idTask),
    FOREIGN KEY(idDiscipline) REFERENCES beezer.discipline(idDiscipline)
);

CREATE TABLE IF NOT EXISTS beezer.planning(
	idPlanning INTEGER NOT NULL AUTO_INCREMENT,
    idTask INTEGER NOT NULL,
    executionDate DATE NOT NULL,
    startTime TIME NOT NULL,
    endTime TIME NOT NULL,
    finalWeight INTEGER NOT NULL,
    PRIMARY KEY(idPlanning),
    FOREIGN KEY(idTask) REFERENCES beezer.task(idTask)
);

CREATE TABLE IF NOT EXISTS beezer.schedule(
	idSchedule INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    idPlanning INTEGER NOT NULL,
    PRIMARY KEY(idSchedule),
    FOREIGN KEY(idUser) REFERENCES beezer.user(idUser),
    FOREIGN KEY(idPlanning) REFERENCES beezer.planning(idPlanning)
);

CREATE TABLE IF NOT EXISTS beezer.file(
	idFile INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    data BLOB NOT NULL,
    PRIMARY KEY(idFile),
    FOREIGN KEY(idUser) REFERENCES beezer.user(idUser)
);


-- Change user privileges
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; 