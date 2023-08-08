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
              className={`nav-link btn ${selectedComponent === 'fichastecnicas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('fichastecnicas')}
            >
              Fichas Técnicas
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'mapas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('mapas')}
            >
              Mapas
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'categorias' ? 'active' : ''}`}
              onClick={() => handleComponentClick('categorias')}
            >
              Categorías
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'tiposvhc' ? 'active' : ''}`}
              onClick={() => handleComponentClick('tiposvhc')}
            >
              Tipos de Vehiculos
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'trasvase' ? 'active' : ''}`}
              onClick={() => handleComponentClick('trasvase')}
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
