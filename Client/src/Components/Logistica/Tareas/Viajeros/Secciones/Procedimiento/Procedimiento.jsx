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
          <button className="nav-link custom" id="nav-links-tab" data-bs-toggle="tab" data-bs-target="#nav-links" type="button" role="tab" aria-controls="nav-links" aria-selected="false">Enlaces principales</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto " id="nav-tabContent">
        <div className="tab-pane fade show active lineaGeneral" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <h1 >Se activará cuando haya personas junto al vehículo que por distintos motivos no puedan ser trasladadas en la misma grúa. El operador corroborará si corresponde la asistencia en la grilla.</h1>
          <h1 >El operador deberá realizar el análisis correspondiente del servicio, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio, entre otros. </h1>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <h1 >El operador deberá realizar el análisis correspondiente del servicio de asistencia al viajero cuando lo marque, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio</h1>
          <ul className='d-flex flex-column text-start justify-content-center m-auto h-50 w-50 listaGral'>
            <li>Contencion.</li>
            <li>Corroborar disponibilidad de doble cabina.</li>
            <li>Buscar otras opciones según cantidad de kilómetros.</li>
            <li>Hospedaje.</li>
            <li>Servicio por reintegro.</li>
            <li>Excepciones.</li>
          </ul>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-links" role="tabpanel" aria-labelledby="nav-links-tab" tabindex="0">
          <div className='d-flex flex-column py-4 m-auto mt-5 justify-content-center text-center'>
            <a href="https://www.centraldepasajes.com.ar" target='_blank'>
              <button type="button" className="btn btn-danger my-2">Central de Pasajes</button>
            </a>
            <a href="https://www.plataforma10.com.ar" target='_blank'>
              <button type="button" className="btn btn-danger my-2">Plataforma 10</button>
            </a>
            <a href="https://www.telexplorer.com.ar/" target='_blank'>
              <button type="button" className="btn btn-danger my-2">Telexplorer</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


