import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Instructivo from '../Secciones/Instructivo/Instructivo'
import MicroStrategy from '../Secciones/MicroStrategy/MicroStrategy'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Planilla from '../Secciones/Planilla/Planilla'


export default function NavBarTdc() {
  const [selectedComponent, setSelectedComponent] = useState('flujograma');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
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
              className={`nav-link btn ${selectedComponent === 'planilla' ? 'active' : ''}`}
              onClick={() => handleComponentClick('planilla')}
              style={{
                color: selectedComponent === 'planilla' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'planilla' ? 'white' : 'initial'
              }}
            >
              Planilla
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
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'microStrategy' ? 'active' : ''}`}
              onClick={() => handleComponentClick('microStrategy')}
              style={{
                color: selectedComponent === 'microStrategy' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'microStrategy' ? 'white' : 'initial'
              }}
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
        {selectedComponent === 'microStrategy' && <MicroStrategy />}

      </div>
    </div>

  )
}
