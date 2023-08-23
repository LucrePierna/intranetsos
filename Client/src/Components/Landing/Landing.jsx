import React from 'react'


export default function Landing() {
  return (
    <div >
      <div className='d-flex flex-column justify-content-center'>

        <h1 >Operaciones SOS</h1>

        <div className='d-flex flex-row justify-content-evenly mt-5'>
          <a href="/logistica">
            <button type="button" className="btn btn-outline-danger">LOGISTICA</button>
          </a>

          <a href="/trafico">
            <button type="button" className="btn btn-outline-danger">TRAFICO</button>
          </a>

          <a href="/cat">
            <button type="button" className="btn btn-outline-danger">CAT</button>
          </a>
        </div>
      </div>
    </div>
  )
}
