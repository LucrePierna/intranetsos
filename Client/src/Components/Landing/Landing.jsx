import React from 'react'
import logo from './image/logo-operaciones.png'
import './Landing.css'


export default function Landing() {
  return (
    <div className='contenedor'>
      <div>
        <img src={logo} className='logo' alt="logoOperaciones" />
      </div>

      <div className='contenedor-btn'>
        <a href="/cat">
          <button type="button" className="btn btn-danger buttonShadow mx-5 ">ESPACIO CAC</button>
        </a>

        <a href="/logistica">
          <button type="button" className="btn btn-danger buttonShadow mx-5 ">RED NACIONAL</button>
        </a>

        <a href="/trafico">
          <button type="button" className="btn btn-danger buttonShadow mx-5 ">TRÁFICO LOCAL</button>
        </a>

      </div>
    </div>
  )
}