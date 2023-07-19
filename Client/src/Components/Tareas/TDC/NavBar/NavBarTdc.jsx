import React from 'react'
import '../../../EstilosGlobales/NavBar.css'
import CalculoKms from '../Secciones/CalculoKms/CalculoKms'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import MicroStrategy from '../Secciones/MicroStrategy/MicroStrategy'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Planilla from '../Secciones/Planilla/Planilla'
import Seccion1 from '../Secciones/Seccion1/Seccion1'
import Seccion2 from '../Secciones/Seccion2/Seccion2'

export default function NavBarTdc() {
  return (
    <nav className='conteiner'>
    <div className='lista'>
    <ul className='seccion'>
      <li><CalculoKms /></li>
      <li><Flujograma /></li>
      <li><Instructivo /></li>
      <li><MicroStrategy /></li>
      <li><Planilla /></li>
      <li><Seccion1 /></li>
      <li><Seccion2 /></li>
    </ul>
    </div>
  </nav>
  )
}
