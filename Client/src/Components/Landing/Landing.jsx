import React from 'react'
import './Landing.css'


export default function Landing() {
  return (
    <div className='contenedor'>

      <h1 >OPERACIONES SOS</h1>

      <div className='contenedor-btn'>
        <a href="/cat">
          <button type="button" className="btn btn-danger mx-5">CAT</button>
        </a>

        <a href="/logistica">
          <button type="button" className="btn btn-danger mx-5">RED NACIONAL</button>
        </a>

        <a href="/trafico">
          <button type="button" className="btn btn-danger mx-5">TRAFICO LOCAL</button>
        </a>

      </div>
    </div>
  )
}
