import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <div className='contenedor'>

      <h1 className='title'>OPERACIONES SOS</h1>

      <div className='row justify-content-center'>
        <div className='col-lg-3 col-md-4 col-sm-6'>
          <a href="/cac">
            <button type="button" className="btn btn-danger mx-2 mb-2 cac">CAC</button>
          </a>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6'>
          <a href="/logistica">
            <button type="button" className="btn btn-danger buttonShadow mx-2 mb-2">RED NACIONAL</button>
          </a>
        </div>

        <div className='col-lg-3 col-md-4 col-sm-6'>
          <a href="/trafico">
            <button type="button" className="btn btn-danger buttonShadow mx-2 mb-2">TRÁFICO LOCAL</button>
          </a>
        </div>
      </div>

    </div>
  )
}
