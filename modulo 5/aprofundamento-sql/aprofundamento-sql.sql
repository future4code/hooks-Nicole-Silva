CREATE TABLE Projetos (
id  VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) UNIQUE NOT NULL,
title VARCHAR(255) NOT NULL,
date DATE NOT NULL
);

INSERT INTO Projetos (id, name, title, date)
VALUES ("001", "LabeSky", "LSy", "2023/10/05"),
	   ("002", "Labefy", "LFy", "2024/01/06"),
       ("003", "AstroZoom", "AZm", "2022/12/20");