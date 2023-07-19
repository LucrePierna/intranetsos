import React from 'react'

import '../../../EstilosGlobales/NavBar.css'
import Flujograma from '../Secciones/Flujograma/Flujograma'
import Instructivo from '../Secciones/Instructivo/Instructivo'
import Mapas from '../Secciones/Mapas/Mapas'
import Noticias from '../Secciones/Noticias/Noticias'
import Planilla from '../Secciones/Planilla/Planilla'
import Seccion1 from '../Secciones/Seccion1/Seccion1'
import Seccion2 from '../Secciones/Seccion2/Seccion'

export default function NavBarTrafico() {
  return (
    <nav className='conteiner'>

    <div className='lista'>
    <ul className='seccion'>
      <li><Flujograma /></li>
      <li><Instructivo /></li>
      <li><Mapas /></li>
      <li><Noticias /></li>
      <li><Planilla /></li>
      <li><Seccion1 /></li>
      <li><Seccion2 /></li>
    </ul>
    </div>
  </nav>
  )
}
