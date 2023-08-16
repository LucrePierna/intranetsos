import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
import CalculoKms from '../Secciones/CalculoKms/CalculoKms'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import MicroStrategy from '../Secciones/MicroStrategy/MicroStrategy'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Planilla from '../Secciones/Planilla/Planilla'


export default function NavBarTdc() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <ul className='navbar'>
        <li onClick={()=> handleComponentClick('flujograma')}>Flujograma </li>
        <li onClick={()=> handleComponentClick('calculokms')}>Calculo De Kms </li>
        <li onClick={()=> handleComponentClick('instructivo')}>Instructivo </li>
        <li onClick={()=> handleComponentClick('microStrategy')}>MicroStrategy </li>
        <li onClick={()=> handleComponentClick('planilla')}>Planilla </li>


    </ul>
    <div>
      {selectedComponent === 'flujograma' && <Flujograma />}
      {selectedComponent === 'calculokms' && <CalculoKms />}
      {selectedComponent === 'instructivo' && <Instructivo />}
      {selectedComponent === 'microStrategy' && <MicroStrategy />}
      {selectedComponent === 'planilla' && <Planilla />}
    </div>
    </div>
  
  )
}
