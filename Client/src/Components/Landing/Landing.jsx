import React from 'react'
import logo from './image/logo-operaciones.png'
import './Landing.css'


export default function Landing() {
  return (
    <div className='contenedor'>
      <div>
        <img src={logo} className='logo' alt="logoOperaciones" />
      </div>
      <div className='d-flex flex-row justify-content-evenly'>
        <div className='conteinerbtn'>
          <a>
            <button type="button" className="btnLogo">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ESPACIO CAC</button>
          </a>
        </div>
        <div className='conteinerbtn'>
          <a href="/logistica">
            <button type="button" className="btnLogo">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              RED NACIONAL</button>
          </a>
        </div>
        <div className='conteinerbtn'>

          <a href="/trafico">
            <button type="button" className="btnLogo">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              TRÁFICO LOCAL</button>
          </a>
        </div>
      </div>

    </div >
  )
}