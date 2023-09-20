/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'


export default function Pesados() {

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
          <button className="nav-link custom" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="false">Descripción</button>
          <button className="nav-link custom" id="nav-generalidades-tab" data-bs-toggle="tab" data-bs-target="#nav-generalidades" type="button" role="tab" aria-controls="nav-generalidades" aria-selected="false">Generalidades</button>
          <button className="nav-link custom" id="nav-tareaop-tab" data-bs-toggle="tab" data-bs-target="#nav-tareaop" type="button" role="tab" aria-controls="nav-tareaop" aria-selected="false">Tareas del Operador</button>
          <button className="nav-link custom" id="nav-etapas-tab" data-bs-toggle="tab" data-bs-target="#nav-etapas" type="button" role="tab" aria-controls="nav-etapas" aria-selected="false">Etapas</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto " id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <p>Son servicios llamados “Especiales” que se coordinan para vehículos pesados destinados a la carga y el transporte en los cuales se deberá buscar un prestador en la zona con mejor disponibilidad y capacidad para trasladar la categoría de la unidad. </p>
        </div>

        <div className="tab-pane fade" id="nav-generalidades" role="tabpanel" aria-labelledby="nav-generalidades-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-gener-tab" data-bs-toggle="tab" data-bs-target="#nav-gener" type="button" role="tab" aria-controls="nav-gener" aria-selected="true">Generalidades</button>
              <button class="nav-link sub" id="nav-difter-tab" data-bs-toggle="tab" data-bs-target="#nav-difter" type="button" role="tab" aria-controls="nav-difter" aria-selected="false">Diferencia de Terminales</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-gener" role="tabpanel" aria-labelledby="nav-gener-tab" tabindex="0">
              <p>
                En este caso, para la derivación de camiones (pesados) por Compañía, los pasos a seguir son similares al de Terminales de camiones; con la diferencia que aquí no opera el área de SETA. Por lo tanto, es el mismo operador de logística el encargado de comenzar y culminar la derivación del mismo.
              </p>
              <h1><u>Las Compañías de Seguros que poseen radios para camiones son:</u></h1>
              <ul className='list-unstyled'>
                <li>Nación Seguros. </li>
                <li>Provincias Seguros. </li>
                <li>Santander, a través de Meridional Seguros.  </li>
                <li>Zúrich. </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-difter" role="tabpanel" aria-labelledby="nav-difter-tab" tabindex="0">
              <p>El destino del servicio NO necesariamente debe ser el Concesionario, sino que el cliente puede optar por el domicilio o algún otro lugar, siempre teniendo en cuenta la grilla de cada Compañía.
                <br />
                Poseen distintas modalidades de servicios sin cargo, como así también varían sus vigencias.
                <br />
                Tienen topes de kilómetros libres a recorrer (según cada Compañía), siendo que una vez excedida esa distancia el cliente deberá abonar adicional de kilómetros.
                <br />
                Cada Compañía tiene un radio de cobertura en servicio adicional y un precio de kilómetro excedente que puede variar entre una y otra.
                <br />
                Todos poseen diferente modalidad en el pago en los peajes y tope de extracción.
                <br />
                Generalmente todas las compañías requieren que la unidad se encuentre descargada/ desenganchada para poder ser trasladada.
                <br />
                Cada compañía posee determinadas exclusiones para los servicios, como así también cuenta con coberturas de Servicios Especiales y Asistencia al viajero entre otras.  </p >
            </div >
          </div >
        </div >

        <div className="tab-pane fade" id="nav-tareaop" role="tabpanel" aria-labelledby="nav-tareaop-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            </div>
          </nav>
          <h1><u>Lectura completa del servicio.</u></h1>
          <br />
          <p>  Previo a realizar la derivación del servicio, deberá leer y analizar todo dato y registro del mismo, asegurando que se contemplen todas las particulares que pudieran existir (dimensiones, estado del vehículo, ruedas y ejes, carga, forma de pago, cobertura, cantidad de personas, etc. (Ver análisis del servicio*).</p>
          <br />
          <h1><u>Llamado de contención al cliente.</u></h1>
          <br />
          <p>En este tipo de servicios el llamado de contención se realizará solo si el servicio/operadores de SETA lo requieran ya que en estos casos solo SETA se mantendrá en contacto con el cliente, chofer o persona que este junto al vehículo. En este llamado el operador informara el estado o situación del servicio actualizando demoras u horarios de programación para cargar la unidad.</p>
          <br />
          <h1><u>Prioridades de derivación y motivos de rechazo </u></h1>
          <br />
          <p>Se deberán respetar las prioridades establecidas en sistema respecto a los prestadores para la derivación y registrarse los motivos de rechazo correctos cuando esto sea necesario. </p>
        </div>

        <div className="tab-pane fade text-start py-2" id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-analisis-tab" data-bs-toggle="tab" data-bs-target="#nav-analisis" type="button" role="tab" aria-controls="nav-analisis" aria-selected="true">Analisis del Servicio</button>
              <button class="nav-link sub" id="nav-busqprest-tab" data-bs-toggle="tab" data-bs-target="#nav-busqprest" type="button" role="tab" aria-controls="nav-busqprest" aria-selected="false">Busqueda del Prestador</button>
              <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Servicio Por Reintegro</button>
              <button class="nav-link sub" id="nav-programacion-tab" data-bs-toggle="tab" data-bs-target="#nav-programacion" type="button" role="tab" aria-controls="nav-programacion" aria-selected="false">Programación del Servicio</button>
              <button class="nav-link sub" id="nav-trbjoprest-tab" data-bs-toggle="tab" data-bs-target="#nav-trbjoprest" type="button" role="tab" aria-controls="nav-trbjoprest" aria-selected="false">Trabajo del Prestador</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-analisis" role="tabpanel" aria-labelledby="nav-analisis-tab" tabindex="0">
              <p>Una vez marcado y previo a la aceptación del servicio, el operador de Logística de terminales deberá realizar un análisis del mismo, con el objetivo de asegurarse la correcta información registrada en el Sistema ASTOR e inmediatamente aceptarlo o rechazarlo (en este último caso, siempre deberá contar con autorización de un Back Office o Supervisor). Al aceptarlo, inmediatamente y sin demora, deberá comenzar a trabajar en el servicio.  </p>
              <h1><u>Puntos a Analizar</u></h1>
              <p><u>Datos del vehículo</u> (tipo: modelo, chasis, tractor, combi, auto, moto etc), cinturones de seguridad, dimensiones (alto, largo, ancho, ruedas: si giran, si tiene duales, eje simple o doble.), verificar si posee semirremolque o acoplado, también el peso y naturaleza de la carga (en este último caso el cliente debe desenganchar y descargar SI O SI ) ACLARACION: las excepciones se realizan solo en casos puntuales autorizados por supervisor o área de seta y debe estar las fotos de unidad cargada en ASTOR o registro del pedido de las misma). (Medidas exteriores Mercedes Benz y Smart, Iveco Dimensiones, Grilla de Dimensiones, Cinturones Utilitarios,) </p>
              <p><u>Correcta aplicación del convenio, ver grilla:</u> la unidad tiene que estar dentro del período de garantía, y el destino siempre debe ser a un concesionario más próximo o a domicilio (para este último caso; solo de ser fin de semana, feriados o fuera de horarios del concesionario) y si fuera conveniente llevarlo a ese destino. Sino en caso de corresponder debe estar cargado el servicio de:  Asistencia al viajero  o salvo registro de autorización de un supervisor). </p>
              <p><u>Traslados de vehículos sin acompañantes:</u> deberá detallarse; autorización, tarjeta verde, llaves, nombre de la persona que entrega la unidad, dirección de destino, nombre del responsable que recibe la unidad, teléfonos de contacto, horarios del concesionario (este último caso viaje solo o no, debe estar esa información), </p>
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
          </div>
        </div>
      </div >
    </div >
  )
}
