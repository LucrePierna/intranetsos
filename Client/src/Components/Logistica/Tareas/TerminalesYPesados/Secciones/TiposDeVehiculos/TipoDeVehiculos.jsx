import React from 'react'
import chasis from '../../../../Image/chasis.jpg'
import tractor from '../../../../Image/tractor.jpg'

export default function TipoDeVehiculos() {
  return (
    <div className='conteinerNav mt-5 ' >
      <div className='d-flex flex-row justify-content-evenly m-auto mt-3 px-5'>
        <div className='px-5 mt-5'>
          <h3>CHASIS</h3>
          <img src={chasis} alt="Chasis" height={450} width={700} />
        </div>
        <div className='mt-5'>
          <h3>TRACTOR</h3>
          <img src={tractor} alt="Eficaz2" height={450} width={700} />
        </div>
      </div>
    </div >
  )
}
