import React from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Flujograma from '../../TDC/Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Planilla from '../Secciones/Planilla/Planilla'
import Seccion1 from '../Secciones/Seccion1/Seccion1'
import Seccion2 from '../Secciones/Seccion2/Seccion2'
import Seccion3 from '../Secciones/Seccion3/Seccion3'

export default function NavBarExtranjero() {
  return (
    <nav className='conteiner'>
    <div className='lista'>
    <ul className='seccion'>
      <li><Flujograma /></li>
      <li><Instructivo /></li>
      <li><Planilla /></li>
      <li><Seccion1 /></li>
      <li><Seccion2 /></li>
      <li><Seccion3 /></li>
    </ul>
    </div>
  </nav>
  )
}
