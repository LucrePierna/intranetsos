import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flujograma from '../secciones/Flujograma/Flujograma'
import TareasEspeciales from '../secciones/TareasEspeciales/TareasEspeciales';
import Procedimientos from '../secciones/Procedimientos/Procedimientos'
export default function NavBarDerivacion() {
  const [selectedComponent, setSelectedComponent] = useState('procedimientos');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'procedimientos' ? 'active' : ''}`}
              onClick={() => handleComponentClick('procedimientos')}
              style={{
                color: selectedComponent === 'procedimientos' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'procedimientos' ? 'white' : 'initial'
              }}
            >
              Procedimientos
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'flujograma' ? 'active' : ''}`}
              onClick={() => handleComponentClick('flujograma')}
              style={{
                color: selectedComponent === 'flujograma' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'flujograma' ? 'white' : 'initial'
              }}
            >
              Flujograma
            </button>
          </li>

          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'tareas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('tareas')}
              style={{
                color: selectedComponent === 'tareas' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'tareas' ? 'white' : 'initial'
              }}
            >
              Servicios Especiales
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'procedimientos' && <Procedimientos />}
        {selectedComponent === 'tareas' && <TareasEspeciales />}
      </div>
    </div>
  )
}
