import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Planilla from '../Secciones/Planilla/Planilla'


export default function NavBarExtranjero() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <div>
    <ul className='navbar'>
      <li onClick={() => handleComponentClick('flujograma')}  >Flujograma</li>
      <li onClick={()=> handleComponentClick('instructivo')}>Instructivo</li>
      <li onClick={()=> handleComponentClick('planilla')}>Planilla</li>

    </ul>
    <div >
      {selectedComponent === 'flujograma' && <Flujograma />}
      {selectedComponent === 'instructivo' && <Instructivo />}
      {selectedComponent === 'planilla' && <Planilla />}
    </div>
  </div>
  )
}
