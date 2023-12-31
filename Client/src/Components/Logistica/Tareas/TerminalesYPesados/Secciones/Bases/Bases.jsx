import React from 'react'
import ImgPlanillaPesados from '../../../../Image/PlanillaDeBasesDePesados.jpg'

export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <img className='responsiveImg' src={ImgPlanillaPesados} alt="planilla" />
      <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/Documents/Bases%20de%20pesados.xlsx?d=wa06ab9e22ee94df5a42630b6d4faf7ca&csf=1&web=1&e=OybvVu" target="_blank" rel="noopener noreferrer">
        <button type="button" class="btn btn-danger my-3">Planilla de bases de pesados</button>
      </a>
    </div>
  )
}
