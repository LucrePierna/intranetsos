import React from 'react'
import './Landing.css'


export default function Landing() {
  return (
    <div className='contenedor'>

      <h2 className='title'>OPERACIONES SOS</h2>

      <div className='contenedor-btn'>
        <a href="/cat">
          <button type="button" className="btn btn-danger buttonShadow mx-5 ">CAT</button>
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