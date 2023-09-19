import React from 'react'
import microCba from '../../../../Image/microTrafico/microCba.PNG'


export default function Prestadores() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      {<img className='responsiveImg' src={microCba} alt="imageCba" />}
      <div className='d-grid g-col-2 gap-1 col-2 '>
        <a href="http://cba-mstr02:8080/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=12450E3945D7555D62307F8BD0135F27&Server=CBA-MSTR02&Project=SOS%20BI&Port=0&share=1" target="_blank" rel="noopener noreferrer">
          <button button type='button' class="btn btn-danger mt-3">Acceso a Micro móviles Córdoba</button>
        </a>
      </div>
    </div>
  )
}
