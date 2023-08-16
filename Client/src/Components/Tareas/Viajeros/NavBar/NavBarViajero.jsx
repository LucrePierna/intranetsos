import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Calculadora from '../Secciones/Calculadora/Calculadora'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Links from '../Secciones/Links/Links'
import Reintegros from '../Secciones/Reintegros/Reintegros'

export default function NavBarViajero() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  return (
 <div>

      <ul className='navbar'>
        <li onClick={()=> handleComponentClick('calculadora')}>Calculadora</li>
        <li onClick={()=> handleComponentClick('flujodrama')}>Flujodrama</li>
        <li onClick={()=> handleComponentClick('links')}>Links</li>
        <li onClick={()=> handleComponentClick('reintegro')}>Reintegro</li>

      </ul>

      <div className='lista'>
        {selectedComponent === 'calculadora' && <Calculadora />}
        {selectedComponent === 'flujodrama' && <Flujograma />}
        {selectedComponent === 'links' && <Links />}
        {selectedComponent === 'reintegro' && <Reintegros />}

      </div>

    </div>
  )
}
