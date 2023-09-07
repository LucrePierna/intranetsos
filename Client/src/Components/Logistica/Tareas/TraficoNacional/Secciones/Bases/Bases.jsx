/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'

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
    <div className='conteinerNav mt-5'>
      <nav className='navConteiner'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link custom active" id="nav-bahia-tab" data-bs-toggle="tab" data-bs-target="#nav-bahia" type="button" role="tab" aria-controls="nav-bahia" aria-selected="true">Bahia Blanca</button>
          <button class="nav-link custom" id="nav-costa-tab" data-bs-toggle="tab" data-bs-target="#nav-costa" type="button" role="tab" aria-controls="nav-costa" aria-selected="false">Costa</button>
          <button class="nav-link custom" id="nav-cuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-cuyo" type="button" role="tab" aria-controls="nav-cuyo" aria-selected="false">Cuyo</button>
          <button class="nav-link custom" id="nav-noa-tab" data-bs-toggle="tab" data-bs-target="#nav-noa" type="button" role="tab" aria-controls="nav-noa" aria-selected="false">NOA</button>
          <button class="nav-link custom" id="nav-patagonia-tab" data-bs-toggle="tab" data-bs-target="#nav-patagonia" type="button" role="tab" aria-controls="nav-patagonia" aria-selected="false">Patagonia</button>
          <button class="nav-link custom" id="nav-stafe-tab" data-bs-toggle="tab" data-bs-target="#nav-stafe" type="button" role="tab" aria-controls="nav-stafe" aria-selected="false">Santa Fe</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-bahia" role="tabpanel" aria-labelledby="nav-bahia-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-centerr" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-orgznbb-tab" data-bs-toggle="tab" data-bs-target="#nav-orgznbb" type="button" role="tab" aria-controls="nav-orgznbb" aria-selected="true">Organización de la Zona</button>
              <button class="nav-link sub" id="nav-consultabb-tab" data-bs-toggle="tab" data-bs-target="#nav-consultabb" type="button" role="tab" aria-controls="nav-consultabb" aria-selected="false">Consideraciones Generales</button>
              <button class="nav-link sub" id="nav-inducbb-tab" data-bs-toggle="tab" data-bs-target="#nav-inducbb" type="button" role="tab" aria-controls="nav-inducbb" aria-selected="false">Zona de Induccion</button>
              <button class="nav-link sub" id="nav-dificilbb-tab" data-bs-toggle="tab" data-bs-target="#nav-dificilbb" type="button" role="tab" aria-controls="nav-dificilbb" aria-selected="false">Zona de Dificil Acceso</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-orgznbb" role="tabpanel" aria-labelledby="nav-orgznbb-tab" tabindex="0">
              <p>Bahía Blanca locales <br></br>
                Bahía Blanca interior (este, oeste, norte y sur)  </p>
            </div>
            <div class="tab-pane fade" id="nav-consultabb" role="tabpanel" aria-labelledby="nav-consultabb-tab" tabindex="0">
              <p>Tener en cuenta que para aquellos servicios con kilómetros primero se debe consultar a los prestadores eventuales de la zona.
                <li>Por instrucción del Área de Prestadores la Base 11679 - Giberti Omar tiene prioridad para los servicios con kilómetros, sobre los otros móviles de Bahía. El móvil 705 solo realiza traslados de este tipo, mientras que el 706 también realiza estos servicios, pero dentro de la provincia, ya que no tiene habilitado el permiso para salir.</li>
                <li>Tener en cuenta que el móvil 1095 correspondiente a la Base 13077 - Briseña Matias, actualmente sale de la localidad de Punta Alta.</li>
                <li>En aquellos casos de falta de disponibilidad en la ciudad de Bahía Blanca, tener en consideración al prestador de Punta Alta de la Base 11513 - Logística Puerto Rosales, ya que realiza servicios locales en dicha zona.</li>
                <li>La ciudad de Bahía Blanca cuenta con un móvil de mecánica.</li>
                <li>No todos los móviles pueden dirigirse a la zona de Tornquist, debido a las exigencias de la caminera.</li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-inducbb" role="tabpanel" aria-labelledby="nav-inducbb-tab" tabindex="0">
              <p>Con respecto a las inducciones a mecánica, deberán realizarse dentro de la ciudad de Bahía Blanca.</p>
            </div>
            <div class="tab-pane fade" id="nav-dificilbb" role="tabpanel" aria-labelledby="nav-dificilbb-tab" tabindex="0">
              <p>A continuación, se mencionan las zonas a las cuales no se ingresa, ni cobrando adicional, en estos casos el cliente debe sacarlo por sus medios: </p>
              <li>Laguna de chasco   </li>
              <li>Campos o estancias en la zona de Cabildo – Paso Mayor – Estomba – Ruta 72: El Faro / Gil   </li>
              <li>En la zona de Pedro Luro por ordenanza municipal no se ingresa a caminos de ripio cuando llueve.   </li>
              <li>Ruta 76, desde Felipe Sola hacia la derecha, en dirección a la Ruta 33   </li>
              <li>También hay zonas donde se ingresa cobrando adicional de difícil acceso:  </li>
              <li>Ruta 67, en el tramo desde Coronel Suarez hasta General La Madrid, ya que el camino es de ripio y se encuentra en mal estado. En estos casos los prestadores para ir dan la vuelta por camino de asfalto paralelo, aproximadamente recorren 155km lineales.   </li>
              <li>Balneario Sauce Grande: el prestador informa si tiene costo o no, dependerá si llovió en la zona.   </li>
              <li>Tener en cuenta en servicios cuyo origen o destino sea GUAMINI y tengan que circular sobre ruta 60 en sentido este a oeste, deben ingresar por Ruta 33, ya que la Ruta 85 se considera intransitable.  </li>
              <li>Los servicios que tengan como origen o destino Huanguelen y Coronel Suarez, tener en cuenta que deben tomar la Ruta 60 y luego la Ruta 85, ya que el camino Inter localidad se encuentra intransitable.  </li>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-costa" role="tabpanel" aria-labelledby="nav-costa-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-orgzncosta-tab" data-bs-toggle="tab" data-bs-target="#nav-orgzncosta" type="button" role="tab" aria-controls="nav-orgzncosta" aria-selected="true">Subdivision de la Zona</button>
              <button class="nav-link sub" id="nav-automaticosta-tab" data-bs-toggle="tab" data-bs-target="#nav-automaticosta" type="button" role="tab" aria-controls="nav-automaticosta" aria-selected="false">Zona en Automatico</button>
              <button class="nav-link sub" id="nav-induccosta-tab" data-bs-toggle="tab" data-bs-target="#nav-induccosta" type="button" role="tab" aria-controls="nav-induccosta" aria-selected="false">Zonas de Inducción</button>
              <button class="nav-link sub" id="nav-particularidadcosta-tab" data-bs-toggle="tab" data-bs-target="#nav-particularidadcosta" type="button" role="tab" aria-controls="nav-particularidadcosta" aria-selected="false">Particularidades del Tráfico</button>
              <button class="nav-link sub" id="nav-dificilcosta-tab" data-bs-toggle="tab" data-bs-target="#nav-dificilcosta" type="button" role="tab" aria-controls="nav-dificilcosta" aria-selected="false">Zonas de Dificil Acceso</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-orgzncosta" role="tabpanel" aria-labelledby="nav-orgzncosta-tab" tabindex="0">
              <ul className='text-start'>
                <li>Ruta 2 Sur (R2S)</li>
                <li>Costa atlántica (CA)</li>
                <li>Ruta 2 Norte (R2N)</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-automaticosta" role="tabpanel" aria-labelledby="nav-automaticosta-tab" tabindex="0">
              <p>Dentro de las posibilidades, se trabajarán los servicios de la ciudad de Mar del Plata de manera automática.   </p>
            </div>
            <div class="tab-pane fade" id="nav-induccosta" role="tabpanel" aria-labelledby="nav-induccosta-tab" tabindex="0">
              <p>Las inducciones para el envío de un móvil mecánico se realizarán dentro de la ciudad de Mar del Plata.</p>
            </div>
            <div class="tab-pane fade" id="nav-particularidadcosta" role="tabpanel" aria-labelledby="nav-particularidadcosta-tab" tabindex="0">
              <li>Los servicios correspondientes a las bases 8722 – Vicente Roberto German y 8673 – Vázquez Edgardo serán derivados directamente sin previa consulta con la demora establecida en el sistema, siempre que se encuentren dentro de la ciudad de Mar del Plata.</li>
              <li>El prestador Vicente cuenta con móviles taller que realizan servicios de mecánica especializados y venta de batería. También realizan “fuera de cochera”, consultar siempre disponibilidad de la base para este servicio.</li>
              <li>Con la finalidad de disminuir la demora de los traslados en Mar del Plata, se recomienda dejar los móviles con geolocalización para estos servicios, es decir dentro de un radio de 10km.   </li>
            </div>
            <div class="tab-pane fade" id="nav-dificilcosta" role="tabpanel" aria-labelledby="nav-dificilcosta-tab" tabindex="0">
              <p>En épocas de temporales de lluvia, se deberá consultar a los móviles el acceso a la zona de campos. También se deberán consultar el acceso a Chapadmalal o zona sur de Mar del Plata (Bº Acantilados), ya que muchas calles son de ripio. </p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-cuyo" role="tabpanel" aria-labelledby="nav-cuyo-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-orgzncuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-orgzncuyo" type="button" role="tab" aria-controls="nav-orgzncuyo" aria-selected="true">Organización de la Base</button>
              <button class="nav-link sub" id="nav-automaticuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-automaticuyo" type="button" role="tab" aria-controls="nav-automaticuyo" aria-selected="false">Zonas en Automatico</button>
              <button class="nav-link sub" id="nav-induccuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-induccuyo" type="button" role="tab" aria-controls="nav-induccuyo" aria-selected="false">Zonas de Inducción</button>
              <button class="nav-link sub" id="nav-particmza-tab" data-bs-toggle="tab" data-bs-target="#nav-particmza" type="button" role="tab" aria-controls="nav-particmza" aria-selected="false">Particularidades en Mendoza</button>
              <button class="nav-link sub" id="nav-particsj-tab" data-bs-toggle="tab" data-bs-target="#nav-particsj" type="button" role="tab" aria-controls="nav-particsj" aria-selected="false">Particularidades en San Juan</button>
              <button class="nav-link sub" id="nav-fronterizocuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-fronterizocuyo" type="button" role="tab" aria-controls="nav-fronterizocuyo" aria-selected="false">Pasos Fronterizos</button>
              <button class="nav-link sub" id="nav-dificilcuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-dificilcuyo" type="button" role="tab" aria-controls="nav-dificilcuyo" aria-selected="false">Zonas de Dificil Acceso</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-orgzncuyo" role="tabpanel" aria-labelledby="nav-orgzncuyo-tab" tabindex="0">
              <p>
                En caso de haber más de un colaborador, se recomienda subdividir por zonas
                <h5>Mendoza:  </h5>
                Tener en cuenta las siguientes regiones:
                <li>GRAN MENDOZA: CDAD DE MZA (MZA) – GODOY CRUZ (GCZ) – GUAYMALLEN (GYN) – LAS HERAS (LHS) – MAIPU (MPU) – LAVALLE (LAV) – LUJAN DE CUYO (LDC1)  </li>
                <li>ZONA ESTE: SAN MARTIN – RIVADAVIA – JUNIN – SANTA ROSA – LA DORMIDA – LA PAZ  </li>
                <li>VALLE DE UCO: TUNUYAN – TUPUNGATO – SAN CARLOS  </li>
                <li>ZONA SUR: SAN RAFAEL (SRL 1/SRL2/SRL3) – GRAL ALVEAR – MALARGUE  </li><br></br>
                <h5>San Juan: </h5>
                (SJ1 - SJ2 - SJ3)
              </p>
            </div>
            <div class="tab-pane fade" id="nav-automaticuyo" role="tabpanel" aria-labelledby="nav-automaticuyo-tab" tabindex="0">
              <p>
                Actualmente se utiliza en automático la zona de Gran Mendoza. Fuera de esta región se usa en aquellos casos donde el móvil este cercano y sea detectado por el SAAM para la asignación. Las demás derivaciones se hacen de manera manual.<br></br>
                También puede utilizarse en automático la zona de San Rafael, siempre que la disponibilidad lo permita.<br></br>
                Por el momento, San Juan se trabaja de manera manual.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-induccuyo" role="tabpanel" aria-labelledby="nav-induccuyo-tab" tabindex="0">
              <p>
                Se realizarán las inducciones a mecánica en la zona de Gran Mendoza.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-particmza" role="tabpanel" aria-labelledby="nav-particmza-tab" tabindex="0">
              <li>La prioridad para servicios en Gran Mendoza la tienen los móviles contratados fijos y en segundo lugar los móviles propios. De acuerdo a la disponibilidad, se consultará con las bases eventuales.</li>
              <li>Desde Potrerillos hasta el paso internacional Cristo Redentor se considera zona de alta montaña.</li>
              <li>Se prioriza hacer los servicios con kilómetros con móviles propios.</li>
              <li>Los servicios locales programados se coordinan con la disponibilidad del momento, pero aquellos que sean con kilómetros deben quedar coordinados desde el turno anterior.</li>
              <li>En cuanto a los servicios en zona este, primero consultar con los prestadores eventuales de la zona. En caso de no contar con disponibilidad o que las demoras sean elevadas, se podrá utilizar un móvil de Mendoza siempre que no afecte las demoras de la zona.</li>
            </div>
            <div class="tab-pane fade" id="nav-particsj" role="tabpanel" aria-labelledby="nav-particsj-tab" tabindex="0">
              <li>Para las mecánicas y los traslados locales en San Juan (Ciudad de San Juan, Villa Krause, Rivadavia, Sta. Lucia, Chimbas) tiene la prioridad la Base 8015 – Martínez.</li>
              <li>Desde la localidad de Talacasto hacia Jachal al norte y hacia Calingasta al oeste, se considera camino de alta montaña, de acuerdo a lo pactado en las grillas de los prestadores.</li>
              <li>Para aquellos traslados que se debe cruzar el límite interprovincial debemos tener en cuenta que solo el prestador Base 13235 - Scardino o Base 13360 - Torres cuentan con los permisos para realizarlo.   </li>

            </div>
            <div class="tab-pane fade" id="nav-fronterizocuyo" role="tabpanel" aria-labelledby="nav-fronterizocuyo-tab" tabindex="0">
              <p>
                Para aquellos servicios que tengan su origen en Chile o en el paso fronterizo Cristo Redentor, hay prestadores que lo realizan. Algunos llegan a la aduana argentina o a la chilena, desentendiendo el caso.
                <br></br>
                En caso de haber costos extras por los gastos aduaneros o por esperar la realización de determinados tramites, serán informados por los encargados de las bases.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-dificilcuyo" role="tabpanel" aria-labelledby="nav-dificilcuyo-tab" tabindex="0">
              <p>
                Tener en cuenta que hay caminos hacia el sur de la provincia de Mendoza que son considerados de difícil acceso, en algunas ocasiones ingresan cobrando, pero en otras directamente no ingresan. Consultar previamente con los prestadores de la zona.
              </p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-noa" role="tabpanel" aria-labelledby="nav-noa-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-orgznnoa-tab" data-bs-toggle="tab" data-bs-target="#nav-orgznnoa" type="button" role="tab" aria-controls="nav-orgznnoa" aria-selected="true">Organización de la Base</button>
              <button class="nav-link sub" id="nav-vaciosnoa-tab" data-bs-toggle="tab" data-bs-target="#nav-vaciosnoa" type="button" role="tab" aria-controls="nav-vaciosnoa" aria-selected="false">Servicios con KM Vacios</button>
              <button class="nav-link sub" id="nav-considnoa-tab" data-bs-toggle="tab" data-bs-target="#nav-considnoa" type="button" role="tab" aria-controls="nav-considnoa" aria-selected="false">Consideraciones Generales</button>
              <button class="nav-link sub" id="nav-tucumannoa-tab" data-bs-toggle="tab" data-bs-target="#nav-tucumannoa" type="button" role="tab" aria-controls="nav-tucumannoa" aria-selected="false">Tucuman</button>
              <button class="nav-link sub" id="nav-saltanoa-tab" data-bs-toggle="tab" data-bs-target="#nav-saltanoa" type="button" role="tab" aria-controls="nav-saltanoa" aria-selected="false">Salta</button>
              <button class="nav-link sub" id="nav-jujuynoa-tab" data-bs-toggle="tab" data-bs-target="#nav-jujuynoa" type="button" role="tab" aria-controls="nav-jujuynoa" aria-selected="false">Jujuy</button>
              <button class="nav-link sub" id="nav-inducnoa-tab" data-bs-toggle="tab" data-bs-target="#nav-inducnoa" type="button" role="tab" aria-controls="nav-inducnoa" aria-selected="false">Zonas de Inducción</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-orgznnoa" role="tabpanel" aria-labelledby="nav-orgznnoa-tab" tabindex="0">
              <p>
                En caso de haber más de un colaborador, se recomienda subdividir por zonas:<br></br>
                Tucumán<br></br>
                Salta y Jujuy
              </p>
            </div>
            <div class="tab-pane fade" id="nav-vaciosnoa" role="tabpanel" aria-labelledby="nav-vaciosnoa-tab" tabindex="0">
              <p>
                En aquellos traslados donde la base se encuentre a más de 100km vacíos, se deberá tener en cuenta las siguientes consideraciones:
                <li>En primera instancia ofrecer reintegro.</li>
                <li>Como alternativa, programar sin horario ni día a confirmar. El mismo se coordinará los días de baja demanda de la zona de acuerdo a la disponibilidad. </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-considnoa" role="tabpanel" aria-labelledby="nav-considnoa-tab" tabindex="0">
              <p>
                Para aquellos servicios que se encuentran fuera de los centros urbanos, se priorizará realizarlos con prestadores eventuales, evitando sacar móviles propios y perder la disponibilidad.
                <br></br>
                Además, cuando la coordinación del servicio lo requiera, se podrá hacer uso del servicio de guarda de vehículos para ser entregados los días con baja demanda (por lo general, a partir del día miércoles).
              </p>
            </div>
            <div class="tab-pane fade" id="nav-tucumannoa" role="tabpanel" aria-labelledby="nav-tucumannoa-tab" tabindex="0">
              <p>
                Tener en cuenta las siguientes particularidades al momento de trabajar esta zona:
                <li>Los servicios correspondientes a San Miguel de Tucumán y alrededores, en un radio de 10km, serán trabajados de manera automática.</li>
                <li>Aquellos servicios que se encuentren en la zona sur de Tucumán (ruta38, ruta157, ruta307) serán consultados con prioridad a la Base eventual Azul Emergencias. En caso de que no puedan realizarlo, según disponibilidad se enviara un móvil de San Miguel, reintegro o programación.   </li>
                <li>Cuando el traslado sea de la región de Tafí del Valle, se consultará con prioridad a la Base eventual Azul Emergencias, para mantener la disponibilidad de móviles propios en San Miguel.   </li>
                <li>Los móviles de mecánica 4198 y 4061 se turnarán los fines de semana, para cubrir la guardia. Además, estarán disponibles 24hs. Todos los días al ingresa al turno debemos verificar la cantidad de servicios realizados por cada móvil para podes asignarlos de manera equitativa.  </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-saltanoa" role="tabpanel" aria-labelledby="nav-saltanoa-tab" tabindex="0">
              <p>
                Tener en cuenta las siguientes particularidades al momento de trabajar esta zona:
                <li>El móvil 4393 correspondiente a la Base 13450 Pedrazzoli Martin (contratado fijo), los días lunes deberá realizar como mínimo 6 (seis) servicios locales, ya que cuenta con tarifa especial para esos días.   </li>
                <li>Los traslados en la zona de Cafayate, Payogasta y alrededores, suelen tener adicional por camino de difícil acceso. Por lo general, estos servicios son realizados por la Base 12746 Remolques el Vasco, que cuenta con móviles propios. Como alternativa, consultar con el móvil propio 695 de la Base 12488 Maine Marcelo.  </li>
                <li>La zona en cuestión no cuenta con móvil de mecánica, este servicio lo realizan los móviles de traslado.   </li>
                <li>Cuando el traslado sea desde la zona de San Antonio de los Cobres, se deberá tener en cuenta que a partir del cruce de la Ruta 51 y la Ruta 40 hacia el oeste se considera camino de difícil acceso. De acuerdo a la disponibilidad y a las consideraciones del operador encargado del tráfico, se recomienda programar estos servicios.   </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-jujuynoa" role="tabpanel" aria-labelledby="nav-jujuynoa-tab" tabindex="0">
              <p>
                Tener en cuenta las siguientes particularidades al momento de trabajar esta zona:
                <li>Aquellos vehículos que se encuentren sobre la Ruta Provincial 73, deberán ser retirados por sus medios de esa zona (hasta la localidad de Humahuaca o hasta la Ruta 9), ya que ningún prestador ingresa por el estado del camino.   </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-inducnoa" role="tabpanel" aria-labelledby="nav-inducnoa-tab" tabindex="0">
              <p>
                Se tomará para inducción la zona correspondiente a San miguel de Tucumán. Incluyendo Yerba buena, Banda del Rio Sali, Las talitas, Manantiales, San Pablo, Tafí Viejo y demás zonas que se encuentren dentro del radio de 10km.
              </p>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="nav-patagonia" role="tabpanel" aria-labelledby="nav-patagonia-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-divpat-tab" data-bs-toggle="tab" data-bs-target="#nav-divpat" type="button" role="tab" aria-controls="nav-divpat" aria-selected="true">Subdivisión de Zonas</button>
              <button class="nav-link sub" id="nav-autopat-tab" data-bs-toggle="tab" data-bs-target="#nav-autopat" type="button" role="tab" aria-controls="nav-autopat" aria-selected="false">Zona en Automatico</button>
              <button class="nav-link sub" id="nav-inducpat-tab" data-bs-toggle="tab" data-bs-target="#nav-inducpat" type="button" role="tab" aria-controls="nav-inducpat" aria-selected="false">Zonas de Inducción</button>
              <button class="nav-link sub" id="nav-dificilpat-tab" data-bs-toggle="tab" data-bs-target="#nav-dificilpat" type="button" role="tab" aria-controls="nav-dificilpat" aria-selected="false">Zonas de Dificil Acceso</button>
              <button class="nav-link sub" id="nav-particpat-tab" data-bs-toggle="tab" data-bs-target="#nav-particpat" type="button" role="tab" aria-controls="nav-particpat" aria-selected="false">Particularidades del Tráfico</button>
              <button class="nav-link sub" id="nav-fronterapat-tab" data-bs-toggle="tab" data-bs-target="#nav-fronterapat" type="button" role="tab" aria-controls="nav-fronterapat" aria-selected="false">Pasos Fronterizos</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-divpat" role="tabpanel" aria-labelledby="nav-divpat-tab" tabindex="0">
              <p>
                <li>Neuquén:  Aquellos que se encuentran en Neuquén, Cipolletti, Rincón de los Sauces, Añelo, Plotter, Centenario, General Roca, Villa Regina, Huego, Zapala, Plaza Huincul, Cutral Co, Choele Choel, San Martin de los Andes, Junín de los Andes y demás ciudades aledañas. (NQN1 - NQN2 – NQN3 – NQN4 - RN1)  </li>
                <li>Rio Negro: Servicios que se encuentren en Bariloche, Villa la Angostura, El Bolsón, Epuyen. (RN2 RN3 SCB1 SCB2)  </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-autopat" role="tabpanel" aria-labelledby="nav-autopat-tab" tabindex="0">
              <p>
                Los llamados para las inducciones de mecánica deberán ser realizados tanto en la ciudad de Neuquén como también en la de Bariloche. En esta última se cuenta con un móvil taller propio.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-inducpat" role="tabpanel" aria-labelledby="nav-inducpat-tab" tabindex="0">
              <p>
                Los llamados para las inducciones de mecánica deberán ser realizados tanto en la ciudad de Neuquén como también en la de Bariloche. En esta última se cuenta con un móvil taller propio.                 </p>
            </div>
            <div class="tab-pane fade" id="nav-dificilpat" role="tabpanel" aria-labelledby="nav-dificilpat-tab" tabindex="0">
              <p>
                Se debe tener en cuenta que las zonas de El Bolsón, Epuyen, San Martin de los Andes y Junín de los Andes tienen caminos de difícil acceso, esto debe ser consultado con los prestadores de estas bases.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-particpat" role="tabpanel" aria-labelledby="nav-particpat-tab" tabindex="0">
              <p>
                <li>Aquellos servicios que sean con gran cantidad de kilómetros y se encuentren por fuera de los centros urbanos, en lo posible se deben coordinar con prestadores eventuales evitando perder la disponibilidad de las ciudades.   </li>
                <li>Si el servicio se encuentra en yacimientos petroleros se deberá informar dicha referencia a los prestadores, para que se indique si tiene algún costo extra por encontrarse en camino de difícil acceso. Se recomienda hacer este tipo de derivaciones con prestadores eventuales.   </li>
                <li>Los servicios que se encuentren en la zona de 25 de Mayo o zona sur de Epuyen, dentro de lo posible, se intentara coordinar con el tráfico, ya que no cuentan con disponibilidad de prestadores desde Red Nacional.   </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-fronterapat" role="tabpanel" aria-labelledby="nav-fronterapat-tab" tabindex="0">
              <p>El tráfico de Patagonia tiene contacto con los siguientes pasos fronterizos:
                <li>Paso Cardenal Samore (Villa la angostura),   </li>
                <li>Paso Hua hum (San Martin de los andes),   </li>
                <li>Paso Tromen (ruta 60),   </li>
                <li>Paso Icamla (Villa Pehuenia),   </li>
                <li>Paso pinco hachado (las lajas).   </li>
                Dependiendo los casos, algunos prestadores llegan hasta aduana argentina y otros cruzan aduana chilena también. Los costos por gastos aduaneros o kilómetros de difícil acceso serán comunicados por cada base.               </p>
            </div>
          </div>
        </div>

        <div class="tab-pane fade" id="nav-stafe" role="tabpanel" aria-labelledby="nav-stafe-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-orgznstafe-tab" data-bs-toggle="tab" data-bs-target="#nav-orgznstafe" type="button" role="tab" aria-controls="nav-orgznstafe" aria-selected="true">Subdivision de la Zona</button>
              <button class="nav-link sub" id="nav-automatistafe-tab" data-bs-toggle="tab" data-bs-target="#nav-automatistafe" type="button" role="tab" aria-controls="nav-automatistafe" aria-selected="false">Zona en Automatico</button>
              <button class="nav-link sub" id="nav-particstafe-tab" data-bs-toggle="tab" data-bs-target="#nav-particstafe" type="button" role="tab" aria-controls="nav-particstafe" aria-selected="false">Particularidades de la Zona</button>
              <button class="nav-link sub" id="nav-interstafe-tab" data-bs-toggle="tab" data-bs-target="#nav-interstafe" type="button" role="tab" aria-controls="nav-interstafe" aria-selected="false">Servicios Interprovinciales</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-orgznstafe" role="tabpanel" aria-labelledby="nav-orgznstafe-tab" tabindex="0">
              <p>
                El tráfico de Santa Fe se subdivide de la siguiente manera:
                <li>Sta. Fe locales (tanto para los servicios que están dentro de la Ciudad de Sta. Fe, como así también aquellos que se encuentren en Monte Vera, Recreo, Sto. Tome, Sauce Viejo)  </li>
                <li>Sta. fe interior (demás localidades)  </li>
              </p>
            </div>
            <div class="tab-pane fade" id="nav-automatistafe" role="tabpanel" aria-labelledby="nav-automatistafe-tab" tabindex="0">
              <p>
                La zona cuenta con algunos móviles con GAP, se recomienda utilizar el automático para preasignarlos dentro de la ciudad de Sta. Fe y zonas aledañas.
                <br></br>
                En los demás casos se deberán asignar y derivar de manera manual.
              </p>
            </div>
            <div class="tab-pane fade" id="nav-particstafe" role="tabpanel" aria-labelledby="nav-particstafe-tab" tabindex="0">
              <li>Para servicios con kilómetros se recomienda consultar con el móvil 15106 correspondiente a la Base de Martínez, ya que es el móvil que tiene prioridad para estos traslados.   </li>
              <li>Se solicita alta prioridad para las mecánicas al móvil 1519 correspondiente a la base  </li>
              <li>Los prestadores de zonas aledañas como Monte Vera, Recreo, Sto Tome, Sauce Viejo, Calchines, entre otras, realizan servicios locales en la Ciudad de Santa Fe.  </li>
              <li>El móvil 1065 se da de alta en Esperanza, tenerlo en cuenta para los servicios que tengan este origen.  </li>
            </div>
            <div class="tab-pane fade" id="nav-interstafe" role="tabpanel" aria-labelledby="nav-interstafe-tab" tabindex="0">
              <p>
                Aquellos traslados cuyo origen o destino se encuentre en Paraná en primera instancia deberán ser consultados con las bases de esa localidad.
                <br></br>
                En caso de no contar con disponibilidad o que las demoras sean elevadas, se recomienda consultar con el prestador de Sta. Rosa de Calchines o con el prestador de la Base de Badaracco; ya que son los únicos de tráfico que realizan el cruce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}