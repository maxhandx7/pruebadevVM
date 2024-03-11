// Importación del tipo de datos y la función define desde Sequelize
import { DataTypes } from "sequelize";

// Importación de la conexión a la base de datos
import db from "../database/db.js";

// Definición del modelo para la entidad "historial"
const AcronymModel = db.define('historial', {
    name: { type: DataTypes.STRING },      // Campo para el nombre del acrónimo
    contentAcrom: { type: DataTypes.TEXT } // Campo para el contenido del acrónimo
});

// Exportación del modelo para su uso en otros archivos
export default AcronymModel;
