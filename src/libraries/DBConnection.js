// importa la conexión a la base de datos
import { pool } from '../DB/db.js';
// Función para probar la conexión a la base de datos
export async function testDatabaseConnection() {
    try {
      // Obtener una conexión del pool
      const connection = await pool.getConnection();
      // Ejecutar una consulta simple para probar la conexión
      const [rows] = await connection.query("SELECT 1 + 1 AS result");
      // Liberar la conexión
      connection.release();
      // Verificar el resultado de la consulta
      if (rows.length > 0 && rows[0].result === 2) {
        console.log("La conexión a la base de datos MySQL fue exitosa.");
      } else {
        console.error("Error al probar la conexión a la base de datos.");
      }
    } catch (error) {
      console.error("Error al conectar con la base de datos:", error.message);
    }
  }
  