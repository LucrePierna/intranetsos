/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import imagenCostos from '../../../../Image/tierradelfuegocostos.png'
import imagenParalelo from '../../../../Image/Paralelo24Brasil.png'
import Brasil from './brasil/Brasil';

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
    const inicialTab = new bootstrap.Tab(document.querySelector('#nav-uruguay-tab'));
    inicialTab.show();

  }, []);



  return (
    <div className='conteinerNav mt-5' >
      <nav className='navConteiner'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-uruguay-tab" data-bs-toggle="tab" data-bs-target="#nav-uruguay" type="button" role="tab" aria-controls="nav-uruguay" aria-selected="false">Uruguay</button>
          <button className="nav-link custom" id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="false">Brasil</button>
          <button className="nav-link custom" id="nav-chile-tab" data-bs-toggle="tab" data-bs-target="#nav-chile" type="button" role="tab" aria-controls="nav-chile" aria-selected="false">Chile</button>
          <button className="nav-link custom" id="nav-contraprestacion-tab" data-bs-toggle="tab" data-bs-target="#nav-contraprestacion" type="button" role="tab" aria-controls="nav-contraprestacion" aria-selected="false">Contraprestación</button>
        </div>
      </nav>
      <div className="tab-content mt-3 m-auto px-5 fs-5" id="nav-tabContent">
        <div className="tab-pane fade" id="nav-uruguay" role="tabpanel" aria-labelledby="nav-uruguay-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-terrestre-tab" data-bs-toggle="tab" data-bs-target="#nav-terrestre" type="button" role="tab" aria-controls="nav-terrestre" aria-selected="true">Terrestres</button>
              <button class="nav-link sub" id="nav-Fluvial-tab" data-bs-toggle="tab" data-bs-target="#nav-Fluvial" type="button" role="tab" aria-controls="nav-Fluvial" aria-selected="false">Fluvial</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-terrestre" role="tabpanel" aria-labelledby="nav-terrestre-tab" tabindex="0">
              <ul>
                <h3>Puntos importantes.</h3>
                <li>Origen en Uruguay.</li>
                <li>Destino final en Argentina.</li>
                <li>Paso fronterizo mas próximo.</li>
                <li>Estado del paso y horarios para cruzar la frontera.</li>
                <li>Cliente debe acompañar el trasaldo.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul>
                <h3>Pasos fronterizos: </h3>
                <li>Fray Bentos - Gualeguaychú</li>
                <li>Paysandú - Colon</li>
                <li>Salto grande - concordia</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-Fluvial" role="tabpanel" aria-labelledby="nav-Fluvial-tab" tabindex="0">
              <h3 className='mt-3 fs-4 fw-bold'>Los traslados se realizan por medio de Buque-Bus</h3>
              <ul>
                <h3>Puntos importantes:</h3>
                <li>Horario de salida en puerto y dársena.</li>
                <li>Horario de llegada a destino en Pto. Madero.</li>
                <li>El vehiculo debe estar 2hs antes del horario de salida.</li>
                <li>Cliente debe acompañar el trasaldo.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul>
                <h3>Puertos: </h3>
                <li>Colonia Sacramento (Acepta vehiculos con ruedas que no giren, cliente debe consultar con puerto)</li>
                <li>Montevideo</li>
                <li>Puerto Piriápolis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="nav-brasil" role="tabpanel" aria-labelledby="nav-brasil-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-mapa-tab" data-bs-toggle="tab" data-bs-target="#nav-mapa" type="button" role="tab" aria-controls="nav-mapa" aria-selected="true">Mapa</button>
              <button class="nav-link sub" id="nav-coordinacion-tab" data-bs-toggle="tab" data-bs-target="#nav-coordinacion" type="button" role="tab" aria-controls="nav-coordinacion" aria-selected="false">Coordinación de servicio</button>
              <button class="nav-link sub" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Formato de servicio</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active mt-4" id="nav-mapa" role="tabpanel" aria-labelledby="nav-mapa-tab" tabindex="0">
              <h3>Se debe confirmar con el cliente que el origen sea por debajo del paralelo 24. <b>Si esta por arriba del paralelo 24 no cuenta con servicio</b></h3>
              <div className='m-auto px-5 h-50 w-50 mt-5'>
                <img src={imagenParalelo} alt="mapaParalelo24" className='responsiveImgGeneral' />
              </div>
            </div>
            <div class="tab-pane fade" id="nav-coordinacion" role="tabpanel" aria-labelledby="nav-coordinacion-tab" tabindex="0">
              <ul>
                <h3>Puntos importantes:</h3>
                <li>Origen del servicio.</li>
                <li>Paso fronterizo más próximo</li>
                <li>Destino final en caso de ir hasta Argentina</li>
                <li>Dejar registro de la cotización en reales al día de la fecha: <br />
                  <a href="https://www.bna.com.ar/Personas" target='_blank'><button type="button" class="btn btn-danger mt-3">Cotización Divisa</button></a>
                </li>
                <li>Confirmar el servicio al prestador de Brasil, vía e-mail adjuntando la planilla con los datos del servicio <br />
                  <a href="https://redsos.sharepoint.com/:x:/r/sites/SGC/_layouts/15/Doc.aspx?sourcedoc=%7B47D48EF1-5CBC-4214-A314-1E45CA0C0361%7D&file=FL-08%20Red%20Nacional%20-%20Planilla%20de%20Cierre%20de%20Servicio%20-%20Brasil%2CRev04.xlsx&action=default&mobileredirect=true" target='_blank'><button type="button" class="btn btn-danger mt-3">Planilla</button></a>
                </li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>
            </div>
            <div class="tab-pane fade " id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">
              <h3>Formato de servicio</h3>
              <Brasil />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-chile" role="tabpanel" aria-labelledby="nav-chile-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-local-tab" data-bs-toggle="tab" data-bs-target="#nav-local" type="button" role="tab" aria-controls="nav-local" aria-selected="true">Local</button>
              <button class="nav-link sub" id="nav-argentina-tab" data-bs-toggle="tab" data-bs-target="#nav-argentina" type="button" role="tab" aria-controls="nav-argentina" aria-selected="false">Hasta frontera</button>
              <button class="nav-link sub" id="nav-tdfuego-tab" data-bs-toggle="tab" data-bs-target="#nav-tdfuego" type="button" role="tab" aria-controls="nav-tdfuego" aria-selected="false">Tierra del fuego</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-local" role="tabpanel" aria-labelledby="nav-local-tab" tabindex="0">
              <h3>Traslado local en Chile</h3>
              <h3>Se debe confirmar origen y destinon, solicitar cotización y pedir autorizacion en caso de haber kilómetros vacíos.</h3>
              <a href="https://www.bna.com.ar/Personas" target='_blank'><button type="button" class="btn btn-danger mt-3">Verificar dólar oficial</button></a>
            </div>
            <div class="tab-pane fade" id="nav-argentina" role="tabpanel" aria-labelledby="nav-argentina-tab" tabindex="0">
              <h3>Traslado de Chile hasta Argentina</h3>
              <h3><b>Tener en cuenta que los prestadores de Chile no cruzan hacia Argentina.</b> Se debe coordinar en dos partes:</h3>
              <ul className='mt-3'>
                <li>Origen en Chile hasta paso fronterizo más próximo</li>
                <li>Desde paso frotnerizo a destino final en Argentina</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tdfuego" role="tabpanel" aria-labelledby="nav-tdfuego-tab" tabindex="0">
              <h3>Servicio que vienen hacia o desde Tierra del Fuego</h3>
              <p>Los prestadores que pueden cruzar por chile para dirigirse a Tierra del Fuego cuentan con un permiso especial y realizan trámites los cuales tienen costo y son a cargo del cliente.</p>
              <img src={imagenCostos} alt="costosDeEjemplo" className='responsiveImgGeneral' />
            </div>
          </div>
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
              <h3>La contraprestaciones son servicios solicitados por nuestros prestadores del extranjero a traves de correo electronico.</h3>
              <h3>El supervisor de turno asigna el tratamienco de la rpestacion a un Operador de Logistica, quien verificara el e-mail y realiza las siguientes tares:</h3>
              <ul className='mt-3'>
                <li>Responder el correo informando se trabajara en el pedido y se enviara novedades.</li>
                <li>Cargar el servicio en el sistema con el radio correspondiente al pestador.</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tipos" role="tabpanel" aria-labelledby="nav-tipos-tab" tabindex="0">
              <h3>Dentro del territorio argentino </h3>
              <p>El operador consultará disponibilidad con los prestadores de la zona (ver instructivo de derivación).
                <br />
                Calculará el costo del servicio según la información de la grilla del prestador, es decir lo que tiene pactado. </p>
              <h3>En territorio extranjero</h3>
              <p>El operador consultará disponibilidad con los prestadores de la zona (ver instructivo de derivación).
                <br />
                De acuerdo a la cotización que indique el prestador calcular el 20% y agregar a la cotización final para pasar al prestador que solicita el servicio. </p>
            </div>
            <div class="tab-pane fade" id="nav-andisp" role="tabpanel" aria-labelledby="nav-andisp-tab" tabindex="0">
              <h3>Análisis</h3>
              <p>El operador verificará que el pedido enviado por el correo tenga los datos necesarios para coordinar el servicio. Estos son:</p>
              <ul className='mt-3'>
                <li>Datos del titular</li>
                <li>Datos del vehículo</li>
                <li>Teléfono de contacto</li>
                <li>Cantidad de pasajeros en el vehículo</li>
                <li>Falla (avería o siniestro)</li>
                <li>Localización de origen y destino con precisión</li>
              </ul>
              <h3>Disponibilidad</h3>
              <p>Se consultará la posibilidad de asistencia al servicio según protocolos general de la derivación.
                <br />
                A diferencia de los servicios normales, ante la falta de disponibilidad se podrá consultar fuera del radio de los 100 kilómetros vacíos. Los mismos entran dentro de la cotización que se va a informar al prestador extranjero.</p>
            </div>
            <div class="tab-pane fade" id="nav-calculos" role="tabpanel" aria-labelledby="nav-calculos-tab" tabindex="0">
              <h3>Cálculo de Costos</h3>

              <p>ORIGEN EN ARGENTINA
                <br />
                El operador deberá ver en la grilla del cliente el radio de contraprestación correspondiente en el apartado “CONTRAPRESTACION”.
                <br />
                Deberá sumar los kilómetros recorridos por el cliente + los KMS vacíos del prestador y restar el RADIO DEL SERVICIO.
                <br />
                Una vez realizado el cálculo deberá sumar la movida (PRECIO POR SERVICIO) + IVA y el FE DE GESTION U$D 80 +IVA.
                <br />
                CALCULO FINAL =  Movida + km excedente + fee de gestion + IVA  </p>
              <p>Origen en el extranjero
                <br />
                Se deberá ver en el radio de contraprestación correspondiente en el apartado “SERVICIO EN EL EXTERIOR”.
                <br />
                Es de suma importancia ver en la grilla los costos actualizados y solicitar autorizacion de los mismos.  </p>
              <h3>Devolución</h3>
              <p>El operador deberá especificar vía mail la demora para cargar el vehículo y el costo final de la asistencia. Lugo aguardar la confirmación del pedido para así confirmar la asistencia a nuestro prestador y realizar la asignación de la base correspondiente.</p>
              <h3>IMPORTANTE</h3>
              <p>Nunca se deberá informar el código del servicio a nuestro prestador antes de la confirmación del pedido.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
