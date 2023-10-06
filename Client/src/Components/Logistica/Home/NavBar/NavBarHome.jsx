import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from '../Secciones/Agenda/Agenda';
import Calculadoras from '../Secciones/Calculadoras/Calculadora';
import Noticias from '../Secciones/Noticias/Noticias';
import Saludos from '../Secciones/Saludos/Saludos'

export default function NavBarHome() {
  const [selectedComponent, setSelectedComponent] = useState('noticias');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center ">
        <h1 className='titleNav'>Menú Principal</h1>
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
              className={`nav-link btn ${selectedComponent === 'calculadoras' ? 'active' : ''}`}
              onClick={() => handleComponentClick('calculadoras')}
              style={{
                color: selectedComponent === 'calculadoras' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'calculadoras' ? 'white' : 'initial'
              }}
            >
              Calculadoras
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'saludos' ? 'active' : ''}`}
              onClick={() => handleComponentClick('saludos')}
              style={{
                color: selectedComponent === 'saludos' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'saludos' ? 'white' : 'initial'
              }}
            >
              Saludos
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'agenda' && <Agenda />}
        {selectedComponent === 'noticias' && <Noticias />}
        {selectedComponent === 'calculadoras' && <Calculadoras />}
        {selectedComponent === 'saludos' && <Saludos />}
      </div>
    </div>
  );
}
