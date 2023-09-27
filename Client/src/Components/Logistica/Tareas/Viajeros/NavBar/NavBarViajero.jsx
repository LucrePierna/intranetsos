import React, { useState } from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Calculadora from '../Secciones/Calculadora/Calculadora'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Procedimiento from '../Secciones/Procedimiento/Procedimiento'

export default function NavBarViajero() {
  const [selectedComponent, setSelectedComponent] = useState('procedimiento');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <h1 className='titleNav'>Viajero</h1>
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'procedimiento' ? 'active' : ''}`}
              onClick={() => handleComponentClick('procedimiento')}
              style={{
                color: selectedComponent === 'procedimiento' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'procedimiento' ? 'white' : 'initial'
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
              className={`nav-link btn ${selectedComponent === 'calculadora' ? 'active' : ''}`}
              onClick={() => handleComponentClick('calculadora')}
              style={{
                color: selectedComponent === 'calculadora' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'calculadora' ? 'white' : 'initial'
              }}
            >
              Calculadora
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'procedimiento' && <Procedimiento />}
        {selectedComponent === 'calculadora' && <Calculadora />}

      </div>
    </div>
  )
}
