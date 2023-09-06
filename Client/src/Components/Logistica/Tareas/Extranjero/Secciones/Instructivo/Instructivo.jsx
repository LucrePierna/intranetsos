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
    <div className='d-flex align-items-start flex-colum bg-secondary rounded justify-content-center mx-auto h-50 w-50 mt-5 ' >
      <nav className='d-flex align-items-start flex-colum'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-uruguay-tab" data-bs-toggle="tab" data-bs-target="#nav-uruguay" type="button" role="tab" aria-controls="nav-uruguay" aria-selected="false">Uruguay</button>
          <button className="nav-link custom" id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="false">Brasil</button>
          <button className="nav-link custom" id="nav-chile-tab" data-bs-toggle="tab" data-bs-target="#nav-chile" type="button" role="tab" aria-controls="nav-chile" aria-selected="false">Chile</button>
          <button className="nav-link custom" id="nav-contraprestacion-tab" data-bs-toggle="tab" data-bs-target="#nav-contraprestacion" type="button" role="tab" aria-controls="nav-contraprestacion" aria-selected="false">Contraprestacion</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
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
                <h4>Puntos importantes.</h4>
                <li>Origen en Uruguay.</li>
                <li>Destino final en Argentina.</li>
                <li>Paso fronterizo mas próximo.</li>
                <li>Estado del paso y horarios para cruzar la frontera.</li>
                <li>Cliente debe acompañar el trasaldo.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul>
                <h4>Pasos fronterizos: </h4>
                <li>Fray Bentos - Gualeguaychú</li>
                <li>Paysandú - Colon</li>
                <li>Salto grande - concordia</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-Fluvial" role="tabpanel" aria-labelledby="nav-Fluvial-tab" tabindex="0">
              <h5 className='mt-3 fs-4 fw-bold'>Los traslados se realizan por medio de Buque-Bus</h5>
              <ul>
                <h4>Puntos importantes:</h4>
                <li>Horario de salida en puerto y dársena.</li>
                <li>Horario de llegada a destino en Pto. Madero.</li>
                <li>El vehiculo debe estar 2hs antes del horario de salida.</li>
                <li>Cliente debe acompañar el trasaldo.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul>
                <h4>Puertos: </h4>
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
            <div class="tab-pane fade show active" id="nav-mapa" role="tabpanel" aria-labelledby="nav-mapa-tab" tabindex="0">
              <h3>Se debe confirmar con el cliente que el origen sea por debajo del paralelo 24. <b>Si esta por arriba del paralelo 24 no cuenta con servicio</b></h3>
              <img src={imagenParalelo} alt="mapaParalelo24" width={450} height={350} />
            </div>
            <div class="tab-pane fade" id="nav-coordinacion" role="tabpanel" aria-labelledby="nav-coordinacion-tab" tabindex="0">
              <ul>
                <h4>Puntos importantes:</h4>
                <li>Origen del servicio.</li>
                <li>Paso fronterizo más próximo</li>
                <li>Destino final en caso de ir hasta Argentina</li>
                <li>Dejar registro de la cotización en reales al día de la fecha: <br />
                  <a href="https://www.bna.com.ar/Personas" target='_blank'><button>Cotización Divisa</button></a>
                </li>
                <li>Confirmar el servicio al prestador de Brasil, vía e-mail adjuntando la planilla con los datos del servicio <br />
                  <a href="https://redsos.sharepoint.com/:x:/r/sites/SGC/_layouts/15/Doc.aspx?sourcedoc=%7B47D48EF1-5CBC-4214-A314-1E45CA0C0361%7D&file=FL-08%20Red%20Nacional%20-%20Planilla%20de%20Cierre%20de%20Servicio%20-%20Brasil%2CRev04.xlsx&action=default&mobileredirect=true" target='_blank'><button>Planilla</button></a>
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
              <h2>Traslado local en Chile</h2>
              <h4>Se debe confirmar origen y destinon, solicitar cotización y pedir autorizacion en caso de haber kilómetros vacíos.</h4>
              <a href="https://www.bna.com.ar/Personas" target='_blank'><button>Verificar dólar oficial</button></a>
            </div>
            <div class="tab-pane fade" id="nav-argentina" role="tabpanel" aria-labelledby="nav-argentina-tab" tabindex="0">
              <h2>Traslado de Chile hasta Argentina</h2>
              <h3><b>Tener en cuenta que los prestadores de Chile no cruzan hacia Argentina.</b> Se debe coordinar en dos partes:</h3>
              <ul>
                <li>Origen en Chile hasta paso fronterizo más próximo</li>
                <li>Desde paso frotnerizo a destino final en Argentina</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tdfuego" role="tabpanel" aria-labelledby="nav-tdfuego-tab" tabindex="0">
              <h2>Servicio que vienen hacia o desde Tierra del Fuego</h2>
              <p>Los prestadores que pueden cruzar por chile para dirigirse a Tierra del Fuego cuentan con un permiso especial y realizan trámites los cuales tienen costo y son a cargo del cliente.</p>
              <img src={imagenCostos} alt="costosDeEjemplo" height={350} width={450} />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-contraprestacion" role="tabpanel" aria-labelledby="nav-contraprestacion-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-asistencia-tab" data-bs-toggle="tab" data-bs-target="#nav-asistencia" type="button" role="tab" aria-controls="nav-asistencia" aria-selected="true">Asistencia</button>
              <button class="nav-link sub" id="nav-tipos-tab" data-bs-toggle="tab" data-bs-target="#nav-tipos" type="button" role="tab" aria-controls="nav-tipos" aria-selected="false">Procedimiento</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-asistencia" role="tabpanel" aria-labelledby="nav-asistencia-tab" tabindex="0">
              <h3>La contraprestaciones son servicios solicitados por nuestros prestadores del extranjero a traves de correo electronico.</h3>
              <h6>El supervisor de turno asigna el tratamienco de la rpestacion a un Operador de Logistica, quien verificara el e-mail y realiza las siguientes tares:</h6>
              <ul>
                <li>Responder el correo informando se trabajara en el pedido y se enviara novedades.</li>
                <li>Cargar el servicio en el sistema con el radio correspondiente al pestador.</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tipos" role="tabpanel" aria-labelledby="nav-tipos-tab" tabindex="0">
              ul
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
