import React from 'react'
import * as bootstrap from 'bootstrap'

export default function Instructivo() {
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
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descripcion de la tarea</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Conexion eficaz</button>
          <button className="nav-link" id="nav-cierra-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles" type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Formato de registro</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Motivos de rechazo</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <h1>Descripcion de la tarea</h1>
          <ul>
            <li>Visualización y análisis de la pantallas para la derivacion de servicios.</li>
            <li>Analizar las zonas en donde finalizan los servicios.</li>
            <li>Corroborar que sea conveniente la triangulación de los servicios</li>
            <li>Ofrecer a los prestadores la posibilidad de asistir a los clientes a través de este “enganche” de servicios.</li>
          </ul>

        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <h1>Conexion eficaz</h1>
        </div>
        <div className="tab-pane fade" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-cierra-tab" tabIndex="0">
          <h1>Formato de registro</h1>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <h1>Motivos de rechazo</h1>
        </div>
      </div>
    </div>
  )
}
