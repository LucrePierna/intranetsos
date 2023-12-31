import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bases from '../Secciones/Bases/Bases'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Planillas from '../Secciones/Planillas/Planillas'

export default function NavBarTransportin() {
  const [selectedComponent, setSelectedComponent] = useState('instructivo');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center">
        <h1 className='titleNav'>Transportín</h1>
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

          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'planillas' ? 'active' : ''}`}
              onClick={() => handleComponentClick('planillas')}
              style={{
                color: selectedComponent === 'planillas' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'planillas' ? 'white' : 'initial'
              }}
            >
              Planillas
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">

        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'planillas' && <Planillas />}


      </div>
    </div>

  )
}
