// Importa el Router de Express
import { Router } from "express";
// Importa las funciones del controlador de clientes
import {
  createCustomers,
  deleteCustomer,
  editCustomer,
  renderCustomers,
  updateCustomer,
} from "../controllers/customerController.js";


// Crea una instancia del enrutador de Express
const router = Router();

// Define las rutas y los controladores correspondientes
// Ruta para renderizar todos los clientes
router.get("/", renderCustomers);
// Ruta para crear un nuevo cliente
router.post("/add", createCustomers);
// Ruta para obtener el formulario de edición de un cliente específico
router.get("/update/:id", editCustomer);
// Ruta para actualizar un cliente específico
router.post("/update/:id", updateCustomer);
// Ruta para eliminar un cliente específico
router.get("/delete/:id", deleteCustomer);

// Exporta el enrutador para que pueda ser utilizado en otras partes
// de la aplicación
export default router;
