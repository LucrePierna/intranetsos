import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Procedimiento from '../Secciones/Procedimiento/Procedimiento'
import Flujograma from '../Secciones/Flujograma/Flujograma'


export default function NavBarDerivacion() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'Procedimiento' ? 'active' : ''}`}
              onClick={() => handleComponentClick('Procedimiento')}
              style={{
                color: selectedComponent === 'Procedimiento' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'Procedimiento' ? 'white' : 'initial'
              }}
            >
              Procedimiento
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'Flujograma' ? 'active' : ''}`}
              onClick={() => handleComponentClick('consultas')}
              style={{
                color: selectedComponent === 'Flujograma' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'Flujograma' ? 'white' : 'initial'
              }}
            >
              Flujograma
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'Procedimiento' && <Procedimiento />}
        {selectedComponent === 'Flujograma' && <Flujograma />}
      </div>
    </div>
  )
}
