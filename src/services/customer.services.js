// Importar la conexión a la base de datos desde el modulo db.js
import { pool } from '../DB/db.js';

// Inicializa la clase 
class CustomerService {
  // Obtener todos los clientes
  async getAllCustomers() {
    const [rows] = await pool.query('SELECT * FROM customer');
    // Devuelve todas las filas de clientes encontradas en la tabla 'customer'
    return rows;
  }

  // Crear un nuevo cliente
  async createCustomer(customer) {
    const [result] = await pool.query('INSERT INTO customer SET ?', [customer]);
    // Devuelve el ID generado para el nuevo cliente insertado
    return result.insertId;
  }

  // Obtener un cliente por ID
  async getCustomerById(id) {
    const [rows] = await pool.query('SELECT * FROM customer WHERE id = ?', [id]);
    // Devuelve el primer cliente encontrado con el ID específico
    return rows[0];
  }

  // Actualizar un cliente
  async updateCustomer(id, customer) {
    // Actualiza el cliente con el ID específico con los nuevos
    // datos proporcionados
    await pool.query('UPDATE customer SET ? WHERE id = ?', [customer, id]);
  }

  // Eliminar un cliente
  async deleteCustomer(id) {
    const [result] = await pool.query('DELETE FROM customer WHERE id = ?', [id]);
    // Devuelve el número de filas afectadas
    // (debería ser 1 si se eliminó correctamente)
    return result.affectedRows;
  }
}

// Exportar una instancia única de CustomerService
export default new CustomerService();
