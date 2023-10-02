import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from '../Secciones/Agenda/Agenda'
import Incidencias from '../Secciones/Incidencias/Incidencias'
import Procedimientos from '../Secciones/Procedimientos/Procedimientos';
import Calculadoras from '../Secciones/Calculadoras/Calculadoras';
import Noticias from '../Secciones/Noticias/Noticias'
import Saludos from '../Secciones/Saludos/Saludos'
import logo from '../../Image/Menu Trafico/Iconos/logoTrafinet.png'


export default function NavBarHTrafico() {
  const [selectedComponent, setSelectedComponent] = useState('novedades');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-between ">
        <div>  
        </div>
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'novedades' ? 'active' : ''}`}
              onClick={() => handleComponentClick('novedades')}
              style={{
                color: selectedComponent === 'novedades' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'novedades' ? 'white' : 'initial'
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
          <li className="nav-item">
            <buttonincidencias
              className={`nav-link btn ${selectedComponent === 'incidencias' ? 'active' : ''}`}
              onClick={() => handleComponentClick('incidencias')}
              style={{
                color: selectedComponent === 'incidencias' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'incidencias' ? 'white' : 'initial'
              }}
            >
              Incidencias
            </buttonincidencias>
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
        </ul>
        <div className='logoTrafico'>
        <img src={logo} alt="logoTrafinet" height={50} width={60}/>
        </div>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'novedades' && <Noticias />}
        {selectedComponent === 'agenda' && <Agenda />}
        {selectedComponent === 'calculadora' && <Calculadoras />}
        {selectedComponent === 'incidencias' && <Incidencias />}
        {selectedComponent === 'saludos' && <Saludos />}
        {selectedComponent === 'procedimientos' && <Procedimientos />}
      </div>
    </div>
  );
}
