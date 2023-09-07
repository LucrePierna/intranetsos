import React from 'react'
import ImgPlanilla from '../../../../Image/BaseGuardaTransportin.png'
import './Bases.css'


export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <h1>Bases de Guarda</h1>
      {<img className='img' src={ImgPlanilla} alt="planilla" />}
      <div className='d-grid g-col-2 gap-1 col-2 '>
        <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lugomez_redsos_com_ar/Documents/PRESTADORES%20TRANSPORTIN.xlsx?d=w278b4127b8954618aa1b2f6ee37a1d0f&csf=1&web=1&e=ogxaMj" target="_blank" rel="noopener noreferrer">
          <button type="button" class="btn btn-light">Bases de Guarda Transportin</button>
        </a>
      </div>
    </div>
  )
}
