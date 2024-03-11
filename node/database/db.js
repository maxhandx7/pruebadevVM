// Importación de la clase Sequelize desde la biblioteca Sequelize
import { Sequelize } from "sequelize";

// Configuración de la conexión a la base de datos MySQL
const db = new Sequelize('pruebadev', 'root', '', {
    host: 'localhost',    // Dirección del servidor de la base de datos
    dialect: 'mysql'      // Tipo de base de datos que se está utilizando
});

// Exportación del objeto de conexión a la base de datos
export default db;
