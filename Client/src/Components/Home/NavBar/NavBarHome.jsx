import React from 'react'
import Logo from '../../Image/LogoGrua.png'
import '../../EstilosGlobales/NavBar.css'

export default function NavBarHome() {

  return (
    
<nav className='conteiner' class="navbar navbar-expand-lg bg-body-tertiary">
<img className='logo' src={Logo} alt="" />
  <div className='lista' class="container-fluid">


    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className='seccion' class="navbar-nav">
        <a class="nav-link" href="Client/src/Home/Secciones/Noticias">NOTICIAS</a>
        <a class="nav-link" href="Client/src/Home/Secciones/Reintegro">REINTEGRO</a>
        <a class="nav-link" href="Client/src/Home/Secciones/Agenda">AGENDA</a>
        <a class="nav-link" href="Client/src/Home/Secciones/Informacion">INFORMACION</a>
      </div>
    </div>
  </div>
</nav>
    
  )
}

