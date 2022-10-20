CREATE TABLE Funcionarios_Informacoes (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Funcionarios_Informacoes (id, nome, email)
VALUES (1, "Luana", "lua@lbn.com"),
       (2, "Vinicius", "vini@lbn.com"),
       (3, "Laura", "lau@lbn.com");

SELECT * FROM Funcionarios_Informacoes;

SELECT nome, id AS indentifier
FROM Funcionarios_Informacoes;

SELECT nome, email FROM Funcionarios_Informacoes
WHERE id = 3;

SELECT id, nome, email FROM Funcionarios_Informacoes
WHERE nome LIKE "%a%";

SELECT id, nome, email FROM Funcionarios_Informacoes
WHERE email LIKE "%u%";

INSERT INTO Funcionarios_Informacoes (id, nome, email)
Values (4, "Yuzo", "yuzo@lbn.com");

DELETE FROM Funcionarios_Informacoes
WHERE id = 4;
