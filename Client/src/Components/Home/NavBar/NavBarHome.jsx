import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from '../Secciones/Agenda/Agenda';
import Informacion from '../Secciones/Informacion/Informacion';
import Noticias from '../Secciones/Noticias/Noticias';
import Reintegro from '../Secciones/Reintegro/Reintegro';

export default function NavBarHome() {
  const [selectedComponent, setSelectedComponent] = useState();

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'noticias' ? 'active' : ''}`}
              onClick={() => handleComponentClick('noticias')}
              style={{
                color: selectedComponent === 'noticias' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'noticias' ? 'white' : 'initial'
              }}
            >
              Noticias
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'agenda' ? 'active' : ''}`}
              onClick={() => handleComponentClick('agenda')}
              style={{
                color: selectedComponent === 'agenda' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'agenda' ? 'white' : 'initial'
              }}
            >
              Agenda
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'informacion' ? 'active' : ''}`}
              onClick={() => handleComponentClick('informacion')}
              style={{
                color: selectedComponent === 'informacion' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'informacion' ? 'white' : 'initial'
              }}
            >
              Información
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'reintegro' ? 'active' : ''}`}
              onClick={() => handleComponentClick('reintegro')}
              style={{
                color: selectedComponent === 'reintegro' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'reintegro' ? 'white' : 'initial'
              }}
            >
              Reintegro
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'agenda' && <Agenda />}
        {selectedComponent === 'informacion' && <Informacion />}
        {selectedComponent === 'noticias' && <Noticias />}
        {selectedComponent === 'reintegro' && <Reintegro />}
      </div>
    </div>
  );
}
