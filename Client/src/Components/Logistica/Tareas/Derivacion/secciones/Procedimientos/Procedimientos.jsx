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
          <h5>Orden de derivación</h5>
          <p>El Operador de Logística deberá derivar los servicios de acuerdo a la hora de pedido en orden ascendente</p>
          <h5>Análisis del servicio</h5>
          <p>Una vez marcado y previo a la aceptación del servicio, el Operador de Logística deberá realizar un análisis del mismo
            <table>
              <tr>
                <td>Historial de servicios anteriores</td>
                <td>Titular</td>
                <td>Vehículo</td>
                <td>Dominio</td>
                <td>Color</td>
              </tr>
              <tr><td>Falla</td>
                <td>Teléfono</td>
                <td>Ubicación origen y destino</td>
                <td>Cantidad de pasajeros</td>
                <td>Requisitos para que el vehículo viaje solo en caso de solicitar</td></tr>
              <tr><td>Horarios de taller</td>
                <td>Si posee carga</td>
                <td>Dimensiones y si hay alguna otra información extra en referencias</td>
                <td>Cobertura de la asistencia</td>
                <td>Si el trayecto corresponde o no a recorrido de transportin</td></tr>
            </table>

          </p>
          <h5>Contención</h5>
          <p> Si pasaron 20 minutos o más desde la toma del servicio, el Operador deberá realizar contención al cliente, confirmando que los datos registrados sean correctos y en caso de faltar alguno, completarlo en esta instancia. Y se volverá a realizar cada 40 minutos desde el último contacto. </p>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <h1>Seleccion de prestador</h1>
          <p>El operador deberá consultar las bases respetando el orden dado por el sistema. Si consultó a todas las bases, se puede aceptar alguna de las ya rechazadas, o buscarlas por localidad adoptando el siguiente criterio:
            <li>Elegir el prestador que encuentre más cercano al lugar de urgencia, dentro del recorrido origen-destino del cliente (económicamente conveniente).</li>
            <li>Si se tuviese que buscar fuera del recorrido de se procede de la siguiente manera:
              <ul>Servicios locales y mecánica, hasta 60 km lineales vacíos.</ul>
              <ul>Ruta y transito, hasta 100 km lineales vacíos tanto en origen, recorrido y/o destino.</ul>
            </li>
            <li>En caso de que tener disponibilidad con un prestador que se encuentre a más de 100 km vacíos y en la zona consultada anteriormente no haya disponibilidad. consultar con supervisor o B.O para pedir la autorización correspondiente</li>
            <li>El operador podrá consultar con torre de conexión si existe disponibilidad de enlazar el servicio con alguna base que tenga grúa disponible en la zona</li>
          </p>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <h1>Tipos de asignaciones</h1>
          <h5>Asignación Manual</h5>
          <li>Dictado telefónico:
            <p>Durante el llamado telefónico con el prestador por consulta de disponibilidad, el operador dictará los datos del servicio recorriendo cada pestaña sin olvidar informar código y cobertura completa.</p>
          </li>
          <li>Mail:
            <p>A través del sistema de Astor el operador podrá enviar resumen de los datos del servicio al prestador consultado. Primero el operador deberá validar que la casilla de mail sea correcta y una vez enviado el resumen, confirmar la recepción.</p>
          </li>
          <li>WhatsApp:
            <p>A través del sistema de Astor el operador podrá enviar resumen de los datos del servicio al prestador consultado. Primero el operador deberá validar que el número de teléfono sea correcto y una vez enviado el resumen, confirmar la recepción.</p>
          </li>
          <h5>Asignación Automática</h5>
          <li>Sistema:
            <p>Para las bases que cuentan con este sistema el operador deberá enviar los datos del servicio. De este modo la base deberá aceptar las condiciones del servicio para que queden asignados. El operador deberá informar telefónicamente al prestador la cobertura y las particularidades del servicio que puedan ser de relevancia (Estado de ruedas, personas que acompañan, etc.)</p>
          </li>
          <li>GapLite:
            <p>es una aplicación web diseñada para el cursado de servicios por la cual el prestador podrá acceder y cursar la asistencia asignada. El operador deberá corroborar si la base consultada se encuentra en el listado de prestadores activos <a href="https://redsos-my.sharepoint.com/:x:/r/personal/jmolinari_redsos_com_ar/Documents/Prestadores%20con%20GAP%20Lite/PRESTADORES%20GAP%20Lite.xlsx?d=w03ab3d1ddfe14e43a534d851f9e06532&csf=1&web=1&e=zWm82z" target='_blank'><button>Prestador GapLite</button></a>
              Una vez confirmado el uso de la aplicación, definirá a través de que medio enviar un link al usuario y validando los mismos (mail o número de whats app).
              Si la asignación del servicio al prestador se realizó por sistema/Gap Lite y éste lo rechaza o no lo acepta, pasando el estado del servicio a “Rechazado”, el Operador de Logística que realizó la derivación deberá continuar trabajando sobre el mismo. El servicio podrá ser marcado y derivado por otro Operador solo si aquel hubiera terminado su turno o se hubiera deslogueado por otro motivo.
            </p>
          </li>
        </div>
        <div className="tab-pane fade" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-cierra-tab" tabIndex="0">
          <h1>Cierre</h1>
          <h5>Programación del servicio</h5>
          <p>En caso de falta de disponibilidad o por pedido del cliente se indicará la programación, la información se dejará en referencias y de ser posible el servicio se dejará coordinado con un prestador para el horario acordado con el cliente.</p>
          <h5>Demora del servicio </h5>
          <p>Es obligatorio siempre informar la demora estimada al cliente. Si la misma fue informada en la toma del servicio y varía ± 30 minutos con respecto a la informada por el prestador, se deberá dar aviso al cliente (debiendo tener en cuenta el tiempo transcurrido entre la hora de pedido y asignado).  </p>
          <h5>Contacto con el cliente </h5>
          <p>Siempre que se tome contacto con el cliente se deberá confirmar la Cobertura de la Asistencia respetando el requisito correspondiente establecido en los <a href="https://redsos.sharepoint.com/sites/SGC/Documentos%20compartidos/Sistema%20de%20Gestion%20de%20Calidad/SGC/RS%20Requisitos%20del%20Servicio%20de%20Asistencia,Rev09.pdf" target='_blank'> <button>Requisitos del Servicio de Asistencia</button></a>, fundamentalmente el nombre de la persona con quién nos estamos comunicando y todo otro dato de importancia para el servicio en gestión.</p>
          <h5>Pagos</h5>
          <li>En efectivo, se recordará al cliente que debe abonarlo al chofer de la grúa antes de cargar el vehículo para su traslado.</li>
          <li>Link de pago, el cual será generado por cada derivador, a través de Astor, solicitándole los datos que el sistema requiera.</li>
          <li>Transferencia al prestador, previamente consultado con la base.</li>
          <li>Pago al prestador, se podrá consultar con prestador posibilidad de realizar el cobro con tarjeta de crédito, débito o transferencia bancaria. En caso de aceptar, el prestador será responsable de coordinar el cobro contactando al cliente. Si surgiese alguna eventualidad o inconveniente en el cobro será responsable el prestador.   </li>
          <h6>Se deberá informar al cliente que hasta el pago no se vea impactado en el sistema no se activará el servicio de traslado.</h6>
          <h5>Reintegro</h5>
          <p>El operador podrá brindar la opción de reintegro ante la falta de disponibilidad de prestador en la localidad, demora elevada o falta de capacidad operativa. Para calcular el monto de reintegro el operador deberá utilizar la herramienta de calculadora, indicando kilómetros recorridos por el cliente y una vez calculado deberá dejar registro de lo informado en una referencia de derivación.
            <li>El derivador deberá informar la gestión del reintegro
              <ul>Solicitar ticket o factura con validez fiscal</ul>
              <ul>Adjuntar comprobante en la página, redsos.com.ar, en la sección de Sugerencias y reclamos <a href="https://tuportal.redsos.com.ar/form" target='_blank'> <button>RedSOS</button></a></ul>
              <ul>Brindar el códgio de servicio</ul>
              <ul>Informar el monto de reintegro</ul>
            </li>
            <ul>Debe dejar registro en el serivio del monto ofrecido y de la autorización del supervisor/Backoffice</ul>
          </p>
        </div>
        <div className="tab-pane fade" id="nav-roads" role="tabpanel" aria-labelledby="nav-zona-tab" tabIndex="0">
          <h1>Derivacion por zona</h1>
          <li>Es la operatoria que se utiliza para la coordinación de servicios cuando la demanda lo requiere y sea autorizado por el supervisor / back office de turno. El objetivo es en reducir los tiempos de espera del cliente optimizando los recursos y evitar el rellamado a las bases obteniendo información sobre la situación de cada una. </li>
          <li>El operador que este asignado a esta tarea deberá marcar todos los servicios de la zona delimitada acordando la cantidad de prestadores a consultar y establecer una ruta acorde a la que recorre el prestador para pasar los servicios en conjunto.</li>
          <li>Se deberá priorizar los servicios que se encuentren más demorados priorizando situación de ruta / tránsito y luego en domicilio respetando los tiempos de contención y registros</li>
          <li>Focalización de la atención en zonas de alta recurrencia de servicios. </li>
          <li>Disminuir la cantidad de llamadas del derivador para resolver un servicio.</li>
          <li>Posibilidad de implementar la utilización de conexiones.</li>
          <li>Identificar zonas críticas por falta de disponibilidad de móviles.</li>
          <li>Disminuir el tiempo promedio de derivación de los servicios.</li>
          <h6>Es necesario que se registren los rechazos de las bases, con el código de referencia correspondiente</h6>
          <iframe src="https://www.google.com/maps/d/embed?mid=1fvBNJlPnYFfKVW3SWlN7WtMdNqqI8R8&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
      </div>
    </div>
  )
}
