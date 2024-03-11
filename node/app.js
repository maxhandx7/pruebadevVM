// Importación de módulos necesarios
import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import acronyRoutes from './routes/routes.js';

// Creación de una instancia de express
const app = express();

// Configuración de middleware
app.use(cors());            
app.use(express.json());     
app.use('/acrony', acronyRoutes);  

// Autenticación con la base de datos
try {
    await db.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`Error: ${error}`);
}

// Ruta de prueba para verificar la conexión
app.get('/', (req, res) => {
    res.send('Conectado');
});

// Inicio del servidor en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor escuchando en http://localhost:8000/');
});
