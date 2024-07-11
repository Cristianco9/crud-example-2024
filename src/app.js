// Importa el módulo Express
import express from "express";
// Importa el módulo path para manejar y transformar rutas de archivos
import path from "path";
// Importa morgan para el registro de solicitudes HTTP
import morgan from "morgan";
// Importa las rutas de clientes desde el archivo customer.routes.js
import customerRoutes from "./routes/customer.routes.js";
// Importa fileURLToPath para manejar URLs de archivos
import { fileURLToPath } from "url";
// Importa la funciona que realiza una prueba de conexión a la base de datos
import { testDatabaseConnection } from "./libraries/DBConnection.js";

// Crea una instancia de la aplicación Express
const app = express();
// Define __dirname para obtener el directorio actual
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuraciones
// Configura el puerto de la aplicación, utilizando una variable de entorno o el
// puerto 3000 por defecto
app.set("port", process.env.PORT || 3000);
// Establece el directorio de vistas
app.set("views", path.join(__dirname, "views"));
// Establece el motor de vistas en EJS
app.set("view engine", "ejs");

// Ejecuta la prueba de conexión a la base de datos
testDatabaseConnection();

// Middlewares
// Usa morgan para el registro de solicitudes HTTP en modo desarrollo
app.use(morgan("dev"));
// Middleware para manejar datos de formularios
app.use(express.urlencoded({ extended: false }));

// Rutas
// Usa las rutas definidas en customer.routes.js
app.use(customerRoutes);

// Archivos estáticos
// Sirve archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, "public")));

// Exporta la instancia de la aplicación
export default app;