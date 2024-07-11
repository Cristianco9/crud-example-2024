// Importa la instancia de la aplicación Express desde app.js
import app from "./app.js";
// Importa la configuración del puerto desde config.js
import { port } from "./libraries/netConfig.js";

// Inicia el servidor para que escuche en el puerto especificado
app.listen(port, () => {
  // Muestra un mensaje en la consola indicando en qué puerto está corriendo el
  // servidor
  console.log(`Server on port ${port}`);
});
