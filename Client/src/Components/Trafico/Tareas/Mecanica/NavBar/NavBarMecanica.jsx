import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapas from '../Secciones/Mapas/Mapas'
/* import Procedimientos from '../Secciones/Procedimientos/Procedimientos' */
import Prestadores from '../Secciones/Prestadores/Prestadores'
import Baterias from '../Secciones/Baterias/Baterias'
import logo from '../../../Image/Menu Trafico/Iconos/logoTrafinet.png'

export default function NavBarBsAs() {
  const [selectedComponent, setSelectedComponent] = useState('mapas');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-between ">
        <div></div>
        <ul className="nav nav-tabs just">
          {/*           <li className="nav-item">
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
          </li> */}
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
        <div className='logoTrafico'>
          <img src={logo} alt="logoTrafinet" height={50} width={60} />
        </div>
      </nav>

      <div className="container-fluid">
        {/*    {selectedComponent === 'procedimientos' && <Procedimientos />} */}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'baterias' && <Baterias />}
        {selectedComponent === 'prestadores' && <Prestadores />}

      </div>
    </div>
  );
}
