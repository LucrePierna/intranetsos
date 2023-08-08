import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flujograma from '../secciones/Flujograma/Flujograma'
import Consultas from '../secciones/Consultas/Consultas'
import Novedades from '../secciones/Novedades/Novedades'
import Prestadores from '../secciones/Prestadores/Prestadores'
import Procedimientos from '../secciones/Procedimientos/Procedimientos'

export default function NavBarDerivacion() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'flujograma' ? 'active' : ''}`}
              onClick={() => handleComponentClick('flujograma')}
            >
              Flujograma
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'consultas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('consultas')}
            >
              Consultas
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'novedades' ? 'active' : ''}`}
              onClick={() => handleComponentClick('novedades')}
            >
              Novedades
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'prestadores' ? 'active' : ''}`}
              onClick={() => handleComponentClick('prestadores')}
            >
              Prestadores
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'procedimientos' ? 'active' : ''}`}
              onClick={() => handleComponentClick('procedimientos')}
            >
              Procedimientos
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'consultas' && <Consultas />}
        {selectedComponent === 'novedades' && <Novedades />}
        {selectedComponent === 'prestadores' && <Prestadores />}
        {selectedComponent === 'procedimientos' && <Procedimientos />}
      </div>
    </div>
  )
}
