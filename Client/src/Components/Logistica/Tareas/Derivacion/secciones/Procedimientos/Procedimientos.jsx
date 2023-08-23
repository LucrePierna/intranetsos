import React from 'react'
import * as bootstrap from 'bootstrap'

export default function Procedimientos() {
  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Incial</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Seleccion de prestador</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Tipos de asignaciones</button>
          <button className="nav-link" id="nav-cierra-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles" type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Cierre</button>
          <button className="nav-link" id="nav-zona-tab" data-bs-toggle="tab" data-bs-target="#nav-roads" type="button" role="tab" aria-controls="nav-roads" aria-selected="false">Derivacion por zona</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <h1>Incial</h1>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <h1>Seleccion de prestador</h1>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <h1>Tipos de asignaciones</h1>
        </div>
        <div className="tab-pane fade" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-cierra-tab" tabIndex="0">
          <h1>Cierre</h1>
        </div>
        <div className="tab-pane fade" id="nav-roads" role="tabpanel" aria-labelledby="nav-zona-tab" tabIndex="0">
          <h1>Derivacion por zona</h1>
        </div>
      </div>
    </div>
  )
}
