import React from 'react'
import Logo from '../../Image/LogoGrua.png'
import '../../EstilosGlobales/NavBar.css'

export default function NavBarHome() {

  return (
    
    <nav className='conteiner'>
      <img className='logo' src={Logo} alt="" />
      <div className='lista'>
      <ul className='seccion'>
        <li>Noticias</li>
        <li>Reintegro</li>
        <li>Contacto</li>
        <li>Informacion</li>
      </ul>
      </div>
    </nav>
    
  )
}

