import React from 'react'
import ImgPlanilla from '../../../../Image/PlanillaTransportin.png'
import './Planillas.css'


export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <h1>Planilla Transportin</h1>
     { <img className='img' src={ImgPlanilla} alt="planilla" /> }
        <a href="https://redsos.sharepoint.com/:x:/r/sites/transportincba/Shared%20Documents/Datos%20adjuntos%20de%20correo%20electr%C3%B3nico/Transportin%202023%20Final.xlsx?d=wb9b66c3dce8446b19467e54ee7c4d521&csf=1&web=1&e=0mUNeB" target="_blank" rel="noopener noreferrer">
        <button type="button" class="btn btn-outline-light">Planilla Transportin</button>
        </a>
        <a href="https://redsos-my.sharepoint.com/:x:/r/personal/sheredia_redsos_com_ar/Documents/resguardo%20sheredia/ORGANIZACION%20ENTREGAS%20TRANSPORTIN%206001%20-2023.xlsx?d=wd354a53169e9487fba8437f4330756ae&csf=1&web=1&e=nPJCTH" target="_blank" rel="noopener noreferrer">
        <button type="button" class="btn btn-outline-light">Entregas Transportin</button>
        </a>
    </div>
  )
}
