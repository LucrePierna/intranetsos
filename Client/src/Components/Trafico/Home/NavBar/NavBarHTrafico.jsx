import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from '../Secciones/Agenda/Agenda'
import DesvioMvl from '../Secciones/DesviosMvl/DesviosMvl'
import Extraccion from '../Secciones/Extraccion/Extraccion'
import Incidencias from '../Secciones/Incidencias/Incidencias'
import Novedades from '../Secciones/Novedades/Novedades'
import Reintegro from '../Secciones/Reintegro/Reintegro'
import Saludos from '../Secciones/Saludos/Saludos'
import TiempoEspera from '../Secciones/TiempoEspera/TiempoEspera'

export default function NavBarHTrafico() {
  const [selectedComponent, setSelectedComponent] = useState('novedades');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center ">
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
              Novedades
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
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'extraccion' ? 'active' : ''}`}
              onClick={() => handleComponentClick('extraccion')}
              style={{
                color: selectedComponent === 'extraccion' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'extraccion' ? 'white' : 'initial'
              }}
            >
              Extracción
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'espera' ? 'active' : ''}`}
              onClick={() => handleComponentClick('espera')}
              style={{
                color: selectedComponent === 'espera' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'espera' ? 'white' : 'initial'
              }}
            >
              Tiempo Espera/Trabajo
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
              className={`nav-link btn ${selectedComponent === 'desviomvl' ? 'active' : ''}`}
              onClick={() => handleComponentClick('desviomvl')}
              style={{
                color: selectedComponent === 'desviomvl' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'desviomvl' ? 'white' : 'initial'
              }}
            >
              Desvio de móviles
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'novedades' && <Novedades />}
        {selectedComponent === 'agenda' && <Agenda />}
        {selectedComponent === 'reintegro' && <Reintegro />}
        {selectedComponent === 'extraccion' && <Extraccion />}
        {selectedComponent === 'espera' && <TiempoEspera />}
        {selectedComponent === 'incidencias' && <Incidencias />}
        {selectedComponent === 'saludos' && <Saludos />}
        {selectedComponent === 'desviomvl' && <DesvioMvl />}
      </div>
    </div>
  );
}
