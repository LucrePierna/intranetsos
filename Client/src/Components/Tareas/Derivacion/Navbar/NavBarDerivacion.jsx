import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Flujograma from '../secciones/Flujograma/Flujograma'
import Consultas from '../secciones/Consultas/Consultas'
import Novedades from '../secciones/Novedades/Novedades'
import Prestadores from '../secciones/Prestadores/Prestadores'
import Procedimientos from '../secciones/Procedimientos/Procedimientos'

export default function NavBarDerivacion() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  
  return (
    <div >
      
      <ul className='navbar'>
        <li onClick={() => handleComponentClick('flujograma')}>Flujograma</li>
        <li onClick={() => handleComponentClick('consultas')}>Consultas</li>
        <li onClick={() => handleComponentClick('novedades')}>Novedades</li>
        <li onClick={() => handleComponentClick('prestadores')}>Prestadores</li>
        <li onClick={() => handleComponentClick('procedimientos')}>Procedimientos</li>

      </ul>
      <div>
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'consultas' && <Consultas />}
        {selectedComponent === 'novedades' && <Novedades />}
        {selectedComponent === 'prestadores' && <Prestadores />}
        {selectedComponent === 'procedimientos' && <Procedimientos />}
      </div>
      
    </div>
  )
}
