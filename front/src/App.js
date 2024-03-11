// Importación de módulos y archivos necesarios
import logo from './logo.svg';
import './App.css';
import CompShowAcronym from './acronym/show';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCreateAcrony from './acronym/create';

// Función principal que representa la aplicación
function App() {
  return (
    <div className="App">
      {/* Encabezado de la aplicación */}
      <header className="App-header">
        {/* Configuración de enrutamiento con React Router */}
        <BrowserRouter>
          <Routes>
            {/* Ruta para mostrar el historial de acrónimos */}
            <Route path='/' element={<CompShowAcronym />} />
            {/* Ruta para crear un nuevo acrónimo */}
            <Route path='/create' element={<CompCreateAcrony />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

// Exportación del componente principal para su uso en otros archivos
export default App;
