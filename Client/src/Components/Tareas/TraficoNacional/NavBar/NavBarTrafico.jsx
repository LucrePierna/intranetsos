import React, { useState } from 'react';
import '../../../EstilosGlobales/NavBar.css'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Mapas from '../Secciones/Mapas/Mapas'
import Noticias from '../Secciones/Noticias/Noticias'
import Planilla from '../Secciones/Planilla/Planilla'


export default function NavBarTrafico() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    
    <div>
      <ul className='navbar'>
       
        <li onClick={() => handleComponentClick('flujograma')}>Flujograma</li>
        <li onClick={() => handleComponentClick('instructivo')}>Instructivo</li>
        <li onClick={() => handleComponentClick('mapas')}>Mapas</li>
        <li onClick={() => handleComponentClick('noticias')}>Noticias</li>
        <li onClick={() => handleComponentClick('planilla')}>Planilla</li>
      </ul>
      
      <div className='lista'>
       
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'mapas' && <Mapas />}
        {selectedComponent === 'noticias' && <Noticias />}
        {selectedComponent === 'planilla' && <Planilla />}
      </div>
    </div>
  );
}
