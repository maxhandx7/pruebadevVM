// Importación de módulos y modelos necesarios
import AcronymModel from "../models/AcronymModel.js";
import axios from 'axios';

// Controlador para obtener datos de una API externa según un parámetro
export const getApi = async (req, res) => {
    try {
        // Obtiene el parámetro de la solicitud
        const parametro = req.params.parametro;
        // Construye la URL de la API externa
        const apiUrl = `https://www.nactem.ac.uk/software/acromine/dictionary.py?sf=${parametro}`;

        // Realiza una solicitud GET a la API externa y devuelve la respuesta al cliente
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la solicitud a la API');
    }
};

// Controlador para obtener todos los acrónimos almacenados en la base de datos
export const getAllAcrony = async (req, res) => {
    try {
        // Consulta todos los acrónimos en la base de datos
        const Acronys = await AcronymModel.findAll();
        res.json(Acronys);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Controlador para obtener un acrónimo específico por su ID
export const getAcrony = async (req, res) => {
    try {
        // Consulta un acrónimo por su ID en la base de datos
        const Acrony = await AcronymModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Acrony[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Controlador para crear un nuevo acrónimo en la base de datos
export const createAcrony = async (req, res) => {
    try {
        // Crea un nuevo registro de acrónimo en la base de datos utilizando los datos del cuerpo de la solicitud
        await AcronymModel.create(req.body);
        res.json({
            "message": "Registro creado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
