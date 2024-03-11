// Importación de módulos y bibliotecas necesarias
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Definición de la URL de la API
const URI = 'http://localhost:8000/acrony/';

// Componente funcional para crear un nuevo acrónimo
const CompCreateAcrony = () => {
    // Estados locales para gestionar datos del formulario y mensajes
    const [acronimo, setAcronimo] = useState('');
    const [name, setName] = useState('');
    const [contentAcrom, setContentAcrom] = useState('');
    const [noDataMessage, setNoDataMessage] = useState('');
    
    // Hook de navegación para redireccionar a otras páginas
    const navigate = useNavigate();

    // Función asincrónica para consultar un acrónimo a través de la API
    const consultarAcronimo = async () => {
        try {
            const response = await axios.get(`${URI}${acronimo}`);
            const data = response.data;

            if (data.length > 0) {
                const acronimoData = data[0];
                const acronymsList = acronimoData.lfs.map(variant => variant.lf).join('\n');

                setName(acronimoData.sf);
                setContentAcrom(acronymsList);
                setNoDataMessage('');
            } else {
                setNoDataMessage('Sin datos.');
            }
        } catch (error) {
            console.error('Error en la consulta:', error);
        }
    };

    // Función asincrónica para almacenar un nuevo acrónimo a través de la API
    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, { name, contentAcrom });
            navigate('/');
        } catch (error) {
            console.error('Error al almacenar el acrónimo:', error);
        }
    };

    // Renderizado del componente
    return (
        <div>
            <h1 className='m-3'>Nueva Consulta</h1>
            {noDataMessage && <p className='alert alert-danger'>{noDataMessage}</p>}
            {/* Formulario para ingresar y consultar un acrónimo */}
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">Nombre Acronimo</label>
                    <input
                        className='form-control'
                        value={acronimo}
                        onChange={(e) => setAcronimo(e.target.value)}
                    />
                    <button type="button" className='btn btn-info' onClick={consultarAcronimo}>
                        Consultar
                    </button>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        readOnly
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido</label>
                    <textarea
                    className='form-control'
                        value={contentAcrom}
                        onChange={(e) => setContentAcrom(e.target.value)}
                        readOnly // Para evitar la edición directa del contenido
                        rows={5} // Número de filas en el textarea
                    />
                </div>

                {/* Botones para guardar y volver */}
                <button type="submit" className='btn btn-success me-2'>Guardar</button>
                <Link to="/" className='btn btn-primary' >
                    <i className='fas fa-home'></i> Volver
                </Link>
            </form>
        </div>
    );
};

// Exportación del componente para su uso en otros archivos
export default CompCreateAcrony;
