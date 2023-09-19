import React from 'react'
import microRos from '../../../../Image/microTrafico/microRos.PNG'


export default function Prestadores() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      {<img className='responsiveImg' src={microRos} alt="imgRos" />}
      <div className='d-grid g-col-2 gap-1 col-2 '>
        <a href="http://cba-mstr02:8080/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=6AC9D11942BADF91903EF8A134C105DF&Server=CBA-MSTR02&Project=SOS%20BI&Port=0&share=1" target="_blank" rel="noopener noreferrer">
          <button button type='button' class="btn btn-danger mt-3">Acceso a Micro móviles Rosario</button>
        </a>
      </div>
    </div>
  )
}
