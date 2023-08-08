import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Transportin from '../Transportin'
import Bases from '../Secciones/Bases/Bases'
import Corredores from '../Secciones/Corredores/Corredores'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Planillas from '../Secciones/Planillas/Planillas'

export default function NavBarTransportin() {
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
              className={`nav-link btn ${selectedComponent === 'inicio' ? 'active' : ''}`}
              onClick={() => handleComponentClick('inicio')}
            >
              Inicio
            </button>
          </li>
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
              className={`nav-link btn ${selectedComponent === 'bases' ? 'active' : ''}`}
              onClick={() => handleComponentClick('bases')}
            >
              Bases
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
              className={`nav-link btn ${selectedComponent === 'planillas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('planillas')}
            >
              Planillas
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'corredores' ? 'active' : ''}`}
              onClick={() => handleComponentClick('corredores')}
            >
              Corredores
            </button>
          </li>

        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'inicio' && <Transportin />}
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'planillas' && <Planillas />}
        {selectedComponent === 'corredores' && <Corredores />}


      </div>
    </div>

  )
}
