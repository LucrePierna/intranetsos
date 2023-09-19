import React from 'react'
import * as bootstrap from 'bootstrap'


export default function Procedimiento() {


  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })


  return (
    <div className='conteinerNav mt-5 ' >
      <nav className='navConteiner'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Instrucciones</button>
          <button className="nav-link custom" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Puntos principales</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto fs-5" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <h4 className='mt-3 text-start fs-4'>Se activará cuando haya personas junto al vehículo que por distintos motivos no puedan ser trasladadas en la misma grúa. El operador corroborará si corresponde la asistencia en la grilla.</h4>
          <h5 className='mt-3 text-start fs-4'>El operador deberá realizar el análisis correspondiente del servicio, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio, entre otros. </h5>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <h3 className='fs-4 text-start mt-3'>El operador deberá realizar el análisis correspondiente del servicio de asistencia al viajero cuando lo marque, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio</h3>
          <ul className='d-flex flex-column text-start justify-content-center m-auto h-50 w-50'>
            <li>Contencion.</li>
            <li>Corroborar disponibilidad de doble cabina.</li>
            <li>Buscar otras opciones segun cantidad de kilometros.</li>
            <li>Hospedaje.</li>
            <li>Servicio por reintegro.</li>
            <li>Excepciones.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}


