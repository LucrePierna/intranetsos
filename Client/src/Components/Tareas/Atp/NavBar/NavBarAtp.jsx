import React from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Anulación from '../Secciones/Anulación/Anulacion'
import Chattigo from '../Secciones/Chattigo/Chattigo'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Seccion1 from '../Secciones/Seccion1/Seccion1'
import Seccion2 from '../Secciones/Seccion2/Seccion2'

export default function NavBarAtp() {
  return (
    <nav className='conteiner'>
    <div className='lista'>
    <ul className='seccion'>
      <li><Anulación/></li>
      <li><Chattigo /></li>
      <li><Flujograma /></li>
      <li><Instructivo /></li>
      <li><Seccion1 /></li>
      <li><Seccion2 /></li>
    </ul>
    </div>
  </nav>
  )
}
