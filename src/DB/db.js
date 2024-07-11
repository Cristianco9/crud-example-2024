// Importa la función createPool del módulo mysql2/promise
import { createPool } from "mysql2/promise";

// Crea un pool de conexiones a la base de datos MySQL
export const pool = createPool({
  // Dirección del servidor MySQL
  host: "localhost",
  // Nombre de usuario para conectarse a la base de datos
  user: "root",
  // Contraseña para conectarse a la base de datos
  password: "1234567890",
  // Puerto en el que está corriendo MySQL (3306 es el puerto por defecto)
  port: 3306,
  // Nombre de la base de datos a la que se va a conectar
  database: "customersdb",
});