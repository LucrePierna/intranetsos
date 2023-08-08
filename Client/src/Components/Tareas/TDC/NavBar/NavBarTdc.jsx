import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CalculoKms from '../Secciones/CalculoKms/CalculoKms'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import MicroStrategy from '../Secciones/MicroStrategy/MicroStrategy'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Planilla from '../Secciones/Planilla/Planilla'


export default function NavBarTdc() {
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
              className={`nav-link btn ${selectedComponent === 'planilla' ? 'active' : ''}`}
              onClick={() => handleComponentClick('planilla')}
            >
              Planilla
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'instructivo' ? 'active' : ''}`}
              onClick={() => handleComponentClick('instructivo')}
            >
              Instructivo
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'calculokm' ? 'active' : ''}`}
              onClick={() => handleComponentClick('calculokm')}
            >
              Calculos de Km
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'microStrategy' ? 'active' : ''}`}
              onClick={() => handleComponentClick('microStrategy')}
            >
              MicroStrategy
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'planilla' && <Planilla />}
        {selectedComponent === 'calculokm' && <CalculoKms />}
        {selectedComponent === 'microStrategy' && <MicroStrategy />}

      </div>
    </div>

  )
}
