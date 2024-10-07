// Importa el Router de Express
import  { Router } from 'express';
// Importa las funciones del controlador de clientes
import {
    createCustomers,
    deleteCustomer,
    editCustomer,
    renderCustomers,
    updateCustomer,
} from "../controllers/customerController.js";

// define el router que atenderá todas las rutas relacionadas con clientes
export const customersRouter = Router();

// Define las rutas y los controladores correspondientes
// Ruta para renderizar todos los clientes
customersRouter.get("/", renderCustomers);
// Ruta para crear un nuevo cliente
customersRouter.post("/add", createCustomers);
// Ruta para obtener el formulario de edición de un cliente específico
customersRouter.get("/update/:id", editCustomer);
// Ruta para actualizar un cliente específico
customersRouter.post("/update/:id", updateCustomer);
// Ruta para eliminar un cliente específico
customersRouter.get("/delete/:id", deleteCustomer);