import React from 'react'
import ImgPlanilla from '../../../../Image/planillaExtranjero.jpg'
import './Planilla.css'

export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <h1>Planilla Extranjero</h1>
      <img className='responsiveImg' src={ImgPlanilla} alt="planilla" /> 
      <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/Documents/Extranjeros.xlsx?d=w865d5b4f42cc47ff9c639815123182a0&csf=1&web=1&e=IyKZWu" target="_blank" rel="noopener noreferrer">
        <button type='button' class="btn btn-danger mt-3">Acceso a Planilla</button>
        </a>
    </div>
  )
}
