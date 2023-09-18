import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bases from '../Secciones/Bases/Bases'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Terminales from '../Secciones/Terminales/Terminales'
import Pesados from '../Secciones/Pesados/Pesados'
import Mapas from '../Secciones/Mapas/Mapas'
import TipoDeVehiculos from '../Secciones/TiposDeVehiculos/TipoDeVehiculos'
import Trasvase from '../Secciones/Trasvase/Trasvase'

export default function NavBarTP() {
  const [selectedComponent, setSelectedComponent] = useState('instructivo');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <h1 className='titleNav'>Terminales y Pesados</h1>
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'terminales' ? 'active' : ''}`}
              onClick={() => handleComponentClick('terminales')}
              style={{
                color: selectedComponent === 'terminales' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'terminales' ? 'white' : 'initial'
              }}
            >
              Terminales
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'pesados' ? 'active' : ''}`}
              onClick={() => handleComponentClick('pesados')}
              style={{
                color: selectedComponent === 'pesados' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'pesados' ? 'white' : 'initial'
              }}
            >
              Pesados
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
              className={`nav-link btn ${selectedComponent === 'bases' ? 'active' : ''}`}
              onClick={() => handleComponentClick('bases')}
              style={{
                color: selectedComponent === 'bases' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'bases' ? 'white' : 'initial'
              }}
            >
              Bases
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'mapas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('mapas')}
              style={{
                color: selectedComponent === 'mapas' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'mapas' ? 'white' : 'initial'
              }}
            >
              Mapas
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'tiposvhc' ? 'active' : ''}`}
              onClick={() => handleComponentClick('tiposvhc')}
              style={{
                color: selectedComponent === 'tiposvhc' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'tiposvhc' ? 'white' : 'initial'
              }}
            >
              Tipos de Vehiculos
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'trasvase' ? 'active' : ''}`}
              onClick={() => handleComponentClick('trasvase')}
              style={{
                color: selectedComponent === 'trasvase' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'trasvase' ? 'white' : 'initial'
              }}
            >
              Trasvase
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'terminales' && <Terminales />}
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'pesados' && <Pesados />}
        {selectedComponent === 'tiposvhc' && <TipoDeVehiculos />}
        {selectedComponent === 'trasvase' && <Trasvase />}

      </div>
    </div>
  )
}
