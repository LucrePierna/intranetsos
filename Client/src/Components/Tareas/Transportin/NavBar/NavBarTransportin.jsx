import React, {useState} from 'react'
import '../../../EstilosGlobales/NavBar.css'
<<<<<<< HEAD
import Corredores from '../Secciones/Corredores/Corredores'
import Pais from '../Secciones/Corredores/Pais/Pais'
import Turista from '../Secciones/Corredores/Turista/Turista'
import Flujograma from '../Secciones/Flujograma/Flujograma'
=======
import Bases from '../Secciones/Bases/Bases'
import Corredores from '../Secciones/Corredores/Corredores'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
>>>>>>> e1a487dd3ea679583657f294924497dd7fc7bfe4
import Planillas from '../Secciones/Planillas/Planillas'

export default function NavBarTransportin() {
    const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
<<<<<<< HEAD
    <nav className='conteiner'>
    <div className='lista'>
    <ul className='seccion'>
      <li><Corredores/></li>
      <li><Flujograma/></li>
      <li><Planillas/></li>
      <li><Seccion4/></li>
    </ul>
=======
   <div>

      <ul className='navbar'>
        <li onClick={()=> handleComponentClick('bases')}>Bases</li>
        <li onClick={()=> handleComponentClick('corredores')}>Corredores</li>
        <li onClick={()=> handleComponentClick('flujodrama')}>Flujodrama</li>
        <li onClick={()=> handleComponentClick('instructivo')}>Instructivo</li>
        <li onClick={()=> handleComponentClick('Planillas')}>Planillas</li>

      </ul>

      <div className='lista'>
        {selectedComponent === 'bases' && <Bases />}
        {selectedComponent === 'corredores' && <Corredores />}
        {selectedComponent === 'flujodrama' && <Flujograma />}
        {selectedComponent === 'instructivo' && <Instructivo />}
        {selectedComponent === 'Planillas' && <Planillas />}

      </div>

>>>>>>> e1a487dd3ea679583657f294924497dd7fc7bfe4
    </div>
  )
}
