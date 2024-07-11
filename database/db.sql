-- Crear una nueva base de datos llamada 'customersdb'
CREATE DATABASE customersdb;

-- Seleccionar la base de datos 'customersdb' para usarla en las
-- siguientes operaciones
USE customersdb;

-- Crear una tabla llamada 'customer' con las siguientes columnas:
-- 'id': un entero sin signo de 6 dígitos que se autoincrementa
--    y es la clave primaria
-- 'name': una cadena de texto de hasta 50 caracteres, no puede ser nula
-- 'address': una cadena de texto de hasta 100 caracteres, no puede ser nula
-- 'phone': una cadena de texto de hasta 15 caracteres, puede ser nula
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- Mostrar todas las tablas en la base de datos actual
SHOW TABLES;

-- Describir la estructura de la tabla 'customer'
DESCRIBE customer;