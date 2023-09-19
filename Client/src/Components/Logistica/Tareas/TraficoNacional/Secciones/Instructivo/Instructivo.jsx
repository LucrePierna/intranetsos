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
    <div className='conteinerNav mt-5' >
      <nav className='navConteiner'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="true">Inicial</button>
          <button className="nav-link custom" id="nav-asigyprest-tab" data-bs-toggle="tab" data-bs-target="#nav-asigyprest" type="button" role="tab" aria-controls="nav-asigyprest" aria-selected="false"> Asignación y Prestador</button>
          <button className="nav-link custom" id="nav-seguimiento-tab" data-bs-toggle="tab" data-bs-target="#nav-seguimiento" type="button" role="tab" aria-controls="nav-seguimiento" aria-selected="false">Seguimiento de Servicio</button>
          <button className="nav-link custom" id="nav-indgral-tab" data-bs-toggle="tab" data-bs-target="#nav-indgral" type="button" role="tab" aria-controls="nav-indgral" aria-selected="false">Indicaciones Generales</button>
          <button className="nav-link custom" id="nav-atprest-tab" data-bs-toggle="tab" data-bs-target="#nav-atprest" type="button" role="tab" aria-controls="nav-atprest" aria-selected="false">Atención a Prestadores</button>
          <button className="nav-link custom" id="nav-inyfinturn-tab" data-bs-toggle="tab" data-bs-target="#nav-inyfinturn" type="button" role="tab" aria-controls="nav-inyfinturn" aria-selected="false">Inicio y fin de turno</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto fs-5" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center px-3" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-orderiv-tab" data-bs-toggle="tab" data-bs-target="#nav-orderiv" type="button" role="tab" aria-controls="nav-orderiv" aria-selected="true">Orden de la Derivación</button>
              <button class="nav-link sub" id="nav-acepyrech-tab" data-bs-toggle="tab" data-bs-target="#nav-acepyrech" type="button" role="tab" aria-controls="nav-acepyrech" aria-selected="false">Aceptación y Rechazos de Servicios</button>
              <button class="nav-link sub" id="nav-prioricoord-tab" data-bs-toggle="tab" data-bs-target="#nav-prioricoord" type="button" role="tab" aria-controls="nav-prioricoord" aria-selected="false">Prioridades Para la Coordinación</button>
              <button class="nav-link sub" id="nav-induccion-tab" data-bs-toggle="tab" data-bs-target="#nav-induccion" type="button" role="tab" aria-controls="nav-induccion" aria-selected="false">Inducciones</button>
            </div>
          </nav>
          <div class="tab-content text-start px-4 mt-4" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-orderiv" role="tabpanel" aria-labelledby="nav-orderiv-tab" tabindex="0">
              <p>
                El Operador de Tráfico deberá analizar los servicios en pantalla para tener un panorama de la logística en su zona y poder intervenir sobre la automaticidad del sistema a fin de lograr la menor demora y la mejor distribución posible de los recursos disponibles.
                <br />
                El Supervisor o Back Office de turno asignará a cada Operador de Tráfico la zona sobre la cual deberá trabajar.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-acepyrech" role="tabpanel" aria-labelledby="nav-acepyrech-tab" tabindex="0">
              <p>
                Al ingresar un servicio en la pantalla del tráfico deberá ser aceptado o rechazado por el operador, esto dependerá de si cumple las condiciones para ser trabajado o no. En caso de ser rechazado, tendrá que quedar en la pantalla del F10, para ser revisado.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-prioricoord" role="tabpanel" aria-labelledby="nav-prioricoord-tab" tabindex="0">
              <p>
                Tanto para los servicios de mecánica ligera como de traslado, las prioridades para la coordinación son:</p>
              <ul className='mt-2'>
                <li>Servicios con prioridad alta (personas en riesgo, zonas peligrosas, contención, VIP);  </li>
                <li>Terminales (vehículos de porte liviano)   </li>
                <li>Demora estimada;   </li>
                <li>Servicios en ruta o transito;  </li>
                <li>Desperfecto del vehículo;  </li>
                <li>Servicios derivados por móviles taller (derivado a otro móvil). </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-induccion" role="tabpanel" aria-labelledby="nav-induccion-tab" tabindex="0">
              <p>
                En las zonas determinadas, aquellos traslados que ingresen con diagnostico/falla eléctrica, de arranque, alternador o batería en general deberán ser sometidos al proceso de inducción a mecánica.  Consideraciones a tener en cuenta:
              </p>
              <ul className='mt-2'>
                <li>La misma será realizada por el operador de ATP a prestadores o el operador encargado de la base según disponibilidad.   </li>
                <li>Se deberá dejar registro en la planilla de inducciones.  </li>
                <li>En los casos correspondiente, los operadores encargados de las bases deberán aguardar que se gestione la inducción antes de derivar el servicio.   </li>
              </ul>

            </div>
          </div>

        </div>
        <div className="tab-pane fade" id="nav-asigyprest" role="tabpanel" aria-labelledby="nav-asigyprest-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center px-3" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-altbajmov-tab" data-bs-toggle="tab" data-bs-target="#nav-altbajmov" type="button" role="tab" aria-controls="nav-altbajmov" aria-selected="true">Alta y Baja de Móviles</button>
              <button class="nav-link sub" id="nav-prioriasig-tab" data-bs-toggle="tab" data-bs-target="#nav-prioriasig" type="button" role="tab" aria-controls="nav-prioriasig" aria-selected="false">Prioridad</button>
              <button class="nav-link sub" id="nav-asigautman-tab" data-bs-toggle="tab" data-bs-target="#nav-asigautman" type="button" role="tab" aria-controls="nav-asigautman" aria-selected="false">Tipo de Asignación</button>

            </div>
          </nav>
          <div class="tab-content text-start px-4 mt-4" id="nav-tabContent">
            <div class="tab-pane fade show active " id="nav-altbajmov" role="tabpanel" aria-labelledby="nav-altbajmov-tab" tabindex="0">
              <p>
                Al comienzo de la tarea, el Operador de Tráfico deberá controlar la nómina de móviles enviada por Prestadores y realizar la consulta de disponibilidad con los prestadores que debieran estar trabajando y los que no se encuentran en la nómina (eventuales). De esta forma, tendrá un claro panorama de los recursos con los que cuenta para operar la base.
                <br></br>
                Los móviles que utilizan GAP deben darse de alta ellos mismos desde la aplicación. Si por cualquier motivo no lo pudieran hacer, se deberá dar aviso vía mail a las áreas correspondientes (GAP, Testing, Prestadores, Supervisores) indicando el inconveniente y luego el Operador de Tráfico deberá dar el alta manualmente.
                <br></br>
                Se deberá prestar especial atención en inactivar los móviles cuando corresponda, teniendo la pantalla siempre actualizada con los móviles que se encuentren realmente ACTIVOS. De esta manera se procura que los niveles de ocupación sean fieles a la realidad.
              </p>
            </div>
            <div class="tab-pane fade " id="nav-prioriasig" role="tabpanel" aria-labelledby="nav-prioriasig-tab" tabindex="0">
              <p>
                La prioridad de asignación estará dada por el tipo de contrato que tenga el móvil. No obstante, se deberá tener en cuenta equiparar la cantidad de servicios entre todos los móviles que tengamos trabajando para evitar tener activos que no realicen ni uno solo.</p>
              <ul className='mt-2'>
                <li>Contratados fijos;  </li>
                <li>Propios;  </li>
                <li>Eventuales. </li>
              </ul>
            </div>
            <div class="tab-pane fade " id="nav-asigautman" role="tabpanel" aria-labelledby="nav-asigautman-tab" tabindex="0">
              <p>
                Si están dadas las condiciones, el Operador de Tráfico deberá priorizar trabajar la base en automático, realizando el control y seguimiento de la asignación automática, informando demoras y analizando la simultaneidad de servicios y los tiempos, para determinar si es necesaria su intervención.
                <br />
                Deberá intervenir para asignar manualmente interpretando los indicadores que muestra el sistema en la pantalla (demoras, cantidad de móviles activos, prioridades, tipos de clientes y vehículos, etc.).
                <br />
                En ese caso, tener en cuenta lo siguiente:
              </p>
              <ul className='mt-2'>
                <li>Algunas “Zonas” de tráficos los móviles no cuentan con sistema GAP, por lo cual la derivación es telefónica o por mensajería y los servicios se trabajan de manera manual.  </li>
                <li>Prioridades de coordinación.  </li>
                <li>Tipos de servicios (traslados, mecánicas y venta de baterías, relevamientos OSA, extracción).  </li>
                <li>Tipos de clientes (VIP, terminales automotrices, casos solicitados por comercial, etc)  </li>
                <li>Distancia que se encuentre el móvil y zonas que se derivan en automático.  </li>
                <li>Servicios de traslado que corresponda hacer inducción  </li>
              </ul>
              <br />
              <p>Siempre la prioridad es atender al cliente en la menor demora posible motivo por el cual el paso de asignación automática a manual debe fundarse solo en variables que beneficien la coordinación del servicio.</p>

            </div>
          </div>
        </div>
        <div className="tab-pane fade " id="nav-seguimiento" role="tabpanel" aria-labelledby="nav-seguimiento-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center px-3" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-contyseg-tab" data-bs-toggle="tab" data-bs-target="#nav-contyseg" type="button" role="tab" aria-controls="nav-contyseg" aria-selected="true">Contención y Seguimiento</button>
              <button class="nav-link sub" id="nav-llgdayfin-tab" data-bs-toggle="tab" data-bs-target="#nav-llgdayfin" type="button" role="tab" aria-controls="nav-llgdayfin" aria-selected="false">Control de Llegada y Finalización del Servicio</button>
            </div>
          </nav>
          <div class="tab-content text-start px-4 mt-4" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-contyseg" role="tabpanel" aria-labelledby="nav-contyseg-tab" tabindex="0">
              <p>
                El Operador de CAC durante la toma de servicio informará al cliente que se comunicarán para informarle el tiempo de demora.
                <br />
                Asignado el prestador, puede suceder que el cumpla o no la demora y deba extenderse por distintos motivos por lo que se aplicarán los siguientes criterios de seguimiento, información y contención:
                <br />
                Contención al cliente en servicios aun no derivados: si transcurrieron 45/60 minutos o más desde el ingreso del servicio a la pantalla, el Operador de Tráfico deberá contactar al cliente para informarle que una vez que tenga móvil para la asistencia se comunicará e indicará el tiempo de espera. Aprovechará el contacto para verificar que los registros estén completos y correctos y que cuenta con la información necesaria para la coordinación.
                <br />
                Información de la demora: al asignar móvil deberá informar al cliente el tiempo de arribo del mismo al origen, colocando la demora en la solapa y el registro correspondiente.
                <br />
                Cuando el operador detecte que la simultaneidad de servicios exceda la capacidad operativa de la base: el Supervisor/BO de Logística solicitará apoyo a otros agentes específicos para contactar al cliente, sea por contenciones o por controles de cierres.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-llgdayfin" role="tabpanel" aria-labelledby="nav-llgdayfin-tab" tabindex="0">
              <p>
                Es responsabilidad del operador controlar llegadas cuando se cumple el tiempo informado por el móvil y luego proceder con las finalizaciones de los servicios teniendo en cuenta lo siguiente:</p>
              <ul className='mt-2'>
                <li>Móvil con GAP: se puede ver la localización del móvil en el mapa del servicio correspondiente. Al derivarse un servicio bajo esta modalidad es el chofer quien asignara la llegada, cambiando el estado del servicio a “Llegada”. Si el móvil no pudiera efectuarlo informará al Operador de Tráfico, quien será responsable de asignarla manualmente. La misma operatoria se aplica para la finalización del servicio, debiendo utilizarse los motivos de cierre específicos para cada caso.   </li>
                <li>Móvil Ficticio (sin geolocalización): el servicio debe controlarse de manera manual (chat o llamada), tomando como referencia la demora informada por el chofer y realizar el control cuando se cumple la misma.   </li>
                <li>En caso de derivarse el servicio a una base con sistema antiguo, el mismo pasará a otra pantalla desde la cual deberá realizarse el seguimiento y cumplimiento de la demora estimada.   </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="tab-pane fade text-start px-4 mt-4 " id="nav-indgral" role="tabpanel" aria-labelledby="nav-indgral-tab" tabindex="0">
        <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <ul className='mt-3'>
            <li>Cuando se coordinen servicios con kilómetros que implique que el móvil salga de la zona del tráfico, se deberá intentar regresar el móvil cargado para optimizar el recurso. </li>
            <li>Cuando se presente la situación de tener varias solicitudes derivadas a un mismo prestador y no se pudieran asignar por no contar con más móviles ficticios nunca se deberá enviar el servicio a red nacional para asignarlo al prestador porque desaparece de la pantalla y peligra su falta de seguimiento y control. Los casos deberán quedar en el tráfico con la referencia correspondiente que indique qué prestador lo ha tomado, con qué demora, y asignarlo cuando se libere un ficticio.  </li>
            <li>Mientras que el sistema no permita programar, tampoco deberán quedar programados los servicios por referencias de operadores. Solo podrá programarse cuando quede con un prestador asignado o cuando se informen demoras condicionales sin horario especifico. </li>
            <li>En cuanto al pase de información de número de contacto del cliente hacia el prestador, se recomienda evitar facilitarlo, salvo que, el operador tenga en cuenta la complejidad del servicio y las circunstancias para coordinarlo sea necesario (Ej: ubicaciones en zonas rurales). Los prestadores que tengan acceso a Gap, Gap Lite y sistema antiguo (f8) tienen a su alcance los contactos y se pueden contactar directamente. </li>
          </ul>
        </div>
        <div className="tab-pane fade text-start px-4 mt-4" id="nav-atprest" role="tabpanel" aria-labelledby="nav-atprest-tab" tabindex="0">
        <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <p> Se designarán operadores para realizar la tarea de ATP, deberán loguearse con un interno especifico que se encuentre habilitado para recibir las llamadas correspondientes.
            <br />
            Entre las tareas correspondientes, se detallan las siguientes: </p>
          <ul className='mt-3'>
            <li>Gestionar consultas de prestadores y de operadores de otras áreas;  </li>
            <li>Administrar las anulaciones y consultas de demoras de servicios, con los operadores y/o directamente con los prestadores asignados al servicio; </li>
            <li>Realizar las contenciones e inducciones, cuando así se designase.   </li>
          </ul>
        </div>
        <div className="tab-pane fade text-start px-4 mt-4" id="nav-inyfinturn" role="tabpanel" aria-labelledby="nav-inyfinturn-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <p>
            Tanto al inicio como al final del día los Operadores de Tráfico deberán:</p>
          <ul className='mt-3'>
            <li>A primera hora de la mañana; chequear que no queden pendientes móviles activos y chats del turno anterior, comenzar a disparar las consultas y verificar las nóminas correspondientes, a fin de tener un panorama de disponibilidad con la que enfrentará el turno.    </li>
            <li>En cambios de turnos (medio día, intermedio, noche); pasar las novedades correspondientes de manera prolija al compañero/a que toma la posta y comienza a operar la zona, a fin de dejarlo informado de qué móviles tiene.  </li>
            <li>A última hora del día y a medida que se van cerrando los tráficos (exceptuando los que funcionen 24hs); archivar chats pendientes y dar de baja móviles, evitando que queden móviles activos durante la madrugada que en la práctica no están trabajando. </li>
          </ul>

        </div>
      </div>
    </div>
  )
}
