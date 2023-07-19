import React from 'react'
import '../../../EstilosGlobales/NavBar.css'

export default function NavBarDerivacion() {
  return (
    <nav className='conteiner'>
      <div className='lista'>
      <ol className='seccion'>
        <li>Consultas</li>
        <li>Flujograma</li>
        <li>Novedades</li>
        <li>Prestadores</li>
        <li>Procedimientos</li>

      </ol>
      </div>
    </nav>
  )
}
