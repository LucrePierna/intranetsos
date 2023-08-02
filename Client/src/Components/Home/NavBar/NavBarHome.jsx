import React from 'react'
import Logo from '../../Image/LogoGrua.png'
import '../../EstilosGlobales/NavBar.css'

export default function NavBarHome() {

  return (
    
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#">Noticias</a>
        <a class="nav-link" href="#">Reintegro</a>
        <a class="nav-link" href="#">Contacto</a>
        <a class="nav-link" href="#">Informacion</a>
      </div>
    </div>
  </div>
</nav>
    
  )
}

