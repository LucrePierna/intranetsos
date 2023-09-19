/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'


export default function Terminales() {

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
          <button className="nav-link custom" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="false">Descripción de la Tarea</button>
          <button className="nav-link custom" id="nav-general-tab" data-bs-toggle="tab" data-bs-target="#nav-general" type="button" role="tab" aria-controls="nav-general" aria-selected="false">Generalidades</button>
          <button className="nav-link custom" id="nav-tareaop-tab" data-bs-toggle="tab" data-bs-target="#nav-tareaop" type="button" role="tab" aria-controls="nav-tareaop" aria-selected="false">Tareas del Operador</button>
          <button className="nav-link custom" id="nav-etapas-tab" data-bs-toggle="tab" data-bs-target="#nav-etapas" type="button" role="tab" aria-controls="nav-etapas" aria-selected="false">Etapas</button>
        </div>
      </nav>
      <div className="tab-content px-5 fs-5" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <p>Son servicios llamados “Especiales”. Aplica a aquellas terminales con las que se haya acordado este tipo de asistencia. La solicitud de asistencia es procesada por el CAT, los operadores SETA, u operadores específicos destinados a tal función (en caso de Mercedes Benz). Los pedidos ingresaran por: Comunicación telefónica o correo electrónico pedido por la Terminal. </p>
        </div>
        <div className="tab-pane fade m-auto" id="nav-general" role="tabpanel" aria-labelledby="nav-general-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <h3><ul>El Operador de Logística deberá buscar un prestador según el tipo de vehículo a asistir:</ul></h3>
          <p>Moto / Liviano / Liviano Excedido / Liviano Especial / Pesado categoría 1 / Pesado categoría 2 / Pesado categoría 3 / Bus</p>
          <h5>Aplica a todas aquellas Terminales Automotrices, siendo actualmente:</h5>
          <ul className='list-unstyled'>
            <li>Mercedes Benz (autos, vans , sprinter, camiones) </li>
            <li>Iveco (camiones) </li>
            <li>Volkswagen (camiones o autos pedidos por la terminal) </li>
            <li>Ducati  </li>
            <li>Audi </li>
            <li>BMW (autos y motos) </li>
            <li>LAND ROVER </li>
            <li>Smart </li>
            <li>Volvo </li>
            <li>Mini </li>
            <li>Toyota </li>
            <li>Jaguar </li>
            <li>La Emilia (motos: Benelli , Keeway, Suzuki Sym ) </li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-tareaop" role="tabpanel" aria-labelledby="nav-tareaop-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <h3><u>Lectura completa del servicio.</u></h3>
          <br />
          <p>  Previo a realizar la derivación del servicio, deberá leer y analizar todo dato y registro del mismo, asegurando que se contemplen todas las particulares que pudieran existir (dimensiones, estado del vehículo, ruedas y ejes, carga, forma de pago, cobertura, cantidad de personas, etc. (Ver análisis del servicio*).</p>
          <br />
          <h3><u>Llamado de contención al cliente.</u></h3>
          <br />
          <p>En este tipo de servicios el llamado de contención se realizará solo si el servicio/operadores de SETA lo requieran ya que en estos casos solo SETA se mantendrá en contacto con el cliente, chofer o persona que este junto al vehículo. En este llamado el operador informara el estado o situación del servicio actualizando demoras u horarios de programación para cargar la unidad.</p>
          <br />
          <h3><u>Prioridades de derivación y motivos de rechazo </u></h3>
          <br />
          <p>Se deberán respetar las prioridades establecidas en sistema respecto a los prestadores para la derivación y registrarse los motivos de rechazo correctos cuando esto sea necesario. </p>
        </div>
        <div className="tab-pane fade" id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-analisis-tab" data-bs-toggle="tab" data-bs-target="#nav-analisis" type="button" role="tab" aria-controls="nav-analisis" aria-selected="true">Analisis del Servicio</button>
              <button class="nav-link sub" id="nav-busqprest-tab" data-bs-toggle="tab" data-bs-target="#nav-busqprest" type="button" role="tab" aria-controls="nav-busqprest" aria-selected="false">Busqueda del Prestador</button>
              <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Servicio Por Reintegro</button>
              <button class="nav-link sub" id="nav-programacion-tab" data-bs-toggle="tab" data-bs-target="#nav-programacion" type="button" role="tab" aria-controls="nav-programacion" aria-selected="false">Programación del Servicio</button>
              <button class="nav-link sub" id="nav-trbjoprest-tab" data-bs-toggle="tab" data-bs-target="#nav-trbjoprest" type="button" role="tab" aria-controls="nav-trbjoprest" aria-selected="false">Trabajo del Prestador</button>
              <button class="nav-link sub" id="nav-parking-tab" data-bs-toggle="tab" data-bs-target="#nav-parking" type="button" role="tab" aria-controls="nav-parking" aria-selected="false">Vehiculo en Parking</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-analisis" role="tabpanel" aria-labelledby="nav-analisis-tab" tabindex="0">
              <p>Una vez marcado y previo a la aceptación del servicio, el operador de Logística de terminales deberá realizar un análisis del mismo, con el objetivo de asegurarse la correcta información registrada en el Sistema ASTOR e inmediatamente aceptarlo o rechazarlo (en este último caso, siempre deberá contar con autorización de un Back Office o Supervisor). Al aceptarlo, inmediatamente y sin demora, deberá comenzar a trabajar en el servicio.  </p>
              <h5><u>Puntos a Analizar:</u></h5>
              <p><u>Datos del vehículo</u> (tipo: modelo, chasis, tractor, combi, auto, moto etc), cinturones de seguridad, dimensiones (alto, largo, ancho, ruedas: si giran, si tiene duales, eje simple o doble.), verificar si posee semirremolque o acoplado, también el peso y naturaleza de la carga (en este último caso el cliente debe desenganchar y descargar SI O SI ) ACLARACION: las excepciones se realizan solo en casos puntuales autorizados por supervisor o área de seta y debe estar las fotos de unidad cargada en ASTOR o registro del pedido de las misma).</p>
              <p><u>Correcta aplicación del convenio, ver grilla:</u> la unidad tiene que estar dentro del período de garantía, y el destino siempre debe ser a un concesionario más próximo o a domicilio (para este último caso; solo de ser fin de semana, feriados o fuera de horarios del concesionario) y si fuera conveniente llevarlo a ese destino. Sino en caso de corresponder debe estar cargado el servicio de:  Asistencia al viajero (ver punto: q )  o salvo registro de autorización de un supervisor). </p>
              <p><u>Traslados de vehículos sin acompañantes:</u> deberá detallarse; autorización, tarjeta verde, llaves, nombre de la persona que entrega la unidad, dirección de destino, nombre del responsable que recibe la unidad, teléfonos de contacto, horarios del concesionario (este último caso viaje solo o no, debe estar esa información). </p>
              <p><u>Autorizaciones</u> de Área S.E.T.A o Supervisores en situaciones especiales (por ejemplo: adicionales, pagos, traslados de vehículos con carga, traslado a domicilio etc ) </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-busqprest" role="tabpanel" aria-labelledby="nav-busqprest-tab" tabindex="0">
              <p>Una vez ya realizado el previo análisis del servicio y/o completado los datos faltantes (por medio: de un llamado de contención, por consulta con área de S.E.T.A o/u con operador que cargo el servicio). El operador de logística de terminales deberá proceder a la búsqueda para la asignación de un prestador adecuado para dicho servicio. </p>
              <p><u>Realizar lectura de grilla del prestador</u>, ya que algunos poseen Tarifas Pactadas para pesados, otros cotizan en el momento (ver en grilla de prestador: en Observaciones). En este último caso, cuando prestador informa la cotización, consultar si la misma es precio final o si tiene el IVA incluido (Previamente antes, enviar fotos y dimensiones de unidad para que prestador pueda confirmar, que puede realizar la asistencia con su móvil y pasar cotización correcta de acuerdo al móvil que enviara).  </p>
              <p><u>Enviar vía mail al prestador</u> los datos del servicio, fotos y dimensiones de la unidad, solo en caso de camiones (con copia a derivación) y confirmar recepción con el prestador. Siempre dejar cargado en el servicio, las fotos de la unidad y captura de pantalla del envío del mail al prestador de consulta de disponibilidad y cotización para realizar asistencia con la respuesta de la confirmación del mismo. </p>
              <p><u>En caso de derivación de servicios de camiones, pedir autorización de la cotización a:</u> Supervisores de turno o Ejecutivo de Prestadores, dejando registro de la cotización informada por el prestador y quien Autoriza la misma. <br />
              En estos casos, se debe cargar el producto en el servicio, de la siguiente manera: </p>
              <ul className='list-unstyled'>
                <li>1- Se cargará este producto para cualquier servicio cuyo costo sea autorizado por fuera de la grilla del prestador.</li>
                <li>2- El producto a cargar es " MOVIDA-AUT.ESPECIAL" </li>
                <li>3- Cantidad de producto = 1 </li>
                <li>4- IMP CORREGIDO: Se verifica situación fiscal del prestador y en el caso de ser responsable inscripto poner importe sin IVA. </li>
              </ul>
              <p><u>En caso de no tener disponibilidad de prestadores de pesados, ver y consultar con prestadores del recorrido o de la zona la posibilidad de TERCERIZAR LA ASISTENCIA. </u></p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-reintegro" role="tabpanel" aria-labelledby="nav-reintegro-tab" tabindex="0">
              <p>En caso de no tener disponibilidad de prestadores de pesados o de disponibilidad de tercerizar, se evalúa la opción de brindar el servicio por Reintegro, los cuales se dan de manera:  EXCEPCIONAL, SIEMPRE CON AUTORIZACION DE UN SUPERVISOR.<br />
                Dar aviso del estado del servicio o de alguna particularidad (dejando registro correspondiente de lo informado, en servicio), al operador de S.E.T.A de turno para su posterior seguimiento (hasta que llega al concesionario).</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-programacion" role="tabpanel" aria-labelledby="nav-programacion-tab" tabindex="0">
              <p>En caso de falta de disponibilidad, o por horarios de los concesionarios o por pedido del cliente. Se podrán programar los servicios, dejando claramente indicado el motivo en una referencia de derivación (Previamente visto y autorizado por un Supervisor o área de S.E.T.A).</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-trbjoprest" role="tabpanel" aria-labelledby="nav-trbjoprest-tab" tabindex="0">
              <p>(sacar cardan. Dar aire a la unidad, uso de carros, hora de trabajo/espera, extracción). El prestador al momento de cotizar deberá incluir en la misma cualquier tipo de estos trabajos extras, e informar si la cotización que pasa es con o sin I.V.A. incluido. En caso de llegar al lugar y verificar que tiene que realizar algunas de las intervenciones mencionadas anteriormente, tiene que comunicarnos e informarnos antes de realizarla, para verificar grilla, cobertura o informar a área S.E.T.A de situación.</p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-parking" role="tabpanel" aria-labelledby="nav-parking-tab" tabindex="0">
              <p>Para la coordinación del traslado de la unidad en garantía, el vehículo no tiene que estar en parking. Cliente debe sacar de esa situación el vehículo (parking). <br/>
              Se le recomienda a cliente llamar al concesionario (se puede ayudar a cliente verificando el número de nuestro listado de concesionarios autorizados más próximo y/o transferir el llamado).   </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-motos" role="tabpanel" aria-labelledby="nav-motos-tab" tabindex="0">
              <p>En particular el operador deberá verificar que el prestador posea los sunchos y equipamiento necesario para poder asegurar la moto en la plancha. Se deberá enviar el formulario de carga y descarga “FL-10 Red Nacional – Traslado BMW / Ducati”. (FORMULARIO TRASLADO BMW poner link)</p>
              <h3><u>MOTOS BMW</u></h3>
              <ul className='list-unstyled'>
                <li>-El derivador debe enviar por mail el “formulario de traslado” al prestador. </li>
                <li>-El prestador debe tomar fotografías y video (en lo posible) de la unidad. </li>
                <li>-Prestador deberá completar formulario con el cliente en la  entrega y con el concesionario en el destino. </li>
              </ul>
              <h3><u>MOTOS DUCATI</u></h3>
              <ul className='list-unstyled'>
                <li>-No se envía formulario al prestador </li>
                <li>-El prestador debe tomar fotografías y video (en lo posible) de la unidad. </li>
                <li>-Se debe hacer firmar a cliente, en la planilla de solicitud de servicio las condiciones en que entrega su unidad al chofer de la grúa. Tanto así también en destino a la persona del concesionario encargada de recibir la unidad, como recibe la misma. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
