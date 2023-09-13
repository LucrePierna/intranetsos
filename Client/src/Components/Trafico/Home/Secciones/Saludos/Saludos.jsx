import React from 'react'
import saludo from '../../../Image/Saludos.png'

export default function Saludos() {
  return (
    <div className='d-flex h-50 w-50 m-auto mt-3'>
      <img src={saludo} alt="saludos" width={800} height={500} />
    </div>
  )
}
