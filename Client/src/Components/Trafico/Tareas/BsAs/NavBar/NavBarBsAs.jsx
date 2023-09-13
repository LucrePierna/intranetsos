import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapas from '../Secciones/Mapas/Mapas'
import Procedimientos from '../Secciones/Procedimientos/Procedimientos'
import Manual from '../Secciones/Manual/Manual'
import Moviles from '../Secciones/Moviles/Moviles'

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
              className={`nav-link btn ${selectedComponent === 'manual' ? 'active' : ''}`}
              onClick={() => handleComponentClick('manual')}
              style={{
                color: selectedComponent === 'manual' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'manual' ? 'white' : 'initial'
              }}
            >
              Manual
            </buttonmanual>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'moviles' ? 'active' : ''}`}
              onClick={() => handleComponentClick('moviles')}
              style={{
                color: selectedComponent === 'moviles' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'moviles' ? 'white' : 'initial'
              }}
            >
              Moviles
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'procedimientos' && <Procedimientos />}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'manual' && <Manual />}
        {selectedComponent === 'moviles' && <Moviles />}

      </div>
    </div>
  );
}
