import React, { useState } from 'react'
import Mapas from '../Mapas/Mapas';

export default function Instructivo() {

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };



  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">

          <button className={`nav-link btn ${selectedComponent === 'mapas' ? 'active' : ''}`}
            onClick={() => handleComponentClick('mapas')}
            style={{
              color: selectedComponent === 'mapas' ? 'black' : 'red',
              backgroundColor: selectedComponent === 'mapas' ? 'white' : 'initial'
            }} id="nav-uruguay-tab" data-bs-toggle="tab" data-bs-target="#nav-uruguay" type="button" role="tab" aria-controls="nav-uruguay" aria-selected="false">Uruguay</button>
          <button onClick={() => handleComponentClick('brasil')}
            style={{
              color: selectedComponent === 'brasil' ? 'black' : 'red',
              backgroundColor: selectedComponent === 'brasil' ? 'white' : 'initial'
            }} id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="false">Brasil</button>
          <button className="nav-link" id="nav-chile-tab" data-bs-toggle="tab" data-bs-target="#nav-chile" type="button" role="tab" aria-controls="nav-chile" aria-selected="false">Chile</button>
          <button className="nav-link" id="nav-contraprestacion-tab" data-bs-toggle="tab" data-bs-target="#nav-contraprestacion" type="button" role="tab" aria-controls="nav-contraprestacion" aria-selected="false">ContraPrestación</button>

        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade" id="nav-uruguay" role="tabpanel" aria-labelledby="nav-uruguay-tab" tabindex="0">
        {selectedComponent === 'mapas' && 
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
          <iframe src="https://www.google.com/maps/d/embed?mid=1Au9gfAp5Mwvhgi6KVbqJ4qBvCeLTRBGF&ehbc=2E312F" width="1280" height="700"></iframe>
        </div>
        <div className="tab-pane fade" id="nav-contraprestacion" role="tabpanel" aria-labelledby="nav-contraprestacion-tab" tabindex="0">
          <iframe src="https://www.google.com/maps/d/embed?mid=11DTLz8bqaL_6JYBhRSeT_VzwJqmzsDw&ehbc=2E312F" width="1280" height="700"></iframe>
        </div>

      </div>
    </div>
  )
}
