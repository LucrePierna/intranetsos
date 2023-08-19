import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chattigo from '../Secciones/Chattigo/Chattigo'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Anulacion from '../Secciones/Anulación/Anulacion';

export default function NavBarAtp() {
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
              className={`nav-link btn ${selectedComponent === 'anulacion' ? 'active' : ''}`}
              onClick={() => handleComponentClick('anulacion')}
              style={{
                color: selectedComponent === 'anulacion' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'anulacion' ? 'white' : 'initial'
              }}
            >
              Anulación
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'chattigo' ? 'active' : ''}`}
              onClick={() => handleComponentClick('chattigo')}
              style={{
                color: selectedComponent === 'chattigo' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'chattigo' ? 'white' : 'initial'
              }}
            >
              Chattigo
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'instructivo' ? 'active' : ''}`}
              onClick={() => handleComponentClick('instructivo')}
              style={{
                color: selectedComponent === 'instructivo' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'instructivo' ? 'white' : 'initial'
              }}
            >
              Instructivo
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'anulacion' && <Anulacion />}
        {selectedComponent === 'chattigo' && <Chattigo />}
        {selectedComponent === 'instructivo' && <Instructivo />}
      </div>
    </div>
  );
}
