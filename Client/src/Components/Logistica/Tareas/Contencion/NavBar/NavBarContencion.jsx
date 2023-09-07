import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Seccion1 from '../Secciones/Procedimiento/Seccion1'
import Seccion2 from '../Secciones/Flujograma/Seccion2'
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'Seccion1' ? 'active' : ''}`}
              onClick={() => handleComponentClick('Seccion1')}
              style={{
                color: selectedComponent === 'Seccion1' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'Seccion1' ? 'white' : 'initial'
              }}
            >
              Seccion1
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'Seccion2' ? 'active' : ''}`}
              onClick={() => handleComponentClick('consultas')}
              style={{
                color: selectedComponent === 'Seccion2' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'Seccion2' ? 'white' : 'initial'
              }}
            >
              Seccion2
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'novedades' ? 'active' : ''}`}
              onClick={() => handleComponentClick('novedades')}
              style={{
                color: selectedComponent === 'novedades' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'novedades' ? 'white' : 'initial'
              }}
            >
              Novedades
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'prestadores' ? 'active' : ''}`}
              onClick={() => handleComponentClick('prestadores')}
              style={{
                color: selectedComponent === 'prestadores' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'prestadores' ? 'white' : 'initial'
              }}
            >
              Prestadores
            </button>
          </li>
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
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'Seccion1' && <Seccion1 />}
        {selectedComponent === 'Seccion2' && <Seccion2 />}
        {selectedComponent === 'novedades' && <Novedades />}
        {selectedComponent === 'prestadores' && <Prestadores />}
        {selectedComponent === 'procedimientos' && <Procedimientos />}
      </div>
    </div>
  )
}
