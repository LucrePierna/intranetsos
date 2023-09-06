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
    <div className='d-flex align-items-start flex-colum bg-secondary rounded justify-content-center mx-auto h-50 w-50 mt-5 ' >
      <nav className='d-flex align-items-start flex-colum'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

          <button className="nav-link custom active" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="true">Descripcion de la tarea</button>
          <button className="nav-link custom" id="nav-eficaz-tab" data-bs-toggle="tab" data-bs-target="#nav-eficaz" type="button" role="tab" aria-controls="nav-eficaz" aria-selected="false">Conexion eficaz</button>
          <button className="nav-link custom" id="nav-registro-tab" data-bs-toggle="tab" data-bs-target="#nav-registro" type="button" role="tab" aria-controls="nav-registro" aria-selected="false">Formato de registro</button>
          <button className="nav-link custom" id="nav-rechazo-tab" data-bs-toggle="tab" data-bs-target="#nav-rechazo" type="button" role="tab" aria-controls="nav-rechazo" aria-selected="false">Motivos de rechazo</button>
          <button className="nav-link custom" id="nav-planilla-tab" data-bs-toggle="tab" data-bs-target="#nav-planilla" type="button" role="tab" aria-controls="nav-planilla" aria-selected="false">Planilla</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active px-3 mt-3" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
          <ul className='text-start'>
            <li>Visualización y análisis de la pantallas para la derivacion de servicios.</li>
            <li>Analizar las zonas en donde finalizan los servicios.</li>
            <li>Corroborar que sea conveniente la triangulación de los servicios</li>
            <li>Ofrecer a los prestadores la posibilidad de asistir a los clientes a través de este “enganche” de servicios.</li>
          </ul>

        </div>
        <div className="tab-pane fade" id="nav-eficaz" role="tabpanel" aria-labelledby="nav-eficaz-tab" tabindex="0">
          <h1>Conexion eficaz</h1>
        </div>
        <div className="tab-pane fade" id="nav-registro" role="tabpanel" aria-labelledby="nav-registro-tab" tabIndex="0">
          <h1>Formato de registro</h1>
        </div>
        <div className="tab-pane fade px-3 mt-3" id="nav-rechazo" role="tabpanel" aria-labelledby="nav-rechazo-tab" tabindex="0">
          <p>El registro debe estar completo y los motivos claros del porque prestador no acepta la conexión Motivo: Cuestiones Operativas Descripción: Prestador ____ no acepta Enganche </p>
          <ul className='text-start fs-5 mt-3'>
            <li>Móvil roto (se averió en el transcurso del servicio inicial)</li>
            <li>Horario de taller (la demora informada no permite llegar a tiempo al taller)</li>
            <li>Demora excesiva (cuando la demora es considerablemente elevada)</li>
            <li>Viaje largo (tiene otro viaje asignado o programado con kilómetros)</li>
            <li>Horario nocturno (prestador no realiza servicios en horarios nocturnos)</li>
            <li>Fin de turno (prestador finaliza su turno con el servicio inicial)</li>
            <li>Volvio a Base (prestador ya retornó o está retornando a base)</li>
            <li>No acepta Conexión (prestador no toma el servicio como conexión) </li>
          </ul>

        </div>
        <div className="tab-pane fade" id="nav-planilla" role="tabpanel" aria-labelledby="nav-planilla-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-ceficaz-tab" data-bs-toggle="tab" data-bs-target="#nav-ceficaz" type="button" role="tab" aria-controls="nav-ceficaz" aria-selected="true">Conexión Eficaz</button>
              <button class="nav-link sub" id="nav-traslzn-tab" data-bs-toggle="tab" data-bs-target="#nav-traslzn" type="button" role="tab" aria-controls="nav-traslzn" aria-selected="true">Traslados Locales/Zona</button>
              <button class="nav-link sub" id="nav-noacepta-tab" data-bs-toggle="tab" data-bs-target="#nav-noacepta" type="button" role="tab" aria-controls="nav-noacepta" aria-selected="false">Prestador No Acepta Conexion</button>
              <button class="nav-link sub" id="nav-obervaciones-tab" data-bs-toggle="tab" data-bs-target="#nav-obervaciones" type="button" role="tab" aria-controls="nav-obervaciones" aria-selected="false">Obervaciones</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-5" id="nav-ceficaz" role="tabpanel" aria-labelledby="nav-ceficaz-tab" tabindex="0">
              <p>LUEGO DE ASIGNADA LA BASE CORRESPONDIENTE, SE DEBE CARGAR EN LA PLANILLA</p>
              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>1º servicio</td>
                  <td className='border border-black px-2'>2º servicio</td>
                  <td className='border border-black px-2'>fecha</td>
                  <td className='border border-black px-2'>nº de base</td>
                  <td className='border border-black px-2'>condición</td>
                  <td className='border border-black px-2'>kms sin conexión</td>
                  <td className='border border-black px-2'>kms con conexión</td>
                  <td className='border border-black px-2'>kms ganados</td>
                  <td className='border border-black px-2'>operador que realizó la conexión</td>
                  <td className='border border-black px-2'>Observación en caso de ser necesario</td>
                </tr>
              </table>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-traslzn" role="tabpanel" aria-labelledby="nav-traslzn-tab" tabindex="0">
              <p>
                Se puede dar que le pasemos varios servicios en una misma zona a un prestador que está finalizando en zona o yendo a hacer uno a alguna localidad cercana, en ese caso se conecta por más que no tenga ganancias de kms, para cubrir la zona y optimizar un móvil, pasando uno o más servicios.
                <br></br>
                Esto se carga en planilla en la sección “Locales / svc en zona” <br></br>
                En este caso se dejan vacíos los casilleros de  kms sin conexión – kms con conexión – kms ganados.
              </p>
              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>1º servicio</td>
                  <td className='border border-black px-2'>2º servicio</td>
                  <td className='border border-black px-2'>fecha</td>
                  <td className='border border-black px-2'>nº de base</td>
                  <td className='border border-black px-2'>condición</td>
                  <td className='border border-black px-2'>operador que realizó la conexión</td>
                  <td className='border border-black px-2'>Observación en caso de ser necesario</td>
                </tr>
              </table>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-noacepta" role="tabpanel" aria-labelledby="nav-noacepta-tab" tabindex="0">
              <p>
                En caso de que prestador no acepte la conexión por distintos motivos, debemos dejar el registro en planilla, en la sección de “Anulados”
              </p>

              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>1º servicio</td>
                  <td className='border border-black px-2'>2º servicio</td>
                  <td className='border border-black px-2'>fecha</td>
                  <td className='border border-black px-2'>nº de base</td>
                  <td className='border border-black px-2'>condición</td>
                  <td className='border border-black px-2'>operador</td>
                  <td className='border border-black px-2'>Observación</td>
                </tr>
              </table>
              <h5>TIPOS DE ANULACIONES</h5>
              <div className='text-start d-flex flex-row fs-5 mt-3 px-5'>
                <ul className='px-5'>
                  <li>ANULADO </li>
                  <li>CAMBIO DE DESTINO </li>
                  <li>CAPACIDAD OPERATIVA </li>
                  <li>DEMORA EXCESIVA</li>
                  <li>DIMENSIONES </li>
                  <li>FIN DE TURNO </li>
                  <li>NO ACEPTA BASE </li>
                  <li>NO SE TRASLADO </li>
                  <li>NO TOME CONEXIONES </li>
                  <li>NO TRASLADA MOTOS </li>
                  <li>PROGRAMADO </li>
                </ul>
                <ul >
                  <li>MOVIL ROTO </li>
                  <li>SIN DISPONIBILIDAD </li>
                  <li>SIN RESPUESTA </li>
                  <li>SERVICIO PRIVADO </li>
                  <li>TRANSPORTIN </li>
                  <li>TRASLADA MOTOS </li>
                  <li>VOLVIO A BASE </li>
                  <li>VUELVE CARGADO </li>
                  <li>YA PASO ZONA </li>
                  <li>TRASLADA A LA PROXIMA LOCALIDAD </li>
                </ul>
              </div>

            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-obervaciones" role="tabpanel" aria-labelledby="nav-obervaciones-tab" tabindex="0">
              <p>
                En el apartado de “Observaciones” dejamos registro de lo que se ha puesto en guarda por transportin, viendo la posibilidad de sacarlos con algún móvil que finalice por la zona.
                Debemos dejar registro de:
              </p>
              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>Código del servicio</td>
                  <td className='border border-black px-2'>Patente </td>
                  <td className='border border-black px-2'>Origen (donde está en guarda el vehiculo)</td>
                  <td className='border border-black px-2'>Destino Real</td>
                  <td className='border border-black px-2'>Día (en el cual se puso en guarda)</td>
                  <td className='border border-black px-2'>Observaciones (datos complementarios del servicio)</td>
                  <td className='border border-black px-2'>Estado</td>
                </tr>
              </table>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}


