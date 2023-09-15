import React from 'react'
import '../../../../EstilosGlobales/General.css'
import * as bootstrap from 'bootstrap'
import Formato from './Formato/Formato'

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
    <div className='conteinerNav mt-5  ' >
      <nav className='navConteiner'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="true">Descripción</button>
          <button className="nav-link custom" id="nav-tarea-tab" data-bs-toggle="tab" data-bs-target="#nav-tarea" type="button" role="tab" aria-controls="nav-tarea" aria-selected="false">Tarea del derivador</button>
          <button className="nav-link custom" id="nav-viajero-tab" data-bs-toggle="tab" data-bs-target="#nav-viajero" type="button" role="tab" aria-controls="nav-viajero" aria-selected="false">Viajero</button>
          <button className="nav-link custom" id="nav-adicional-tab" data-bs-toggle="tab" data-bs-target="#nav-adicional" type="button" role="tab" aria-controls="nav-adicional" aria-selected="false">Adicionales</button>
          <button className="nav-link custom" id="nav-gruat-tab" data-bs-toggle="tab" data-bs-target="#nav-gruat" type="button" role="tab" aria-controls="nav-gruat" aria-selected="false">Grúa Triple</button>
          <button className="nav-link custom" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Formato</button>
        </div>
      </nav>
      <div className="tab-content mt-3 px-5 m-auto text-start fs-5" id="nav-tabContent">
        <div className="tab-pane fade show active w-50 h-50 m-auto mt-5" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
          <p className='fs-5'>La modalidad se brinda a todos los vehiculos que se encuentren ... El traslado se realiza para las categorias de liviano, liviano excedido y liviano especial. Se requiere un control y seguimiento continuo hasta la entrega de la unidad.</p>

          <h3><u>Objetivos</u></h3>
          <ul className='lista'>
            <li>Tener mayor disponibilidades en la zona de mayor demanda para servicios en zona.</li>
            <li>Reducir los tiempos de espera.</li>
            <li>Reducir los costos de servicios.</li>
          </ul>
          <h3><u>Etapas</u></h3>
          <ul className='lista'>
            <li>Transportin Inicio =  Se realiza la busqueda de la unidad</li>
            <li>Transportin = Traslado de los vehiculos en el camion </li>
            <li>Transportin Distribucion = Traslado de base de guarda hasta destino del cliente</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-tarea" role="tabpanel" aria-labelledby="nav-tarea-tab" tabindex="0">
          <ul className='lista h-50 w-50 m-auto mt-5'>
            <li>Analisis de servicio</li>
            <li>Contencion e informacion de la modalidad</li>
            <h3 className='mt-3'><u>Speech</u></h3>
            <p>“Sr/a, debido a la demanda de servicios en la zona (COSTA)y/o por la cantidad de km que tiene el traslado (PAIS), para evitarle demoras excesivas o no tener disponibilidad, no es posible realizar el traslado de forma directa, por este motivo la asistencia se brindará bajo la siguiente modalidad: retiramos su vehículo de donde se encuentra en este momento, quedará en resguardo en la base en la localidad y el mismo será entregado en 72/96 hs hábiles”.</p>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-viajero" role="tabpanel" aria-labelledby="nav-viajero-tab" tabindex="0">
          <h3 className='mt-5'><u>Procedimiento de asistencia al viajero</u></h3>
          <ul className='mt-4'>
            <li>2 acompañantes completamente cubiertos. </li>
            <li>Resto de ocupantes se aplica cobertura segun grilla.</li>
            <li>Combis para algunos corredores. Se respeta la cobertura de convenio y no se tiene en cuenta el tope.</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-adicional" role="tabpanel" aria-labelledby="nav-adicional-tab" tabindex="0">
          <h3 className='mt-5'><u>Los adicionales se abonan de la siguiente manera: </u></h3>
          <ul className='mt-3'>
            <li>Tarjeta de credito o debito.</li>
            <li>Efectivo = solo cuando el prestador realiza las 3 etapas del servicio.</li>
            <li>Transferencia.</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-gruat" role="tabpanel" aria-labelledby="nav-gruat-tab" tabindex="0">
          <h3><u>Descripción</u></h3>
          <p>Grúa Tripe (móvil 1211)
            Es la unidad propia de SOS disponible para trasladar un máximo de 3 vehículos bajo la modalidad trasportín. Tiene sus recorridos propios y se pueden generar otros de acuerdo a la demanda en la zona. Cabe destacar que el móvil no cotiza por servicios y que solo traslada vehículos de clientes de SOS.
          </p>
          <h3><u>Etapas</u></h3>
          <p>Una vez recolectados los vehículos se deberá coordinar el móvil con el prestador Vasallo Base 13480 y con los datos de los vehículos a trasladar. Para ello se generará un código de manera manual con los siguientes datos:</p>
          <ul className='text-center list-unstyled h-50 w-50 m-auto fs-5 py-4'>
            <li>Cliente: Grúa Triple</li>
            <li>Patente: TTT001</li>
            <li>Radio: Servicio Privado Trasportín</li>
            <li>Tipo de vehículo: Pesado Categoría 1</li>
            <li>Origen: Desde donde sale el mosquito</li>
            <li>Destino: Destino Final del mosquito</li>
          </ul>
          <p>En referencias de derivación: Registrar los vehículos que traslada en el trayecto.</p>
          <p>Luego el operador deberá asignar el servicio por reintegro a base 10361 Reintegro Córdoba, pero con el cierre TRANSPORTIN ENLACE.</p>
        </div>
        <div className="tab-pane fade" id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">
          <Formato />
        </div>
      </div>
    </div >
  )
}

