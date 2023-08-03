import React from 'react'
import Logo from '../../Image/LogoGrua.png'
import '../../EstilosGlobales/NavBar.css'

export default function NavBarHome() {

  return (
    
<<<<<<< HEAD
    <nav class='conteiner'>
      <img class='logo' src={Logo} alt="" />
      <div class='lista'>
      <ul class='seccion'>
        <li>Noticias</li>
        <li>Reintegro</li>
        <li>Contacto</li>
        <li>Informacion</li>
      </ul>
=======
<nav className='conteiner' class="navbar navbar-expand-lg bg-body-tertiary">
<img className='logo' src={Logo} alt="" />
  <div className='lista' class="container-fluid">


    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className='seccion' class="navbar-nav">
        <a class="nav-link" href="Client/src/Home/Secciones/Noticias">NOTICIAS</a>
        <a class="nav-link" href="Client/src/Home/Secciones/Reintegro">REINTEGRO</a>
        <a class="nav-link" href="Client/src/Home/Secciones/Agenda">AGENDA</a>
        <a class="nav-link" href="Client/src/Home/Secciones/Informacion">INFORMACION</a>
>>>>>>> d426eb068b8b20f9d17f8151737b64acf65b45aa
      </div>
    </div>
  </div>
</nav>
    
  )
}

