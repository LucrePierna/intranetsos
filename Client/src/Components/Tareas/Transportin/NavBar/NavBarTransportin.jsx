import React from 'react'
import '../../../EstilosGlobales/NavBar.css'
import Corredores from '../Secciones/Corredores/Corredores'
import Pais from '../Secciones/Corredores/Pais/Pais'
import Turista from '../Secciones/Corredores/Turista/Turista'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Planillas from '../Secciones/Planillas/Planillas'

export default function NavBarTransportin() {
  return (
    <nav className='conteiner'>
    <div className='lista'>
    <ul className='seccion'>
      <li><Corredores/></li>
      <li><Flujograma/></li>
      <li><Planillas/></li>
      <li><Seccion4/></li>
    </ul>
    </div>
  </nav>
  )
}
