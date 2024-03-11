// Importación del módulo express
import express from 'express';

// Importación de los controladores necesarios
import { createAcrony, getAcrony, getAllAcrony, getApi } from '../controllers/acronymController.js';

// Creación de un enrutador de express
const router = express.Router();

// Definición de las rutas y sus correspondientes controladores
router.get('/:parametro', getApi);  
router.get('/', getAllAcrony);       
router.post('/', createAcrony);       
router.get('/:id', getAcrony);        

// Exportación del enrutador para su uso en otros archivos
export default router;
