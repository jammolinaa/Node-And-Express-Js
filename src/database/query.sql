CREATE DATABASE prueba2;

USE prueba2;

CREATE table personas(
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(50),
      edad INT,
      correo VARCHAR(100)
);

SELECT * FROM personas;