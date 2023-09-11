/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'


export default function Procedimientos() {

  useEffect(() => {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    const inicialTab = new bootstrap.Tab(document.querySelector('#nav-inicial-tab'));
    inicialTab.show();

  }, []);



  return (
    <div className='conteinerNav mt-5 ' >
      <nav className='navConteiner'>
        <div class="nav flex-column nav-tabs me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="false">Objetivos</button>
          <button className="nav-link custom" id="nav-redna-tab" data-bs-toggle="tab" data-bs-target="#nav-redna" type="button" role="tab" aria-controls="nav-redna" aria-selected="false">Red Nacional</button>
          <button className="nav-link custom" id="nav-trafnac-tab" data-bs-toggle="tab" data-bs-target="#nav-trafnac" type="button" role="tab" aria-controls="nav-trafnac" aria-selected="false">Tráficos Nacionales</button>
          <button className="nav-link custom" id="nav-trafloc-tab" data-bs-toggle="tab" data-bs-target="#nav-trafloc" type="button" role="tab" aria-controls="nav-trafloc" aria-selected="false">Tráfico Local</button>
          <button className="nav-link custom" id="nav-general-tab" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="false">Generalidades</button>
        </div>
      </nav>
      <div className="tab-content px-5" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
          <h5>OBJETIVO DEL PROCEDIMIENTO Y ALCANCE DE APLICACIÓN</h5>
          <p>Este procedimiento describe la metodología para realizar la contención a los clientes usuarios durante la coordinación de la asistencia. Alcanza a los servicios de traslado y mecánica ligera, de red nacional, tráficos nacionales y tráficos locales. </p>
        </div>
        <div className="tab-pane fade" id="nav-redna" role="tabpanel" aria-labelledby="nav-redna-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-sinderiv-tab" data-bs-toggle="tab" data-bs-target="#nav-sinderiv" type="button" role="tab" aria-controls="nav-sinderiv" aria-selected="true">Servicios Sin Derivar</button>
              <button class="nav-link sub" id="nav-svcacept-tab" data-bs-toggle="tab" data-bs-target="#nav-svcacept" type="button" role="tab" aria-controls="nav-svcacept" aria-selected="false">Servicio Aceptado</button>
              <button class="nav-link sub" id="nav-ctto-tab" data-bs-toggle="tab" data-bs-target="#nav-ctto" type="button" role="tab" aria-controls="nav-ctto" aria-selected="false">Contacto</button>
              <button class="nav-link sub" id="nav-seguimiento-tab" data-bs-toggle="tab" data-bs-target="#nav-seguimiento" type="button" role="tab" aria-controls="nav-seguimiento" aria-selected="false">Seguimiento y Control de los Servicios</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-sinderiv" role="tabpanel" aria-labelledby="nav-sinderiv-tab" tabindex="0">
              <p>Si el operador de Contención detecta en el análisis que transcurrieron 60’ o más desde la toma del servicio, deberá establecer un primer contacto con el cliente.</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-svcacept" role="tabpanel" aria-labelledby="nav-svcacept-tab" tabindex="0">
              <p>Cuando el servicio este aceptado y/ siendo trabajado por el Operador de Logística, la contención, seguimiento y llegada del servicio será responsabilidad del mismo, sin intervención del operador de contención. </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-ctto" role="tabpanel" aria-labelledby="nav-ctto-tab" tabindex="0">
              <p>Transcurridos 20’ desde la toma del servicio, el operador de Contención deberá establecer un primer contacto con el cliente para informarle que se está trabajando en su pedido de asistencia. Transcurridos 40/60’ de la última contención, deberá volver a contactar al cliente y notificar el estado del servicio. </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-seguimiento" role="tabpanel" aria-labelledby="nav-seguimiento-tab" tabindex="0">
              <p>Si al realizar el seguimiento del servicio, el Operador de Contención detecta que el móvil ya realizó el servicio, deberá dar llegada y finalización del servicio en el sistema.  </p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-trafnac" role="tabpanel" aria-labelledby="nav-trafnac-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-svcacepttn-tab" data-bs-toggle="tab" data-bs-target="#nav-svcacepttn" type="button" role="tab" aria-controls="nav-svcacepttn" aria-selected="true">Servicio Aceptado</button>
              <button class="nav-link sub" id="nav-cttotn-tab" data-bs-toggle="tab" data-bs-target="#nav-cttotn" type="button" role="tab" aria-controls="nav-cttotn" aria-selected="false">Contacto</button>
              <button class="nav-link sub" id="nav-rechsvctn-tab" data-bs-toggle="tab" data-bs-target="#nav-rechsvctn" type="button" role="tab" aria-controls="nav-rechsvctn" aria-selected="false">Rechazo de Servicios</button>
              <button class="nav-link sub" id="nav-cmbdemtn-tab" data-bs-toggle="tab" data-bs-target="#nav-cmbdemtn" type="button" role="tab" aria-controls="nav-cmbdemtn" aria-selected="false">Cambios de Demora</button>
              <button class="nav-link sub" id="nav-faltacomtn-tab" data-bs-toggle="tab" data-bs-target="#nav-faltacomtn" type="button" role="tab" aria-controls="nav-faltacomtn" aria-selected="false">Falta de Comunicación</button>
              <button class="nav-link sub" id="nav-demycierretn-tab" data-bs-toggle="tab" data-bs-target="#nav-demycierretn" type="button" role="tab" aria-controls="nav-demycierretn" aria-selected="false">Demora Caida y Cierre</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-svcacepttn" role="tabpanel" aria-labelledby="nav-svcacepttn-tab" tabindex="0">
              <p>Cuando el servicio este aceptado y/o siendo trabajado por el Operador de Logística, la contención, seguimiento y llegada del servicio será responsabilidad del mismo, sin intervención del operador de contención.</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-cttotn" role="tabpanel" aria-labelledby="nav-cttotn-tab" tabindex="0">
              <p>Transcurridos 20’ desde la toma del servicio, el operador de Contención deberá establecer un primer contacto con el cliente para informarle que se está trabajando en su pedido de asistencia.  </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-rechsvctn" role="tabpanel" aria-labelledby="nav-rechsvctn-tab" tabindex="0">
              <p>Cuando el servicio sea rechazado y pasado a Red Nacional por cualquier motivo, será responsabilidad del Operador de Tráfico realizar la contención correspondiente al cliente, informando la situación del servicio. </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-cmbdemtn" role="tabpanel" aria-labelledby="nav-cmbdemtn-tab" tabindex="0">
              <p>Para los servicios que se encuentren en los Tráficos Nacionales (tanto servicios de traslado como de mecánica ligera), a los cuales se les modificó la asignación de una base, se deberá realizar un control </p>
              <h5>Control</h5>
              <p>Dentro de la pantalla ‘Derivados’ se deberán verificar los servicios y controlar los cambios de demora a través del botón ‘Cambios de demora’ de la solapa “5. Horarios / otros”. </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-faltacomtn" role="tabpanel" aria-labelledby="nav-faltacomtn-tab" tabindex="0">
              <p>En caso de que el Operador no lograra contacto con el cliente, deberá intentar nuevamente la comunicación transcurridos 10 minutos. </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-demycierretn" role="tabpanel" aria-labelledby="nav-demycierretn-tab" tabindex="0">
              <p>Para los servicios cuya demora esté próxima a cumplirse o ya se encontrare cumplida y el móvil aún no hubiera llegado, serán aplicables los incisos a continuación. </p>
              <h5>Demora Caida</h5>
              <p>El Operador de Contención deberá consultar al móvil el motivo del retraso y el tiempo restante. Posteriormente deberá llamar al cliente para informar lo sucedido. </p>
              <h5>Segumiento, Control y Cierre de Servicios</h5>
              <p>Si al realizar el seguimiento del servicio, el Operador de Contención verificare que el móvil ya realizó el servicio, dará llegada y finalización del servicio en el sistema. </p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade text-start py-2" id="nav-trafloc" role="tabpanel" aria-labelledby="nav-trafloc-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-mvlasigtl-tab" data-bs-toggle="tab" data-bs-target="#nav-mvlasigtl" type="button" role="tab" aria-controls="nav-mvlasigtl" aria-selected="true">Servicio Con Móvil Asignado</button>
              <button class="nav-link sub" id="nav-sinmvltl-tab" data-bs-toggle="tab" data-bs-target="#nav-sinmvltl" type="button" role="tab" aria-controls="nav-sinmvltl" aria-selected="false">Servicios Sin Móvil Asignado</button>
              <button class="nav-link sub" id="nav-eventualtl-tab" data-bs-toggle="tab" data-bs-target="#nav-eventualtl" type="button" role="tab" aria-controls="nav-eventualtl" aria-selected="false">Servicio Con Base Eventual Asignada</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-mvlasigtl" role="tabpanel" aria-labelledby="nav-mvlasigtl-tab" tabindex="0">
              <p>Si el servicio es en tránsito, será responsabilidad del Operador de Contención dar aviso al cliente de la aceptación del móvil. Si es en lugar a resguardo, o es servicio de mecánica o motos, será responsabilidad del Operador de Tráfico dar aviso al cliente de la aceptación del móvil, indicando el tiempo de arribo del mismo y corroborando origen y destino del servicio. </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-sinmvltl" role="tabpanel" aria-labelledby="nav-sinmvltl-tab" tabindex="0">
              <p>Será responsabilidad del Operador de Tráfico dar aviso al cliente de la situación del servicio, independientemente de si está a resguardo o en tránsito.</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-eventualtl" role="tabpanel" aria-labelledby="nav-eventualtl-tab" tabindex="0">
              <p>Será responsabilidad del Operador de Tráfico dar aviso al cliente de la situación del servicio, independientemente de si está a resguardo o en tránsito. </p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-alternativas-tab" data-bs-toggle="tab" data-bs-target="#nav-alternativas" type="button" role="tab" aria-controls="nav-alternativas" aria-selected="true">Alternativas</button>
              <button class="nav-link sub" id="nav-registros-tab" data-bs-toggle="tab" data-bs-target="#nav-registros" type="button" role="tab" aria-controls="nav-registros" aria-selected="false">Registros</button>
              <button class="nav-link sub" id="nav-espyprog-tab" data-bs-toggle="tab" data-bs-target="#nav-espyprog" type="button" role="tab" aria-controls="nav-espyprog" aria-selected="false">Servicios Especiales y/o Programados</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-alternativas" role="tabpanel" aria-labelledby="nav-alternativas-tab" tabindex="0">
              <p>Considerando la criticidad del servicio, el Derivador/Operador de Contención podrá hacer uso de las alternativas de contención en el primer contacto con el cliente. Por ejemplo taxi, reintegros, etc. </p>
            </div>
            <div class="tab-pane fade px-3 py-5" id="nav-registros" role="tabpanel" aria-labelledby="nav-registros-tab" tabindex="0">
              <p>Siempre se deberá dejar registro claro y completo de lo informado u ofrecido al cliente y su aceptación/rechazo en una referencia de contención, así como tipificar correctamente la llamada en IPPad y registrar la patente en CRM. </p>
            </div>
            <div class="tab-pane fade px-3 py-5" id="nav-espyprog" role="tabpanel" aria-labelledby="nav-espyprog-tab" tabindex="0">
              <p>En todos los casos de servicios solicitados para Directivos, Presidente, personal de compañía de seguro / terminal automotriz, o S.O.S. S.A., independientemente del medio de ingreso de la solicitud, el Operador deberá enviar un correo electrónico informando la prioridad del mismo a las casillas supervisorescat@redsos.com.ar y supervisoresderivacion@redsos.com.ar, supervisorestrafico@redsos.com.ar, supervisoresdepiso@redsos.com.ar, a fin de que se le brinde la prioridad y contención necesaria y verificar respuesta por parte de algún supervisores vía mail corroborando están al tanto del servicio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}