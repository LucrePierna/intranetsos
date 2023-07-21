import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Anulación from '../Secciones/Anulación/Anulacion'
import Chattigo from '../Secciones/Chattigo/Chattigo'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'

export default function NavBarAtp() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>

      <ul className='navbar'>
        <li onClick={()=> handleComponentClick('flujodrama')}>Flujograma</li>
        <li onClick={()=> handleComponentClick('anulacion')}>Instructivo</li>
        <li onClick={()=> handleComponentClick('chattigo')}>Chattigo</li>
        <li onClick={()=> handleComponentClick('instructivo')}>Anulacion</li>
      </ul>

      <div className='lista'>
        {selectedComponent === 'flujodrama' && <Flujograma />}
        {selectedComponent === 'flujodrama' && <Anulación />}
        {selectedComponent === 'flujodrama' && <Chattigo />}
        {selectedComponent === 'flujodrama' && <Instructivo />}
      </div>

    </div>
  )
}
