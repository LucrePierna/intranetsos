import React, { useState } from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Planilla from '../Secciones/Planilla/Planilla'
import Mapas from '../Secciones/Mapas/Mapas'


export default function NavBarExtranjero() {
  const [selectedComponent, setSelectedComponent] = useState('flujograma');

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
              className={`nav-link btn ${selectedComponent === 'Mapas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('Mapas')}
              style={{
                color: selectedComponent === 'Mapas' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'Mapas' ? 'white' : 'initial'
              }}
            >
              Mapa
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'planilla' && <Planilla />}
        {selectedComponent === 'Mapas' && <Mapas />}
      </div>
    </div>
  )
}
