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
    <div className='conteinerNav mt-5'>
      <nav className='navConteiner justify-content-start align-items-start'>
        <div class="nav flex-column nav-tabs me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="false">Inicial</button>
          <button className="nav-link custom" id="nav-selecprest-tab" data-bs-toggle="tab" data-bs-target="#nav-selecprest" type="button" role="tab" aria-controls="nav-selecprest" aria-selected="false">Selección de prestador</button>
          <button className="nav-link custom" id="nav-tipoasig-tab" data-bs-toggle="tab" data-bs-target="#nav-tipoasig" type="button" role="tab" aria-controls="nav-contipoasigtact" aria-selected="false">Tipos de asignaciones</button>
          <button className="nav-link custom" id="nav-cierre-tab" data-bs-toggle="tab" data-bs-target="#nav-cierre" type="button" role="tab" aria-controls="nav-cierre" aria-selected="false">Cierre</button>
          <button className="nav-link custom" id="nav-zona-tab" data-bs-toggle="tab" data-bs-target="#nav-zona" type="button" role="tab" aria-controls="nav-zona" aria-selected="false">Derivación por zona</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto fs-5" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
          <div class="tab-content px-3 mt-3 lineaGeneral " id="nav-tabContent">
            <h3 className='mt-3 '><u>Orden de derivación</u></h3>
            <p>El Operador de Logística deberá derivar los servicios de acuerdo a la hora de pedido en orden ascendente</p>
            <h3><u>Análisis del servicio</u></h3>
            <p>Una vez marcado y previo a la aceptación del servicio, el Operador de Logística deberá realizar un análisis del mismo
              <table className='mt-5 mb-2'>
                <tr className='border border-dark'>
                  <td>Historial de servicios anteriores</td>
                  <td>Titular</td>
                  <td>Vehículo</td>
                  <td>Dominio</td>
                  <td>Color</td>
                </tr>
                <tr className='border border-dark'><td>Falla</td>
                  <td>Teléfono</td>
                  <td>Ubicación origen y destino</td>
                  <td>Cantidad de pasajeros</td>
                  <td>Requisitos para que el vehículo viaje solo en caso de solicitar</td></tr>
                <tr className='border border-dark'><td>Horarios de taller</td>
                  <td>Si posee carga</td>
                  <td>Dimensiones y si hay alguna otra información extra en referencias</td>
                  <td>Cobertura de la asistencia</td>
                  <td>Si el trayecto corresponde o no a recorrido de transportin</td></tr>
              </table>

            </p>
            <h5>Contención</h5>
            <p className='text-start justify-content-center'> Si pasaron 20 minutos o más desde la toma del servicio, el Operador deberá realizar contención al cliente, confirmando que los datos registrados sean correctos y en caso de faltar alguno, completarlo en esta instancia. Y se volverá a realizar cada 40 minutos desde el último contacto. </p>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-selecprest" role="tabpanel" aria-labelledby="nav-selecprest-tab" tabindex="0">
          <div class="tab-content px-3 mt-3 lineaGeneral " id="nav-tabContent">
            <p className='mt-5 fs-4 fw-bold text-start'>El operador deberá consultar las bases respetando el orden dado por el sistema. Si consultó a todas las bases, se puede aceptar alguna de las ya rechazadas, o buscarlas por localidad adoptando el siguiente criterio:</p>
            <ul className='text-start fs-5 mt-3'>
              <li>Elegir el prestador que encuentre más cercano al lugar de urgencia, dentro del recorrido origen-destino del cliente (económicamente conveniente).</li>
              <li>Si se tuviese que buscar fuera del recorrido de se procede de la siguiente manera:
                <ul>Servicios locales y mecánica, hasta 60 km lineales vacíos.</ul>
                <ul>Ruta y transito, hasta 100 km lineales vacíos tanto en origen, recorrido y/o destino.</ul>
              </li>
              <li>En caso de que tener disponibilidad con un prestador que se encuentre a más de 100 km vacíos y en la zona consultada anteriormente no haya disponibilidad. consultar con supervisor o B.O para pedir la autorización correspondiente</li>
              <li>El operador podrá consultar con torre de conexión si existe disponibilidad de enlazar el servicio con alguna base que tenga grúa disponible en la zona</li>
            </ul>
          </div>
        </div>
        <div className="tab-pane fade " id="nav-tipoasig" role="tabpanel" aria-labelledby="nav-tipoasig-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-manual-tab" data-bs-toggle="tab" data-bs-target="#nav-manual" type="button" role="tab" aria-controls="nav-manual" aria-selected="true">Asignación Manual</button>
              <button class="nav-link sub" id="nav-automatica-tab" data-bs-toggle="tab" data-bs-target="#nav-automatica" type="button" role="tab" aria-controls="nav-automatica" aria-selected="false">Asignación Automatica</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-manual" role="tabpanel" aria-labelledby="nav-manual-tab" tabindex="0">
              <ul className='lista fs-5'>
                <li className='text-center justify-content-center '> <u>Dictado telefónico</u>
                  <p className='text-start'>Durante el llamado telefónico con el prestador por consulta de disponibilidad, el operador dictará los datos del servicio recorriendo cada pestaña sin olvidar informar código y cobertura completa.</p>
                </li>
                <li className='text-center justify-content-center '><u>Mail</u>
                  <p className='text-start'>A través del sistema de Astor el operador podrá enviar resumen de los datos del servicio al prestador consultado. Primero el operador deberá validar que la casilla de mail sea correcta y una vez enviado el resumen, confirmar la recepción.</p>
                </li>
                <li className='text-center justify-content-center '><u>WhatsApp</u>
                  <p className='text-start'>A través del sistema de Astor el operador podrá enviar resumen de los datos del servicio al prestador consultado. Primero el operador deberá validar que el número de teléfono sea correcto y una vez enviado el resumen, confirmar la recepción.</p>
                </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-automatica" role="tabpanel" aria-labelledby="nav-automatica-tab" tabindex="0">
              <ul className='lista fs-5'>
                <li className='text-center justify-content-center '><u>Sistema</u>
                  <p className='text-start'>Para las bases que cuentan con este sistema el operador deberá enviar los datos del servicio. De este modo la base deberá aceptar las condiciones del servicio para que queden asignados. El operador deberá informar telefónicamente al prestador la cobertura y las particularidades del servicio que puedan ser de relevancia (Estado de ruedas, personas que acompañan, etc.)</p>
                </li>
                <li className='text-center justify-content-center '><u>GapLite</u>
                  <p className='text-start'>Es una aplicación web diseñada para el cursado de servicios por la cual el prestador podrá acceder y cursar la asistencia asignada. El operador deberá corroborar si la base consultada se encuentra en el listado de prestadores activos <a href="https://redsos-my.sharepoint.com/:x:/r/personal/jmolinari_redsos_com_ar/Documents/Prestadores%20con%20GAP%20Lite/PRESTADORES%20GAP%20Lite.xlsx?d=w03ab3d1ddfe14e43a534d851f9e06532&csf=1&web=1&e=zWm82z" target='_blank'><button type='button' class="customBTN mx-2">Prestador GapLite</button></a>
                    Una vez confirmado el uso de la aplicación, definirá a través de que medio enviar un link al usuario y validando los mismos (mail o número de whats app).
                    Si la asignación del servicio al prestador se realizó por sistema/Gap Lite y éste lo rechaza o no lo acepta, pasando el estado del servicio a “Rechazado”, el Operador de Logística que realizó la derivación deberá continuar trabajando sobre el mismo. El servicio podrá ser marcado y derivado por otro Operador solo si aquel hubiera terminado su turno o se hubiera deslogueado por otro motivo.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade text-start py-2" id="nav-cierre" role="tabpanel" aria-labelledby="nav-cierre-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-progsvc-tab" data-bs-toggle="tab" data-bs-target="#nav-progsvc" type="button" role="tab" aria-controls="nav-progsvc" aria-selected="true">Programación del Servicio</button>
              <button class="nav-link sub" id="nav-demsvc-tab" data-bs-toggle="tab" data-bs-target="#nav-demsvc" type="button" role="tab" aria-controls="nav-demsvc" aria-selected="false">Demora del Servicio</button>
              <button class="nav-link sub" id="nav-cttocl-tab" data-bs-toggle="tab" data-bs-target="#nav-cttocl" type="button" role="tab" aria-controls="nav-cttocl" aria-selected="false">Contacto con el Cliente</button>
              <button class="nav-link sub" id="nav-pagos-tab" data-bs-toggle="tab" data-bs-target="#nav-pagos" type="button" role="tab" aria-controls="nav-pagos" aria-selected="false">Pagos</button>
              <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Reintegro</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-progsvc" role="tabpanel" aria-labelledby="nav-progsvc-tab" tabindex="0">
              <p>En caso de falta de disponibilidad o por pedido del cliente se indicará la programación, la información se dejará en referencias y de ser posible el servicio se dejará coordinado con un prestador para el horario acordado con el cliente.</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-demsvc" role="tabpanel" aria-labelledby="nav-demsvc-tab" tabindex="0">
              <p>Es obligatorio siempre informar la demora estimada al cliente. Si la misma fue informada en la toma del servicio y varía ± 30 minutos con respecto a la informada por el prestador, se deberá dar aviso al cliente (debiendo tener en cuenta el tiempo transcurrido entre la hora de pedido y asignado).  </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-cttocl" role="tabpanel" aria-labelledby="nav-cttocl-tab" tabindex="0">
              <p>Siempre que se tome contacto con el cliente se deberá confirmar la Cobertura de la Asistencia respetando el requisito correspondiente establecido en los <a href="https://redsos.sharepoint.com/sites/SGC/Documentos%20compartidos/Sistema%20de%20Gestion%20de%20Calidad/SGC/RS%20Requisitos%20del%20Servicio%20de%20Asistencia,Rev09.pdf" target='_blank'> <button type='button' class="customBTN mx-2">Requisitos del Servicio de Asistencia</button></a>, fundamentalmente el nombre de la persona con quién nos estamos comunicando y todo otro dato de importancia para el servicio en gestión.</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-pagos" role="tabpanel" aria-labelledby="nav-pagos-tab" tabindex="0">
              <ul className='text-start fs-6'>
                <li>En efectivo, se recordará al cliente que debe abonarlo al chofer de la grúa antes de cargar el vehículo para su traslado.</li>
                <li>Link de pago, el cual será generado por cada derivador, a través de Astor, solicitándole los datos que el sistema requiera.</li>
                <li>Pago al prestador, se podrá consultar con prestador posibilidad de realizar el cobro con tarjeta de crédito, débito o transferencia bancaria. En caso de aceptar, el prestador será responsable de coordinar el cobro contactando al cliente. Si surgiese alguna eventualidad o inconveniente en el cobro será responsable el prestador.   </li></ul>
              <h3><b>Se deberá informar al cliente que hasta el pago no se vea impactado en el sistema no se activará el servicio de traslado.</b></h3>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-reintegro" role="tabpanel" aria-labelledby="nav-reintegro-tab" tabindex="0">
              <p className='text-start fs-6'>El operador podrá brindar la opción de reintegro ante la falta de disponibilidad de prestador en la localidad, demora elevada o falta de capacidad operativa. Para calcular el monto de reintegro el operador deberá utilizar la herramienta de calculadora, indicando kilómetros recorridos por el cliente y una vez calculado deberá dejar registro de lo informado en una referencia de derivación.
                <ul><u>El derivador deberá informar la gestión del reintegro:</u>
                  <li>Solicitar ticket o factura con validez fiscal</li>
                  <li>Adjuntar comprobante en la página, redsos.com.ar, en la sección de Sugerencias y reclamos
                    <div className='m-auto p-2'>
                      <a href="https://tuportal.redsos.com.ar/form" target='_blank'>
                        <button type='button' className="customBTN mx-2">RedSOS</button>
                      </a>
                    </div>
                  </li>
                  <li>Brindar el códgio de servicio</li>
                  <li>Informar el monto de reintegro</li>
                </ul>
                <h3><b>Debe dejar registro en el serivio del monto ofrecido y de la autorización del supervisor/Backoffice</b></h3>
              </p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="nav-zona" role="tabpanel" aria-labelledby="nav-zona-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-derivzn-tab" data-bs-toggle="tab" data-bs-target="#nav-derivzn" type="button" role="tab" aria-controls="nav-derivzn" aria-selected="true">Derivación</button>
              <button class="nav-link sub" id="nav-mapazn-tab" data-bs-toggle="tab" data-bs-target="#nav-mapazn" type="button" role="tab" aria-controls="nav-mapazn" aria-selected="false">Mapa por Zona</button>
            </div>
          </nav>
          <div class="tab-content m-auto" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-derivzn" role="tabpanel" aria-labelledby="nav-derivzn-tab" tabindex="0">
              <ul className='text-start mt-4'>
                <li>Es la operatoria que se utiliza para la coordinación de servicios cuando la demanda lo requiere y sea autorizado por el supervisor / back office de turno. El objetivo es en reducir los tiempos de espera del cliente optimizando los recursos y evitar el rellamado a las bases obteniendo información sobre la situación de cada una. </li>
                <li>El operador que este asignado a esta tarea deberá marcar todos los servicios de la zona delimitada acordando la cantidad de prestadores a consultar y establecer una ruta acorde a la que recorre el prestador para pasar los servicios en conjunto.</li>
                <li>Se deberá priorizar los servicios que se encuentren más demorados priorizando situación de ruta / tránsito y luego en domicilio respetando los tiempos de contención y registros</li>
                <li>Focalización de la atención en zonas de alta recurrencia de servicios. </li>
                <li>Disminuir la cantidad de llamadas del derivador para resolver un servicio.</li>
                <li>Posibilidad de implementar la utilización de conexiones.</li>
                <li>Identificar zonas críticas por falta de disponibilidad de móviles.</li>
                <li>Disminuir el tiempo promedio de derivación de los servicios.</li>
              </ul>
              <h4><b>Es necesario que se registren los rechazos de las bases, con el código de referencia correspondiente</b></h4>
            </div>
            <div className="tab-pane fade" id="nav-mapazn" role="tabpanel" aria-labelledby="nav-mapazn-tab" tabIndex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1fvBNJlPnYFfKVW3SWlN7WtMdNqqI8R8&ehbc=2E312F"
                  className='responsiveIframe'
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
