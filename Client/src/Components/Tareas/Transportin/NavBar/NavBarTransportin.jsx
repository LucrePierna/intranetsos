import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Bases from '../Secciones/Bases/Bases'
import Corredores from '../Secciones/Corredores/Corredores'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Planillas from '../Secciones/Planillas/Planillas'

export default function NavBarTransportin() {
    const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
   <div>

      <ul className='navbar'>
        <li onClick={()=> handleComponentClick('bases')}>Bases</li>
        <li onClick={()=> handleComponentClick('corredores')}>Corredores</li>
        <li onClick={()=> handleComponentClick('flujograma')}>Flujograma</li>
        <li onClick={()=> handleComponentClick('instructivo')}>Instructivo</li>
        <li onClick={()=> handleComponentClick('Planillas')}>Planillas</li>

      </ul>

      <div className='lista'>
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'corredores' && <Corredores />}
        {selectedComponent === 'flujograma' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'Planillas' && <Planillas />}

      </div>

    </div>
  )
}
