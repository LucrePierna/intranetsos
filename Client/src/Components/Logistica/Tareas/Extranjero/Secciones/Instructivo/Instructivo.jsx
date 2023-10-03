/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import imagenCostos from '../../../../Image/tierradelfuegocostos.png'
import imagenParalelo from '../../../../Image/Paralelo24Brasil.png'
import Brasil from './Formatos/brasil/Brasil';
import Solicitud from './Formatos/Solicitud/Solicitud';

export default function Instructivo() {

  useEffect(() => {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    const inicialTab = new bootstrap.Tab(document.querySelector('#nav-analisis-tab'));
    inicialTab.show();

  }, []);



  return (
    <div className='conteinerNav mt-5' >
      <nav className='navConteiner'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-analisis-tab" data-bs-toggle="tab" data-bs-target="#nav-analisis" type="button" role="tab" aria-controls="nav-analisis" aria-selected="false">Analisis del servicio</button>
          <button className="nav-link custom" id="nav-uruguay-tab" data-bs-toggle="tab" data-bs-target="#nav-uruguay" type="button" role="tab" aria-controls="nav-uruguay" aria-selected="false">Uruguay</button>
          <button className="nav-link custom" id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="false">Brasil</button>
          <button className="nav-link custom" id="nav-chile-tab" data-bs-toggle="tab" data-bs-target="#nav-chile" type="button" role="tab" aria-controls="nav-chile" aria-selected="false">Chile</button>
          <button className="nav-link custom" id="nav-paraguay-tab" data-bs-toggle="tab" data-bs-target="#nav-paraguay" type="button" role="tab" aria-controls="nav-paraguay" aria-selected="false">Paraguay</button>
          <button className="nav-link custom" id="nav-contraprestacion-tab" data-bs-toggle="tab" data-bs-target="#nav-contraprestacion" type="button" role="tab" aria-controls="nav-contraprestacion" aria-selected="false">Contraprestación</button>
          <button className="nav-link custom" id="nav-formatos-tab" data-bs-toggle="tab" data-bs-target="#nav-formatos" type="button" role="tab" aria-controls="nav-formatos" aria-selected="false">Formato</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto" id="nav-tabContent">
        <div className="tab-pane fade" id="nav-analisis" role="tabpanel" aria-labelledby="nav-analisis-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-particul-tab" data-bs-toggle="tab" data-bs-target="#nav-particul" type="button" role="tab" aria-controls="nav-particul" aria-selected="true">Particularidades</button>
              <button class="nav-link sub" id="nav-gralsvc-tab" data-bs-toggle="tab" data-bs-target="#nav-gralsvc" type="button" role="tab" aria-controls="nav-gralsvc" aria-selected="false">Generalidades al analizar servicio</button>
              <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Reintegro</button>
              <button class="nav-link sub" id="nav-extraccion-tab" data-bs-toggle="tab" data-bs-target="#nav-extraccion" type="button" role="tab" aria-controls="nav-extraccion" aria-selected="false">Extracción</button>
              <button class="nav-link sub" id="nav-coberturas-tab" data-bs-toggle="tab" data-bs-target="#nav-coberturas" type="button" role="tab" aria-controls="nav-coberturas" aria-selected="false">Coberturas</button>
              <button class="nav-link sub" id="nav-registro-tab" data-bs-toggle="tab" data-bs-target="#nav-registro" type="button" role="tab" aria-controls="nav-registro" aria-selected="false">Registro de Cobertura</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-particul" role="tabpanel" aria-labelledby="nav-particul-tab" tabindex="0">
              <p>A diferencia de la derivación de un servicio en Argentina, en el caso de servicios en el exterior será necesario contar con una cotización previo a efectuar la asignación al prestador. En todos los casos que se consulte cotización, la misma será manejada en dólares (u$s) o reales (r$). No es posible retornar al país cruzando por dos países del exterior, por ejemplo, el vehículo quedó en Brasil y quiere retornar por Uruguay para tomar Buquebus.</p>
            </div>
            <div class="tab-pane fade" id="nav-gralsvc" role="tabpanel" aria-labelledby="nav-gralsvc-tab" tabindex="0">
              <ul className='mt-3 listaGral'>
                <li>Ubicación de origen correcta y precisa. </li>
                <li>Los vehículos que retornan al país pueden viajar sin acompañantes en territorio extranjero (bajo las mismas condiciones que un traslado en Argentina) pero, sin excepción, debe esperar en la frontera titular o apoderado para completar los trámites aduaneros.</li>
                <li>Si estaba regresando del viaje o estaba iniciándolo al momento de la urgencia:<br />
                  Vehículos que se encuentran en localidades “destino”. Esto corre para vehículos que están en localidades donde el cliente se encuentra, siendo su destino (hospedado por el motivo que fuera, ej.: vacaciones) y deben ser trasladados dentro o fuera de la misma:</li>
                <ul className='listaGral'>
                  <li>En estas condiciones, el servicio se brindará con las particularidades habituales, solicitando cotización al prestador y brindando la cobertura en el extranjero según grilla de cada compañía.</li>
                </ul>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-reintegro" role="tabpanel" aria-labelledby="nav-reintegro-tab" tabindex="0">
              <ul className='mt-3 listaGral'>
                <li><b><u>Federación Patronal:</u></b> km recorridos por valor de km adicional, para mecánicas o movimientos locales el costo del servicio adicional.  </li>
                <li><b><u>Resto de Compañías:</u></b> se realiza el cálculo con planilla de reintegro </li>
              </ul>
              <p><b>Cuando se brinda la cobertura por reintegro siempre expresarse en pesos argentinos, NO convertir a moneda extranjera y respetando la cobertura según grilla.</b></p>
            </div>
            <div class="tab-pane fade" id="nav-extraccion" role="tabpanel" aria-labelledby="nav-extraccion-tab" tabindex="0">
              <ul className='mt-3 listaGral'>
                <li>Para las compañías que el ítem "extracción" no tiene tope, se brinda sin costo. </li>
                <li>Para las que tienen tope económico se cobra la totalidad de la extracción. </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-coberturas" role="tabpanel" aria-labelledby="nav-coberturas-tab" tabindex="0">
              <ul className='mt-3 listaGral'>
                <li>Si el cliente tiene cobertura en kilómetros, se respeta los kms recorridos. </li>
                <li>Si tiene cobertura en dinero, se transfiere al cliente la totalidad de la cotización con kms vacíos incluidos. </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-registro" role="tabpanel" aria-labelledby="nav-registro-tab" tabindex="0">
              {/* ...FORMATO AUTOCMPLETAR.... */}
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-uruguay" role="tabpanel" aria-labelledby="nav-uruguay-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-terrestre-tab" data-bs-toggle="tab" data-bs-target="#nav-terrestre" type="button" role="tab" aria-controls="nav-terrestre" aria-selected="true">Terrestre</button>
              <button class="nav-link sub" id="nav-fluvial-tab" data-bs-toggle="tab" data-bs-target="#nav-fluvial" type="button" role="tab" aria-controls="nav-fluvial" aria-selected="false">Fluvial</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-terrestre" role="tabpanel" aria-labelledby="nav-terrestre-tab" tabindex="0">
              <ul className='listaGral'>
                <h1><u>Puntos importantes.</u></h1>
                <li>Origen en Uruguay.</li>
                <li>Destino final en Argentina.</li>
                <li>Paso fronterizo más próximo.</li>
                <li>Estado del paso y horarios para cruzar la frontera.</li>
                <li>Cliente debe acompañar el traslado.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul className='listaGral'>
                <h1><u>Pasos fronterizos:</u></h1>
                <li>Fray Bentos - Gualeguaychú.</li>
                <li>Paysandú - Colon.</li>
                <li>Salto Grande - Concordia.</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-fluvial" role="tabpanel" aria-labelledby="nav-fluvial-tab" tabindex="0">
              <h1 className='mt-3 fw-bold'>Los traslados se realizan por medio de Buque-Bus</h1>
              <ul className='listaGral'>
                <h1><u>Puntos importantes:</u></h1>
                <li>Horario de salida en puerto y dársena.</li>
                <li>Horario de llegada a destino en Pto. Madero.</li>
                <li>El vehículo debe estar 2hs antes del horario de salida.</li>
                <li>Cliente debe acompañar el traslado.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul className='listaGral'>
                <h1><u>Puertos:</u></h1>
                <li>Colonia Sacramento (Acepta vehículos con ruedas que no giren, cliente debe consultar con puerto).</li>
                <li>Montevideo.</li>
                <li>Puerto Piriápolis.</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="tab-pane fade" id="nav-brasil" role="tabpanel" aria-labelledby="nav-brasil-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-mapa-tab" data-bs-toggle="tab" data-bs-target="#nav-mapa" type="button" role="tab" aria-controls="nav-mapa" aria-selected="true">Mapa</button>
              <button class="nav-link sub" id="nav-coordinacion-tab" data-bs-toggle="tab" data-bs-target="#nav-coordinacion" type="button" role="tab" aria-controls="nav-coordinacion" aria-selected="false">Coordinación de servicio</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active mt-4" id="nav-mapa" role="tabpanel" aria-labelledby="nav-mapa-tab" tabindex="0">
              <h1>Se debe confirmar con el cliente que el origen sea por debajo del paralelo 24. <b>Si esta por arriba del paralelo 24 no cuenta con servicio</b></h1>
              <div className='m-auto px-5 h-50 w-50 mt-5'>
                <img src={imagenParalelo} alt="mapaParalelo24" className='responsiveImgGeneral' />
              </div>
            </div>
            <div class="tab-pane fade" id="nav-coordinacion" role="tabpanel" aria-labelledby="nav-coordinacion-tab" tabindex="0">
              <ul className='listaGral'>
                <h1><u>Puntos importantes:</u></h1>
                <li>Origen del servicio.</li>
                <li>Paso fronterizo más próximo.</li>
                <li>Destino final en caso de ir hasta Argentina.</li>
                <li>Dejar registro de la cotización en reales al día de la fecha: <br />
                  <a href="https://www.bna.com.ar/Personas" target='_blank'><button type="button" class="btn btn-danger mt-3">Cotización Divisa</button></a>
                </li>
                <li>Confirmar el servicio al prestador de Brasil, vía e-mail adjuntando la planilla con los datos del servicio <br />
                  <a href="https://redsos.sharepoint.com/:x:/r/sites/SGC/_layouts/15/Doc.aspx?sourcedoc=%7B47D48EF1-5CBC-4214-A314-1E45CA0C0361%7D&file=FL-08%20Red%20Nacional%20-%20Planilla%20de%20Cierre%20de%20Servicio%20-%20Brasil%2CRev04.xlsx&action=default&mobileredirect=true" target='_blank'><button type="button" class="btn btn-danger mt-3">Planilla</button></a>
                </li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-chile" role="tabpanel" aria-labelledby="nav-chile-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-local-tab" data-bs-toggle="tab" data-bs-target="#nav-local" type="button" role="tab" aria-controls="nav-local" aria-selected="true">Local</button>
              <button class="nav-link sub" id="nav-argentina-tab" data-bs-toggle="tab" data-bs-target="#nav-argentina" type="button" role="tab" aria-controls="nav-argentina" aria-selected="false">Hasta frontera</button>
              <button class="nav-link sub" id="nav-tdfuego-tab" data-bs-toggle="tab" data-bs-target="#nav-tdfuego" type="button" role="tab" aria-controls="nav-tdfuego" aria-selected="false">Tierra del Fuego</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-local" role="tabpanel" aria-labelledby="nav-local-tab" tabindex="0">
              <h1><u>Traslado local en Chile</u></h1>
              <h1>Se debe confirmar origen y destino, solicitar cotización y pedir autorización en caso de haber kilómetros vacíos.</h1>
              <a href="https://www.bna.com.ar/Personas" target='_blank'><button type="button" class="btn btn-danger mt-3">Verificar dólar oficial</button></a>
            </div>
            <div class="tab-pane fade" id="nav-argentina" role="tabpanel" aria-labelledby="nav-argentina-tab" tabindex="0">
              <h1><u>Traslado de Chile hasta Argentina</u></h1>
              <h1><b>Tener en cuenta que los prestadores de Chile no cruzan hacia Argentina.</b> Se debe coordinar en dos partes:</h1>
              <ul className='mt-3'>
                <li>Origen en Chile hasta paso fronterizo más próximo</li>
                <li>Desde paso fronterizo a destino final en Argentina</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tdfuego" role="tabpanel" aria-labelledby="nav-tdfuego-tab" tabindex="0">
              <h1><u>Servicio que vienen hacia o desde Tierra del Fuego</u></h1>
              <p>Los prestadores que pueden cruzar por chile para dirigirse a Tierra del Fuego cuentan con un permiso especial y realizan trámites los cuales tienen costo y son a cargo del cliente.</p>
              <h3 className='fs-6 fw-bold'>LOS MONTOS SON A MODO DE EJEMPLO, SE DEBE SIEMPRE CONSULTAR CON EL PRESTADOR YA QUE LOS MISMOS PUEDEN VARIAR</h3>
              <img src={imagenCostos} alt="costosDeEjemplo" className='responsiveImgGeneral' />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-paraguay" role="tabpanel" aria-labelledby="nav-paraguay-tab" tabindex="0">
        </div>
        <div className="tab-pane fade" id="nav-contraprestacion" role="tabpanel" aria-labelledby="nav-contraprestacion-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-asistencia-tab" data-bs-toggle="tab" data-bs-target="#nav-asistencia" type="button" role="tab" aria-controls="nav-asistencia" aria-selected="true">Asistencia</button>
              <button class="nav-link sub" id="nav-tipos-tab" data-bs-toggle="tab" data-bs-target="#nav-tipos" type="button" role="tab" aria-controls="nav-tipos" aria-selected="false">Tipo de Prestaciones</button>
              <button class="nav-link sub" id="nav-andisp-tab" data-bs-toggle="tab" data-bs-target="#nav-andisp" type="button" role="tab" aria-controls="nav-andisp" aria-selected="false">Análisis y Disponibilidad</button>
              <button class="nav-link sub" id="nav-calculos-tab" data-bs-toggle="tab" data-bs-target="#nav-calculos" type="button" role="tab" aria-controls="nav-calculos" aria-selected="false">Cálculos de Costos y Devolución</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-asistencia" role="tabpanel" aria-labelledby="nav-asistencia-tab" tabindex="0">
              <h1>La contraprestaciones son servicios solicitados por nuestros prestadores del extranjero a traves de correo electronico.</h1>
              <h1>El supervisor de turno asigna el tratamienco de la rpestacion a un Operador de Logistica, quien verificara el e-mail y realiza las siguientes tares:</h1>
              <ul className='mt-3 listaGral'>
                <li>Responder el correo informando se trabajara en el pedido y se enviara novedades.</li>
                <li>Cargar el servicio en el sistema con el radio correspondiente al pestador.</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tipos" role="tabpanel" aria-labelledby="nav-tipos-tab" tabindex="0">
              <h1><u>Dentro del territorio argentino</u></h1>
              <p>El operador consultará disponibilidad con los prestadores de la zona (ver instructivo de derivación).
                <br />
                Calculará el costo del servicio según la información de la grilla del prestador, es decir lo que tiene pactado. </p>
              <h1><u>En territorio extranjero</u></h1>
              <p>El operador consultará disponibilidad con los prestadores de la zona (ver instructivo de derivación).
                <br />
                De acuerdo a la cotización que indique el prestador calcular el 20% y agregar a la cotización final para pasar al prestador que solicita el servicio. </p>
            </div>
            <div class="tab-pane fade" id="nav-andisp" role="tabpanel" aria-labelledby="nav-andisp-tab" tabindex="0">
              <h1><u>Análisis</u></h1>
              <p>El operador verificará que el pedido enviado por el correo tenga los datos necesarios para coordinar el servicio. Estos son:</p>
              <ul className='mt-3 listaGral'>
                <li>Datos del titular.</li>
                <li>Datos del vehículo.</li>
                <li>Teléfono de contacto.</li>
                <li>Cantidad de pasajeros en el vehículo.</li>
                <li>Falla (avería o siniestro).</li>
                <li>Localización de origen y destino con precisión.</li>
              </ul>
              <h1><u>Disponibilidad</u></h1>
              <p>Se consultará la posibilidad de asistencia al servicio según protocolos general de la derivación.
                <br />
                A diferencia de los servicios normales, ante la falta de disponibilidad se podrá consultar fuera del radio de los 100 kilómetros vacíos. Los mismos entran dentro de la cotización que se va a informar al prestador extranjero.</p>
            </div>
            <div class="tab-pane fade" id="nav-calculos" role="tabpanel" aria-labelledby="nav-calculos-tab" tabindex="0">
              <h1><u>Cálculo de Costos</u></h1>
              <p><u>ORIGEN EN ARGENTINA</u>
                <br />
                El operador deberá ver en la grilla del cliente el radio de contraprestación correspondiente en el apartado “CONTRAPRESTACION”.
                <br />
                Deberá sumar los kilómetros recorridos por el cliente + los KMS vacíos del prestador y restar el RADIO DEL SERVICIO.
                <br />
                Una vez realizado el cálculo deberá sumar la movida (PRECIO POR SERVICIO) + IVA y el FE DE GESTION U$D 80 +IVA.
                <br />
                CALCULO FINAL =  Movida + km excedente + fee de gestión + IVA.  </p>
              <p><u>ORIGEN EN EL EXTRANJERO</u>
                <br />
                Se deberá ver en el radio de contraprestación correspondiente en el apartado “SERVICIO EN EL EXTERIOR”.
                <br />
                Es de suma importancia ver en la grilla los costos actualizados y solicitar autorización de los mismos.  </p>
              <h1><u>Devolución</u></h1>
              <p>El operador deber especificar vía mail la demora para cargar el vehículo y el costo final de la asistencia. Lugo aguardar la confirmación del pedido para así confirmar la asistencia a nuestro prestador y realizar la asignación de la base correspondiente.</p>
              <h1><u>IMPORTANTE</u></h1>
              <p>Nunca se deberá informar el código del servicio a nuestro prestador antes de la confirmación del pedido.</p>
            </div>
          </div>

        </div>
        <div className="tab-pane fade" id="nav-formatos" role="tabpanel" aria-labelledby="nav-formatos-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub" id="nav-solicitud-tab" data-bs-toggle="tab" data-bs-target="#nav-solicitud" type="button" role="tab" aria-controls="nav-solicitud" aria-selected="false">Solicitud por e-mail o whatsapp</button>
              <button class="nav-link sub active" id="nav-formatobrasil-tab" data-bs-toggle="tab" data-bs-target="#nav-formatobrasil" type="button" role="tab" aria-controls="nav-formatobrasil" aria-selected="true">Formato Brasil</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-solicitud" role="tabpanel" aria-labelledby="nav-solicitud-tab" tabindex="0">
              <Solicitud />
            </div>
            <div class="tab-pane fade" id="nav-formatobrasil" role="tabpanel" aria-labelledby="nav-formatobrasil-tab" tabindex="0">
             <Brasil />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
