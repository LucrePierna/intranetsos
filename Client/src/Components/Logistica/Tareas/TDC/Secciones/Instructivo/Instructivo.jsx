import React from 'react'
import * as bootstrap from 'bootstrap'
import imagen1 from '../../../../Image/eficaz1.png'
import imagen2 from '../../../../Image/eficaz2.png'

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
    <div className='conteinerNav mt-5 ' >
      <nav className='navConteiner'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="true">Descripción de la tarea</button>
          <button className="nav-link custom" id="nav-eficaz-tab" data-bs-toggle="tab" data-bs-target="#nav-eficaz" type="button" role="tab" aria-controls="nav-eficaz" aria-selected="false">Conexión eficaz</button>
          <button className="nav-link custom" id="nav-rechazo-tab" data-bs-toggle="tab" data-bs-target="#nav-rechazo" type="button" role="tab" aria-controls="nav-rechazo" aria-selected="false">Motivos de rechazo</button>
          <button className="nav-link custom" id="nav-planilla-tab" data-bs-toggle="tab" data-bs-target="#nav-planilla" type="button" role="tab" aria-controls="nav-planilla" aria-selected="false">Planilla</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto" id="nav-tabContent">
        <div className="tab-pane fade show active px-3 mt-3 lineaGeneral" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
          <ul className='text-start listaGral'>
            <li>Visualización y análisis de la pantallas para la derivacion de servicios.</li>
            <li>Analizar las zonas en donde finalizan los servicios.</li>
            <li>Corroborar que sea conveniente la triangulación de los servicios.</li>
            <li>Ofrecer a los prestadores la posibilidad de asistir a los clientes a través de este “enganche” de servicios.</li>
          </ul>

        </div>
        <div className="tab-pane fade " id="nav-eficaz" role="tabpanel" aria-labelledby="nav-eficaz-tab" tabindex="0">
          <div className='d-flex flex-row justify-content-evenly px-4 lineaGeneral'>
            <div className='px-5 '>
              <h1>1º Servicio</h1>
              <img src={imagen1} alt="Eficaz1" className='responsiveImg' />
            </div>
            <div className='mt-1'>
              <h1>2º Servicio.</h1>
              <img src={imagen2} alt="Eficaz2" className='responsiveImg' />
            </div>
          </div>
          <p className='py-5 text-center'>El primer servicio se pagará completo(Ida y Vuelta) al prestador, mientras que el segundo servicio se abonará desde Destino del primer servicio al nuevo Origen, Destino y luego vuelta a Base.</p>
        </div>
        <div className="tab-pane fade px-3 mt-3 lineaGeneral" id="nav-rechazo" role="tabpanel" aria-labelledby="nav-rechazo-tab" tabindex="0">
          <p >El registro debe estar completo y los motivos claros del porque prestador no acepta la conexión. Referencia: Cuestiones Operativas Descripción: Prestador "Base/Nombre" no acepta Enganche. </p>
          <ul className='text-start mt-3 listaGral'>
            <li>Móvil roto (se averió en el transcurso del servicio inicial).</li>
            <li>Horario de taller (la demora informada no permite llegar a tiempo al taller).</li>
            <li>Demora excesiva (cuando la demora es considerablemente elevada).</li>
            <li>Viaje largo (tiene otro viaje asignado o programado con kilómetros).</li>
            <li>Horario nocturno (prestador no realiza servicios en horarios nocturnos).</li>
            <li>Fin de turno (prestador finaliza su turno con el servicio inicial).</li>
            <li>Volvió a Base (prestador ya retornó o está retornando a base).</li>
            <li>No acepta Conexión (prestador no toma el servicio como conexión). </li>
          </ul>

        </div>
        <div className="tab-pane fade" id="nav-planilla" role="tabpanel" aria-labelledby="nav-planilla-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-ceficaz-tab" data-bs-toggle="tab" data-bs-target="#nav-ceficaz" type="button" role="tab" aria-controls="nav-ceficaz" aria-selected="true">Conexión Eficaz</button>
              <button class="nav-link sub" id="nav-traslzn-tab" data-bs-toggle="tab" data-bs-target="#nav-traslzn" type="button" role="tab" aria-controls="nav-traslzn" aria-selected="true">Traslados Locales/Zona</button>
              <button class="nav-link sub" id="nav-noacepta-tab" data-bs-toggle="tab" data-bs-target="#nav-noacepta" type="button" role="tab" aria-controls="nav-noacepta" aria-selected="false">Prestador No Acepta Conexión</button>
              <button class="nav-link sub" id="nav-obervaciones-tab" data-bs-toggle="tab" data-bs-target="#nav-obervaciones" type="button" role="tab" aria-controls="nav-obervaciones" aria-selected="false">Observaciones</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-ceficaz" role="tabpanel" aria-labelledby="nav-ceficaz-tab" tabindex="0">
              <p>Luego de asignada la base correspondiente, se debe cargar en la planilla, en la sección "Realizados" de la siguiente manera:</p>
              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>1º Servicio</td>
                  <td className='border border-black px-2'>2º Servicio</td>
                  <td className='border border-black px-2'>Fecha</td>
                  <td className='border border-black px-2'>Base</td>
                  <td className='border border-black px-2'>Condición</td>
                  <td className='border border-black px-2'>Kms sin conexión</td>
                  <td className='border border-black px-2'>Kms con conexión</td>
                  <td className='border border-black px-2'>Kms ganados</td>
                  <td className='border border-black px-2'>Operador</td>
                  <td className='border border-black px-2'>Observación</td>
                </tr>
              </table>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-traslzn" role="tabpanel" aria-labelledby="nav-traslzn-tab" tabindex="0">
              <p>
                Se puede dar que le pasemos varios servicios en una misma zona a un prestador que está finalizando en zona o yendo a hacer uno a alguna localidad cercana, en ese caso se conecta por más que no tenga ganancias de kms, para cubrir la zona y optimizar un móvil, pasando uno o más servicios.
                <br></br>
                Esto se carga en planilla en la sección “Locales / svc en zona”: <br />
                En este caso se dejan vacíos los casilleros de  kms sin conexión – kms con conexión – kms ganados.
              </p>
              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>1º Servicio</td>
                  <td className='border border-black px-2'>2º Servicio</td>
                  <td className='border border-black px-2'>Fecha</td>
                  <td className='border border-black px-2'>Base</td>
                  <td className='border border-black px-2'>Condición</td>
                  <td className='border border-black px-2'>Operador</td>
                  <td className='border border-black px-2'>Observación</td>
                </tr>
              </table>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-noacepta" role="tabpanel" aria-labelledby="nav-noacepta-tab" tabindex="0">
              <p>
                En caso de que prestador no acepte la conexión por distintos motivos, debemos dejar el registro en planilla, en la sección de “Anulados”:
              </p>
              <table className='mt-5 mb-2' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>1º Servicio</td>
                  <td className='border border-black px-2'>2º Servicio</td>
                  <td className='border border-black px-2'>Fecha</td>
                  <td className='border border-black px-2'>Nº de base</td>
                  <td className='border border-black px-2'>Condición</td>
                  <td className='border border-black px-2'>Operador</td>
                  <td className='border border-black px-2'>Observación</td>
                </tr>
              </table>
              <h1><u>TIPOS DE ANULACIONES</u></h1>
              <div className='text-start d-flex flex-row mt-3'>
                <ul className='listaGral'>
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
                <ul className='listaGral'>
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
              <table className='mt-5 mb-2 ' >
                <tr className='border border-dark'>
                  <td className='border border-black px-2'>Nº Servicio</td>
                  <td className='border border-black px-2'>Patente </td>
                  <td className='border border-black px-2'>Origen de guarda del vehículo</td>
                  <td className='border border-black px-2'>Destino real</td>
                  <td className='border border-black px-2'>Día que se puso en guarda</td>
                  <td className='border border-black px-2'>Datos complementarios del servicio</td>
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
