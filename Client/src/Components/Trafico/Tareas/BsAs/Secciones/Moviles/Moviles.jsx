import React from 'react'
import microCaba from '../../../../Image/microTrafico/microCaba.PNG'
import dimensiones from '../../../../Image/Dimensiones_6001.JPG'
import * as bootstrap from 'bootstrap'


export default function Moviles() {

  const buttonStyle = {
    width: '150px',
    textAlign: 'center'
  }

  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })
  return (
    <div className='container '>
      <div className='d-flex flex-column h-100 w-100 align-items-center justify-content-center mx-auto mt-5 '>
        <nav>
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            <button className="nav-link custom active" style={buttonStyle} id="nav-bahiablanca-tab" data-bs-toggle="tab" data-bs-target="#nav-bahiablanca" type="button" role="tab" aria-controls="nav-bahiablanca" aria-selected="true">Cronograma</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-costa-tab" data-bs-toggle="tab" data-bs-target="#nav-costa" type="button" role="tab" aria-controls="nav-costa" aria-selected="false">Implementos y Dimensiones</button>
          </div>
        </nav>
        <div className="h-100 w-100 tab-content m-auto" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-bahiablanca" role="tabpanel" aria-labelledby="nav-bahiablanca-tab" tabindex="0">
            <div className='d-flex flex-column align-items-center justify-content-center mx-auto '>
              {<img className='responsiveImg' src={microCaba} alt="imgCABA" />}
              <div className='d-grid g-col-2 gap-1 col-2 '>
                <a href="http://cba-mstr02:8080/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=6AC9D11942BADF91903EF8A134C105DF&Server=CBA-MSTR02&Project=SOS%20BI&Port=0&share=1" target="_blank" rel="noopener noreferrer">
                  <button button type='button' class="btn btn-danger mt-3">Acceso a Micro móviles 6001</button>
                </a>
              </div>
            </div>
          </div>
          <div className="tab-pane fade m-auto" id="nav-costa" role="tabpanel" aria-labelledby="nav-costa-tab" tabindex="0">
            <div className='d-flex flex-column align-items-center justify-content-center mx-auto '>
              {<img className='responsiveImg' src={dimensiones} alt="Dimensiones_6001" />}
              <div className='d-grid g-col-2 gap-1 col-2 '>
                <a href="https://redsos-my.sharepoint.com/:x:/r/personal/gcordeiro_redsos_com_ar/Documents/MEJORA%20DE%20PROCESOS/Relevamiento%20Equipamiento.xlsx?d=wb1cf8c11f579414795cac1f48f288d43&csf=1&web=1&e=Vm8CUb" target="_blank" rel="noopener noreferrer">
                  <button button type='button' class="btn btn-danger mt-3">Acceso a Planilla</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )



}
