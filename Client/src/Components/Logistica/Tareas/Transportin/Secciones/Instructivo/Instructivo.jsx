import React from 'react'
import '../../../../EstilosGlobales/General.css'
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
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descripcion</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Objetivos</button>
          <button className="nav-link" id="nav-cierra-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles" type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Etapas</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tarea del derivador</button>
          <button className="nav-link" id="nav-viajero-tab" data-bs-toggle="tab" data-bs-target="#nav-viajero" type="button" role="tab" aria-controls="nav-viajero" aria-selected="false">Viajero</button>
          <button className="nav-link" id="nav-adicional-tab" data-bs-toggle="tab" data-bs-target="#nav-adicional" type="button" role="tab" aria-controls="nav-adicional" aria-selected="false">Adicionales</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active w-50 h-50 m-auto mt-5" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <p>La modalidad se brinda a todos los vehiculos que se encuentren ... El traslado se realiza para las categorias de liviano, liviano excedido y liviano especial. Se requiere un control y seguimiento continuo hasta la entrega de la unidad.</p>

        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <ul className='lista'>
            <li>Tener mayor disponibilidades en la zona de mayor demanda para servicios en zona.</li>
            <li>Reducir los tiempos de espera.</li>
            <li>Reducir los costos de servicios.</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-cierra-tab" tabIndex="0">
          <ul className='lista'>
            <li>Transportin Inicio =  Se realiza la busqueda de la unidad</li>
            <li>Transportin = Traslado de los vehiculos en el camion </li>
            <li>Transportin Distribucion = Traslado de base de guarda hasta destino del cliente</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <ul className='lista h-50 w-50 m-auto mt-5'>
            <li>Analisis de servicio</li>
            <li>Contencion e informacion de la modalidad</li>
          <h3>Speech</h3>
          <p>“Sr/a, debido a la demanda de servicios en la zona (COSTA)y/o por la cantidad de km que tiene el traslado (PAIS), para evitarle demoras excesivas o no tener disponibilidad, no es posible realizar el traslado de forma directa, por este motivo la asistencia se brindará bajo la siguiente modalidad: retiramos su vehículo de donde se encuentra en este momento, quedará en resguardo en la base en la localidad y el mismo será entregado en 72/96 hs hábiles”.</p>
          </ul>
        
        </div>
        <div className="tab-pane fade" id="nav-viajero" role="tabpanel" aria-labelledby="nav-viajero-tab" tabindex="0">
          <h3 className='mt-5'>Procedimiento de asistencia al viajero</h3>
          <ul className='lista'>
            <li>2 acompañantes completamente cubiertos. </li>
            <li>Resto de ocupantes se aplica cobertura segun grilla.</li>
            <li>Combis para algunos corredores. Se respeta la cobertura de convenio y no se tiene en cuenta el tope.</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-adicional" role="tabpanel" aria-labelledby="nav-adicional-tab" tabindex="0">
          <h2 className='mt-5'>Los adicionales se abonan de la siguiente manera: </h2>
          <ul className='lista'>
            <li>Tarjeta de credito o debito.</li>
            <li>Efectivo = solo cuando el prestador realiza las 3 etapas del servicio.</li>
            <li>Transferencia.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
