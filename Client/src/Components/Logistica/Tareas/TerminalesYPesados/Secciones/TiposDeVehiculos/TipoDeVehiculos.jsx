import React from 'react'
import chasis from '../../../../Image/chasis.jpg'
import tractor from '../../../../Image/tractor.jpg'

export default function TipoDeVehiculos() {
  return (
    <div className='conteinerNav mt-5 rounded py-5' >
      <div className='d-flex flex-row justify-content-evenly m-auto mt-3 px-5 '>
        <div className='px-5'>
          <h3 className='mb-3'><u>CHASIS</u></h3>
          <img src={chasis} alt="Chasis" className='responsiveImg' />
        </div>
        <div className='px-5'>
          <h3 className='mb-3'><u>TRACTOR </u></h3>
          <img src={tractor} alt="Eficaz2" className='responsiveImg' />
        </div>
      </div>
    </div >
  )
}
