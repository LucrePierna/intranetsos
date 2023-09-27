import React from 'react'
import ImgPlanilla from '../../../../Image/Imagenes/Sin título.jpg'
import './Planillas.css'


export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <h1>Planilla Transportin</h1>
      {<img className='responsiveImg' src={ImgPlanilla} alt="planilla" />}
      <div className='d-grid g-col-2 gap-1 col-2 '>
        <a href="https://redsos-my.sharepoint.com/:x:/g/personal/lpierna_redsos_com_ar/EYIESn0usSxBo8vNI2MIRsIBv6Bljn5VrWUiaSC-8IGhcg?e=lkcLdm" target="_blank" rel="noopener noreferrer">
          <button button type='button' class="btn btn-danger mt-3">Acceso a Planilla Transportin</button>
        </a>
      </div>
    </div>
  )
}
