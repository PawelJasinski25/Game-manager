CREATE DATABASE IF NOT EXISTS games;

USE games;

CREATE TABLE gry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tytul VARCHAR(255),
    producent VARCHAR(255),
    rok_wydania INT,
    gatunek VARCHAR(100),
    ocena DECIMAL(3,1)
);
