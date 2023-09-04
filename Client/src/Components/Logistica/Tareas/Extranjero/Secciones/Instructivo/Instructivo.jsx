import React, { useState } from 'react'
import Mapas from '../Mapas/Mapas';

export default function Instructivo() {

  const [selectedComponent, setSelectedComponent] = useState('uruguay');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };



  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">

          <button className={`nav-link btn ${selectedComponent === 'mapas' ? 'active' : ''}`}
            onClick={() => handleComponentClick('uruguay')}
            style={{
              color: selectedComponent === 'uruguay' ? 'black' : 'red',
              backgroundColor: selectedComponent === 'uruguay' ? 'white' : 'initial'
            }} id="nav-uruguay-tab" data-bs-toggle="tab" data-bs-target="#nav-uruguay" type="button" role="tab" aria-controls="nav-uruguay" aria-selected="false">Uruguay</button>

          <button onClick={() => handleComponentClick('brasil')}
            style={{
              color: selectedComponent === 'brasil' ? 'black' : 'red',
              backgroundColor: selectedComponent === 'brasil' ? 'white' : 'initial'
            }} id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="false">Brasil</button>

          <button onClick={() => handleComponentClick('chile')}
            style={{
              color: selectedComponent === 'chile' ? 'black' : 'red',
              backgroundColor: selectedComponent === 'chile' ? 'white' : 'initial'
            }} className="nav-link" id="nav-chile-tab" data-bs-toggle="tab" data-bs-target="#nav-chile" type="button" role="tab" aria-controls="nav-chile" aria-selected="false">Chile</button>

          <button onClick={() => handleComponentClick('contraprestacion')}
            style={{
              color: selectedComponent === 'contraprestacion' ? 'black' : 'red',
              backgroundColor: selectedComponent === 'contraprestacion' ? 'white' : 'initial'
            }} className="nav-link" id="nav-contraprestacion-tab" data-bs-toggle="tab" data-bs-target="#nav-contraprestacion" type="button" role="tab" aria-controls="nav-contraprestacion" aria-selected="false">ContraPrestación</button>

        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade" id="nav-uruguay" role="tabpanel" aria-labelledby="nav-uruguay-tab" tabindex="0">
          {selectedComponent === 'uruguay' &&
            <div className='d-flex flex-row m-auto'>
              <div className='d-flex flex-column'>
                <h1>Via Terrestre</h1>
                <ul>
                  <li>gola</li>
                  <li>asdasd</li>
                  <li>fdsafdsaf</li>
                </ul>
              </div>
              <div className='d-flex flex-column'>
                <h1>via fluvial</h1>
                <ul>
                  <li>gola</li>
                  <li>asdasd</li>
                  <li>fdsafdsaf</li>
                </ul>
              </div>
            </div>}
        </div>
        
        <div className="tab-pane fade" id="nav-brasil" role="tabpanel" aria-labelledby="nav-brasil-tab" tabindex="0">
          {selectedComponent === 'brasil' &&
            <div>
              <h1>hola fran estamos en brasil</h1>
            </div>}
        </div>
        
        <div className="tab-pane fade" id="nav-chile" role="tabpanel" aria-labelledby="nav-chile-tab" tabindex="0">
          {selectedComponent === 'chile' &&
            <div>
              <h1>chile</h1>
            </div>}
        </div>
        
        <div className="tab-pane fade" id="nav-contraprestacion" role="tabpanel" aria-labelledby="nav-contraprestacion-tab" tabindex="0">
          {selectedComponent === 'contraprestacion' &&
            <div>
              <h1>contraprestacion</h1>
            </div>}
        </div>

      </div>
    </div>
  )
}
