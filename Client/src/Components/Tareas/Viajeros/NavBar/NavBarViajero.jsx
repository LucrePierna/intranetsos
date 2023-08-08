import React, { useState } from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Calculadora from '../Secciones/Calculadora/Calculadora'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Links from '../Secciones/Links/Links'
import Reintegros from '../Secciones/Reintegros/Reintegros'

export default function NavBarViajero() {
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
              className={`nav-link btn ${selectedComponent === 'calculadora' ? 'active' : ''}`}
              onClick={() => handleComponentClick('calculadora')}
            >
              Calculadora
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'links' ? 'active' : ''}`}
              onClick={() => handleComponentClick('links')}
            >
              Links
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'reintegro' ? 'active' : ''}`}
              onClick={() => handleComponentClick('reintegro')}
            >
              Reintegro
            </button>
          </li>

        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'calculadora' && <Calculadora />}
        {selectedComponent === 'links' && <Links />}
        {selectedComponent === 'reintegro' && <Reintegros />}



      </div>
    </div>
  )
}
