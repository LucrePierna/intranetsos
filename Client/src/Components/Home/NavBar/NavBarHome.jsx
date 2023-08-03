import React from 'react'
import Logo from '../../Image/LogoGrua.png'
import '../../EstilosGlobales/NavBar.css'

export default function NavBarHome() {

  return (
    
    <nav class='conteiner'>
      <img class='logo' src={Logo} alt="" />
      <div class='lista'>
      <ul class='seccion'>
        <li>Noticias</li>
        <li>Reintegro</li>
        <li>Contacto</li>
        <li>Informacion</li>
      </ul>
      </div>
    </nav>
    
  )
}

