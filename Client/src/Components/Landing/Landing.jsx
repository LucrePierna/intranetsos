import React from 'react'


export default function Landing() {
  return (
    <div className='d-flex flex-column justify-content-center m-auto mt-20%'>

      <h1>Operaciones SOS</h1>

      <div className='d-flex flex-row justify-content-evenly mt-5'>
        <a href="/logistica">
          <button type="button" className="btn-logistica">Logística</button>
        </a>

        <a href="/trafico">
          <button type="button" className="btn btn-outline-danger">Tráfico</button>
        </a>

        <a href="/cat">
          <button type="button" className="btn btn-outline-danger">Cat</button>
        </a>
      </div>
    </div>
  )
}
