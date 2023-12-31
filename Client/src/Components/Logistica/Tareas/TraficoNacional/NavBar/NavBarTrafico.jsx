import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Noticias from '../Secciones/Noticias/Noticias'
import Bases from '../Secciones/Bases/Bases'


export default function NavBarTrafico() {
  const [selectedComponent, setSelectedComponent] = useState('instructivo');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <h1 className='titleNav'>Tráfico</h1>
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'instructivo' ? 'active' : ''}`}
              onClick={() => handleComponentClick('instructivo')}
              style={{
                color: selectedComponent === 'instructivo' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'instructivo' ? 'white' : 'initial'
              }}
            >
              Procedimientos
            </button>
          </li>
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
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'noticias' && <Noticias />}
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'bases' && <Bases />}
      </div>
    </div>
  );
}
