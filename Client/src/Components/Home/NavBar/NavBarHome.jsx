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
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'noticias' ? 'active' : ''}`}
              onClick={() => handleComponentClick('noticias')}
            >
              Noticias
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'agenda' ? 'active' : ''}`}
              onClick={() => handleComponentClick('agenda')}
            >
              Agenda
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'informacion' ? 'active' : ''}`}
              onClick={() => handleComponentClick('informacion')}
            >
              Información
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'reintegro' ? 'active' : ''}`}
              onClick={() => handleComponentClick('reintegro')}
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
