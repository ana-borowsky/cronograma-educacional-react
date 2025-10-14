CREATE DATABASE IF NOT EXISTS beezer;

CREATE TABLE IF NOT EXISTS beezer.user(
	idUser INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(256),
    PRIMARY KEY (idUser)
);

CREATE TABLE IF NOT EXISTS beezer.schedule(
	idSchedule INTEGER NOT NULL AUTO_INCREMENT,
    discipline VARCHAR(100) NOT NULL,
    PRIMARY KEY(idSchedule)
);

CREATE TABLE IF NOT EXISTS beezer.discipline(
	idDiscipline INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    name VARCHAR(50) NOT NULL,
    color SMALLINT NOT NULL,
    conclusionDate DATE NOT NULL,
    PRIMARY KEY(idDiscipline),
    FOREIGN KEY(idUser) REFERENCES beezer.user(idUser)
);

CREATE TABLE IF NOT EXISTS beezer.timeTable(
	idTimeTable INTEGER NOT NULL AUTO_INCREMENT,
    idUser INTEGER NOT NULL,
    idDiscipline INTEGER NOT NULL,
    PRIMARY KEY(idTimeTable),
    FOREIGN KEY(idUser) REFERENCES beezer.user(idUser),
    FOREIGN KEY(idDiscipline) REFERENCES beezer.discipline(idDiscipline)
);

CREATE TABLE IF NOT EXISTS beezer.dateTime(
	idTime INTEGER NOT NULL AUTO_INCREMENT,
    idTimeTable INTEGER NOT NULL,
    weekDay VARCHAR(45),
    startTime TIME,
    endTime TIME,
    PRIMARY KEY(idTime),
    FOREIGN KEY(idTimeTable) REFERENCES beezer.timeTable(idTimeTable)
);

CREATE TABLE IF NOT EXISTS beezer.task(
	idTask INTEGER NOT NULL AUTO_INCREMENT,
    idDiscipline INTEGER NOT NULL ,
    name VARCHAR(50) NOT NULL,
    estimatedHours TIME NOT NULL,
    dueDate DATE NOT NULL,
    status ENUM('Pending', 'Done') NOT NULL,
    difficulty SMALLINT NOT NULL,
    PRIMARY KEY(idTask),
    FOREIGN KEY(idDiscipline) REFERENCES beezer.discipline(idDiscipline)
);

CREATE TABLE IF NOT EXISTS beezer.file(
	idFile INTEGER NOT NULL AUTO_INCREMENT,
    idTask INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    data BLOB NOT NULL,
    PRIMARY KEY(idFile),
    FOREIGN KEY(idTask) REFERENCES beezer.task(idTask)
);

-- Change user privileges
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; 
