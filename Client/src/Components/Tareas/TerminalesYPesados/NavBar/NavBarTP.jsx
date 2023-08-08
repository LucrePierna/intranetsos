import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bases from '../Secciones/Bases/Bases'
import FichasTecnicas from '../Secciones/FichasTecnicas/FichasTecnicas'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import LivianosPesadosMotos from '../Secciones/LivianosPesadosMotos/LivianosPesadosMotos'
import Mapas from '../Secciones/Mapas/Mapas'
import TipoDeVehiculos from '../Secciones/TiposDeVehiculos/TipoDeVehiculos'
import Trasvase from '../Secciones/Trasvase/Trasvase'

export default function NavBarTP() {
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
              className={`nav-link btn ${selectedComponent === 'fichastecnicas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('fichastecnicas')}
              style={{
                color: selectedComponent === 'fichastecnicas' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'fichastecnicas' ? 'white' : 'initial'
              }}
            >
              Fichas Técnicas
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
              className={`nav-link btn ${selectedComponent === 'categorias' ? 'active' : ''}`}
              onClick={() => handleComponentClick('categorias')}
              style={{
                color: selectedComponent === 'categorias' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'categorias' ? 'white' : 'initial'
              }}
            >
              Categorías
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
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'fichastecnicas' && <FichasTecnicas />}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'categorias' && <LivianosPesadosMotos />}
        {selectedComponent === 'tiposvhc' && <TipoDeVehiculos />}
        {selectedComponent === 'trasvase' && <Trasvase />}

      </div>
    </div>
  )
}
