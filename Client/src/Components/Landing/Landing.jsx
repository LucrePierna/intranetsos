import React from 'react'
import './Landing.css'


export default function Landing() {
  return (
    <div className='contenedor'>

      <h1 className='title'>OPERACIONES SOS</h1>

      <div className='contenedor-btn'>
        <a href="/cat">
          <button type="button" className="btn btn-danger buttonShadow mx-5 fs-3">CAT</button>
        </a>

        <a href="/logistica">
          <button type="button" className="btn btn-danger buttonShadow mx-5 fs-3">RED NACIONAL</button>
        </a>

        <a href="/trafico">
          <button type="button" className="btn btn-danger buttonShadow mx-5 fs-3">TRÁFICO LOCAL</button>
        </a>

      </div>
    </div>
  )
}
