import React from 'react'
import saludo from '../../../Image/Saludos.png'

export default function Saludos() {
  return (
    <div className='d-flex h-100 w-100 m-auto mt-3'>
      <img src={saludo} alt="saludos" className='responsiveImgSaludos' />
    </div>
  )
}
