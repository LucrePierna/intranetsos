import React from 'react'
import '../../../../EstilosGlobales/General.css'
import * as bootstrap from 'bootstrap'
import FormatoTransportin from './FormatoTransportin/FormatoTransportin'
import FormatoTDC from './FormatoTDC/FormatoTDC'
import FormatoViajero from './FormatoViajero/FormatoViajero'
import FormatoBrasil from './FormatosExtranjero/Brasil/Brasil'
import FormatoSolicitud from './FormatosExtranjero/Solicitud/Solicitud'
import FormatoTrasvase from './FormatoTrasvase/FormatoTrasvase'

export default function Formatos() {

  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })

  return (
    <div className='conteinerNav mt-5 '>
      <nav className='navConteiner'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-transportin-tab" data-bs-toggle="tab" data-bs-target="#nav-transportin" type="button" role="tab" aria-controls="nav-transportin" aria-selected="true">Formato Transportin</button>
          <button className="nav-link custom" id="nav-tdc-tab" data-bs-toggle="tab" data-bs-target="#nav-tdc" type="button" role="tab" aria-controls="nav-tdc" aria-selected="false">Formato Torre de Conexión</button>
          <button className="nav-link custom" id="nav-viajero-tab" data-bs-toggle="tab" data-bs-target="#nav-viajero" type="button" role="tab" aria-controls="nav-viajero" aria-selected="false">Formato Viajero</button>
          <button className="nav-link custom" id="nav-extranjero-tab" data-bs-toggle="tab" data-bs-target="#nav-extranjero" type="button" role="tab" aria-controls="nav-extranjero" aria-selected="false">Formato Extranjero</button>
          <button className="nav-link custom" id="nav-trasvase-tab" data-bs-toggle="tab" data-bs-target="#nav-trasvase" type="button" role="tab" aria-controls="nav-trasvase" aria-selected="false">Formato Trasvase</button>
          {/* <button className="nav-link custom" id="nav-refesvc-tab" data-bs-toggle="tab" data-bs-target="#nav-refesvc" type="button" role="tab" aria-controls="nav-refesvc" aria-selected="false">Formato</button>
          <button className="nav-link custom" id="nav-gruat-tab" data-bs-toggle="tab" data-bs-target="#nav-gruat" type="button" role="tab" aria-controls="nav-gruat" aria-selected="false">Formato</button>
          <button className="nav-link custom" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Formato</button> */}
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto " id="nav-tabContent">
        <div className="tab-pane fade show active lineaGeneral" id="nav-transportin" role="tabpanel" aria-labelledby="nav-transportin-tab" tabindex="0">
          <FormatoTransportin />
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-tdc" role="tabpanel" aria-labelledby="nav-tdc-tab" tabindex="0">
          <FormatoTDC />
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-viajero" role="tabpanel" aria-labelledby="nav-viajero-tab" tabindex="0">
          <FormatoViajero />
        </div>
        <div className="tab-pane fade" id="nav-extranjero" role="tabpanel" aria-labelledby="nav-extranjero-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-mailwsp-tab" data-bs-toggle="tab" data-bs-target="#nav-mailwsp" type="button" role="tab" aria-controls="nav-mailwsp" aria-selected="true">Solicitud por e-mail o whatsapp</button>
                <button class="nav-link sub" id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="true">Formato Brasil</button>
              </div>
            </nav>
            <div class="tab-pane fade show active " id="nav-mailwsp" role="tabpanel" aria-labelledby="nav-mailwsp-tab" tabindex="0">
              <FormatoSolicitud />
            </div>
            <div className="tab-pane fade" id="nav-brasil" role="tabpanel" aria-labelledby="nav-brasil-tab" tabindex="0">
              <FormatoBrasil />
            </div>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-trasvase" role="tabpanel" aria-labelledby="nav-trasvase-tab" tabindex="0">
          <FormatoTrasvase />
        </div>
        {/* <div className="tab-pane fade lineaGeneral" id="nav-refesvc" role="tabpanel" aria-labelledby="nav-refesvc-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active " id="nav-p1" role="tabpanel" aria-labelledby="nav-p1-tab" tabindex="0">
              ...
            </div>
            <div className="tab-pane fade" id="nav-p2" role="tabpanel" aria-labelledby="nav-p2-tab" tabindex="0">
              ...
            </div>
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-p1-tab" data-bs-toggle="tab" data-bs-target="#nav-p1" type="button" role="tab" aria-controls="nav-p1" aria-selected="true">Pág 1</button>
                <button class="nav-link sub" id="nav-p2-tab" data-bs-toggle="tab" data-bs-target="#nav-p2" type="button" role="tab" aria-controls="nav-p2" aria-selected="true">Pág 2</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-gruat" role="tabpanel" aria-labelledby="nav-gruat-tab" tabindex="0">
          ...
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">

        </div> */}
      </div>
    </div >
  )
}