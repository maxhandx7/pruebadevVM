// Importación de módulos y bibliotecas necesarias
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Definición de la URL de la API
const URI = 'http://localhost:8000/acrony/';

// Componente funcional para mostrar el historial de acrónimos
const CompShowAcronym = () => {
    // Estado local para almacenar la lista de acrónimos
    const [Acronyms, setAcronyms] = useState([]);

    // Efecto secundario que se ejecuta una vez al cargar el componente
    useEffect(() => {
        // Llamada a la función para obtener la lista de acrónimos
        getAcrony();
    }, []);

    // Función asincrónica para obtener la lista de acrónimos desde la API
    const getAcrony = async () => {
        try {
            // Realiza una solicitud GET a la API y actualiza el estado con los datos obtenidos
            const res = await axios.get(URI);
            setAcronyms(res.data);
        } catch (error) {
            console.error('Error al obtener acrónimos:', error);
        }
    };

    // Renderizado del componente
    return (
        <div className='container'>
            <div className="row">
                <h1 className='m-5'><i className='fas fa-code'></i> Prueba Tecnica Dev</h1>
                {/* Enlace para crear un nuevo acrónimo */}
                <Link to="/create" className='btn btn-primary'>
                    <i className='fas fa-plus'></i> Nueva Consulta
                </Link>
                <div className="col">
                    <h3 style={{ textAlign: 'left', margin: '20px' }}>
                        <i className='fas fa-book'></i> Historial
                    </h3>
                    {/* Tabla que muestra el historial de acrónimos */}
                    <table className='table table-striped table-dark'>
                        <thead>
                            <tr>
                                <th>Acronimo</th>
                                <th>Contenido</th>
                                <th>Creado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mapeo de la lista de acrónimos para mostrar cada entrada en la tabla */}
                            {Acronyms.map((acronym) => (
                                <tr key={acronym.id}>
                                    <td> {acronym.name} </td>
                                    <td>  {acronym.contentAcrom} </td>
                                    <td> {format(new Date(acronym.createdAt), 'dd/MM/yyyy HH:mm:ss')} </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// Exportación del componente para su uso en otros archivos
export default CompShowAcronym;
