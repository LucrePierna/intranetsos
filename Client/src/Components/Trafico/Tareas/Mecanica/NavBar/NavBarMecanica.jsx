import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapas from '../Secciones/Mapas/Mapas'
import Procedimientos from '../Secciones/Procedimientos/Procedimientos'
import Prestadores from '../Secciones/Prestadores/Prestadores'
import Baterias from '../Secciones/Baterias/Baterias'

export default function NavBarBsAs() {
  const [selectedComponent, setSelectedComponent] = useState('procedimientos');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center ">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'procedimientos' ? 'active' : ''}`}
              onClick={() => handleComponentClick('procedimientos')}
              style={{
                color: selectedComponent === 'procedimientos' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'procedimientos' ? 'white' : 'initial'
              }}
            >
              Procedimientos
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
            <buttonmanual
              className={`nav-link btn ${selectedComponent === 'baterias' ? 'active' : ''}`}
              onClick={() => handleComponentClick('baterias')}
              style={{
                color: selectedComponent === 'baterias' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'baterias' ? 'white' : 'initial'
              }}
            >
              Baterias
            </buttonmanual>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'prestadores' ? 'active' : ''}`}
              onClick={() => handleComponentClick('prestadores')}
              style={{
                color: selectedComponent === 'prestadores' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'prestadores' ? 'white' : 'initial'
              }}
            >
              Prestadores
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'procedimientos' && <Procedimientos />}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'baterias' && <Baterias />}
        {selectedComponent === 'prestadores' && <Prestadores />}

      </div>
    </div>
  );
}
