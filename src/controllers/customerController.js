// Importar el servicio de clientes
import customerService from '../services/customer.services.js';

// Renderizar la vista de todos los clientes
export const renderCustomers = async (req, res) => {
  try {
    // Obtener todos los clientes del servicio
    const customers = await customerService.getAllCustomers();
    // Renderizar la vista 'customers' con los clientes obtenidos
    res.render('customers', { customers });
  } catch (error) {
    // Manejar errores: devolver un estado 500 si hay un problema al
    // obtener los clientes
    res.status(500).send('Error al obtener los clientes');
  }
};

// Crear un nuevo cliente
export const createCustomers = async (req, res) => {
  try {
    // Obtener los datos del nuevo cliente desde el cuerpo de la solicitud
    const newCustomer = req.body;
    // Crear el nuevo cliente utilizando el servicio
    await customerService.createCustomer(newCustomer);
    // Redirigir al usuario a la página principal después de crear el cliente
    res.redirect('/');
  } catch (error) {
    // Manejar errores: devolver un estado 500 si hay un problema al
    // crear el cliente
    res.status(500).send('Error al crear el cliente');
  }
};

// Obtener la vista de edición de un cliente específico
export const editCustomer = async (req, res) => {
  try {
    // Obtener el ID del cliente desde los parámetros de la solicitud
    const { id } = req.params;
    // Obtener el cliente específico por su ID utilizando el servicio
    const customer = await customerService.getCustomerById(id);
    // Renderizar la vista 'customers_edit' con el cliente obtenido
    res.render('customers_edit', { customer });
  } catch (error) {
    // Manejar errores: devolver un estado 500 si hay un problema al
    // obtener el cliente
    res.status(500).send('Error al obtener el cliente');
  }
};

// Actualizar un cliente existente
export const updateCustomer = async (req, res) => {
  try {
    // Obtener el ID del cliente desde los parámetros de la solicitud
    const { id } = req.params;
    // Obtener los nuevos datos del cliente desde el cuerpo de la solicitud
    const newCustomer = req.body;
    // Actualizar el cliente con el ID específico utilizando el servicio
    await customerService.updateCustomer(id, newCustomer);
    // Redirigir al usuario a la página principal después de actualizar
    // el cliente
    res.redirect('/');
  } catch (error) {
    // Manejar errores: devolver un estado 500 si hay un problema al
    // actualizar el cliente
    res.status(500).send('Error al actualizar el cliente');
  }
};

// Eliminar un cliente por su ID
export const deleteCustomer = async (req, res) => {
  try {
    // Obtener el ID del cliente desde los parámetros de la solicitud
    const { id } = req.params;
    // Eliminar el cliente con el ID específico utilizando el servicio y
    // obtener el número de filas afectadas
    const affectedRows = await customerService.deleteCustomer(id);
    // Verificar si se eliminó correctamente (afectó exactamente 1 fila)
    if (affectedRows === 1) {
      // Si se eliminó correctamente, devolver un mensaje JSON
      // res.json({ message: 'Customer deleted' });
    }
    // Redirigir al usuario a la página principal después de intentar
    // eliminar el cliente
    res.redirect('/');
  } catch (error) {
    // Manejar errores: devolver un estado 500 si hay un problema al
    // eliminar el cliente
    res.status(500).send('Error al eliminar el cliente');
  }
};
