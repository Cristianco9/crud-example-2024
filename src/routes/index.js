// Importa el Router de Express
import { Router } from "express";
import { customersRouter } from "./customersRouter.js";

const routerApi = (app) => {

  // Crea una instancia del enrutador de Express
  const router = Router();

  // define la ruta principal de la API
  app.use('/api/v1', router);

  // define las sub rutas que se atenderán dentro de la ruta principal /api/v1/
  router.use('/customers', customersRouter);
}

// Exporta el enrutador para que pueda ser utilizado en otras partes
// de la aplicación
export default routerApi;
