import React from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'


export default function Procedimiento() {


  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })


  return (
    <div className='conteinerNav mt-5 ' >
      <nav className='navConteiner'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Instrucciones</button>
          <button className="nav-link custom" id="nav-reglas-tab" data-bs-toggle="tab" data-bs-target="#nav-reglas" type="button" role="tab" aria-controls="nav-reglas" aria-selected="false">Reglas generales</button>
          <button className="nav-link custom" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tipos de asistencia</button>
          <button className="nav-link custom" id="nav-links-tab" data-bs-toggle="tab" data-bs-target="#nav-links" type="button" role="tab" aria-controls="nav-links" aria-selected="false">Enlaces principales</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto " id="nav-tabContent">
        <div className="tab-pane fade show active lineaGeneral" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <h1><u>Alcance</u></h1>
          <p >Se activará cuando haya personas junto al vehículo que por distintos motivos no puedan ser trasladadas en la misma grúa. El operador corroborará si corresponde la asistencia en la grilla.</p>
          <h1><u>Pautas Generales</u></h1>
          <p >El operador deberá realizar el análisis correspondiente del servicio, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio, entre otros. </p>
          <ul className='listaGral'>
            <li>Contención</li>
            <li>Corroborar disponibilidad de móvil doble cabina</li>
            <li>Buscar otra opción de móvil según cantidad de km(habiendo descartado la D/C)
              <ul>
                <li>Hasta 60km: Cabina doble, Taxi o Remis</li>
                <li>Desde 61km: Cabina doble, pasaje en colectivo o pasaje en avión</li>
              </ul>
            </li>
            <li>Hospedaje, según la situación en la que se encuentren</li>
            <li>Agotadas las instancias: Servicio por reintegro</li>
            <li>Excepciones.</li>
          </ul>
        </div>
        <div className="tab-pane fade" id="nav-reglas" role="tabpanel" aria-labelledby="nav-reglas-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-contencion-tab" data-bs-toggle="tab" data-bs-target="#nav-contencion" type="button" role="tab" aria-controls="nav-contencion" aria-selected="true">Contención</button>
              <button class="nav-link sub" id="nav-tipoprest-tab" data-bs-toggle="tab" data-bs-target="#nav-tipoprest" type="button" role="tab" aria-controls="nav-tipoprest" aria-selected="false">Tipo de Prestadores</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-contencion" role="tabpanel" aria-labelledby="nav-contencion-tab" tabindex="0">
              <p>Luego de analizar el servicio y verificar que el mismo se encuentre completo y correcto, el operador deberá establecer contacto con el cliente a los 20 minutos desde la toma del servicio para:</p>
              <ul>
                <li>Informar que quien se comunica se encuentra a cargo de su servicio (ver modo de presentación según grilla).</li>
                <li>Corroborar la información tomada inicialmente (cantidad, nombre completo, DNI y edad, origen y destino de las personas). Si el operador detecta faltante en alguno de estos datos, deberá completarlo y registrarlo.  </li>
                <li>Mantener al cliente informado de la gestión cada 40 minutos desde el último contacto efectivo con el cliente si aún no fue derivado el servicio. </li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-tipoprest" role="tabpanel" aria-labelledby="nav-tipoprest-tab" tabindex="0">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active " id="nav-p1" role="tabpanel" aria-labelledby="nav-p1-tab" tabindex="0">
                  <p>Prestadores de grúa que coordinan servicios adicionales como: <br />
                    Grúa doble cabina: los kilómetros se contabilizarán para el cliente desde el lugar de origen (donde están el vehículo y las personas) hasta el destino final (siempre kilómetros totales). Si la grúa recorriera kilómetros en vacío corresponderán ser cargados al prestador, pero no al cliente.<br />
                    En la pantalla de “Red Nacional” al servicio se le asignará llegada y se le dará cierre al mismo tiempo que al servicio de traslado.<br />
                    El operador deberá corroborar disponibilidad de prestadores con grúa Cabina Doble.<br />
                    Viajan en grúa el chofer, hasta 2 personas mayores de 18 años adelante. Atrás pueden viajar hasta 3 personas incluyendo menores. En el caso de que haya un menor de 4 años, el cliente debe tener Butaca para el menor, el mismo puede ser que lo tenga dentro de su vehículo.<br />
                    Dependiendo la cobertura en la grilla del cliente, tendrá cubierto totalmente el servicio, tendrá cubierto parcialmente el servicio o no tendrá cobertura y deberá abonar el costo del mismo. Para ello el operador deberá calcular el costo del uso de la grúa doble cabina y la cobertura del cliente del siguiente modo: Kilómetros lineales x 2 = km totales x precio de la grilla del prestador (validando condición fiscal) </p>
                </div>
                <div className="tab-pane fade" id="nav-p2" role="tabpanel" aria-labelledby="nav-pa2-tab" tabindex="0">
                  <p>En el servicio se deberá registrar:<br />
                    Los costos relacionados al servicio, tramo que se autoriza (costo del kilómetro o cantidad de kilómetros a recorrer) <br />
                    Una Referencia de Viajero en la que consten los siguientes datos con este formato estándar que se puede encontrar en la sección "Herramientas":<br />
                    <b>CANT TOTAL PERSONAS:</b>(se refiere a todas las personas a bordo del vehículo) <br />
                    <b>CANT PERS ASIST VIAJERO:</b>(sólo las que tienen asistencia al viajero, no las dos que van en grúa o las que hay de más) <br />
                    <b>ORIGEN Y DESTINO (DE LAS PERSONAS):</b>(Origen, se refiere al lugar de donde es oriundo el cliente; Destino, se refiere al lugar al que se estaba dirigiendo) <br />
                    <b>TIPO DE ASISTENCIA:</b>(si es grúa doble cabina, remis, pasajes, etc.) <br />
                    <b>TOPE ESTABLECIDO POR CIA:</b>(tope que figura en la grilla de la Cía.) <br />
                    <b>OBSERVACIONES:</b>(cualquier otro dato de importancia. Ej.: debe abonar diferencia por los kilómetros de más)  <br />
                  </p>
                  <p>
                    <b><u>Viajero sin Traslado:</u></b> Hay instancias en la que solo se trabaja con el servicio de viajero, sin trabajar el traslado, en esos casos se consulta al sector correspondiente que tiene el servicio de traslado, a los Tráficos (Rosario, Córdoba, Caba llamando al 9700) si el móvil asignado cuenta con cabina doble. Si no tienen móvil asignado se espera la coordinación del móvil para saber cuántas personas lleva el prestador. En el caso que lleve menos personas de las que haya en el lugar se coordina:<br />
                    Taxi o remis menos de 60km <br />
                    Pasajes en colectivo más de 60km<br />
                    Pasajes en avión (Eventualmente)<br />
                    Reintegro </p>
                </div>
                <nav>
                  <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    <button class="nav-link sub active" id="nav-p1-tab" data-bs-toggle="tab" data-bs-target="#nav-p1" type="button" role="tab" aria-controls="nav-p1" aria-selected="true">Pág 1</button>
                    <button class="nav-link sub" id="nav-p2-tab" data-bs-toggle="tab" data-bs-target="#nav-p2" type="button" role="tab" aria-controls="nav-p2" aria-selected="true">Pág 2</button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-taxi-tab" data-bs-toggle="tab" data-bs-target="#nav-taxi" type="button" role="tab" aria-controls="nav-taxi" aria-selected="true">Taxi-Remis-Cabify</button>
              <button class="nav-link sub" id="nav-bondi-tab" data-bs-toggle="tab" data-bs-target="#nav-bondi" type="button" role="tab" aria-controls="nav-bondi" aria-selected="false">Colectivo</button>
              <button class="nav-link sub" id="nav-avion-tab" data-bs-toggle="tab" data-bs-target="#nav-avion" type="button" role="tab" aria-controls="nav-avion" aria-selected="false">Avión</button>
              <button class="nav-link sub" id="nav-hospedaje-tab" data-bs-toggle="tab" data-bs-target="#nav-hospedaje" type="button" role="tab" aria-controls="nav-hospedaje" aria-selected="false">Hospedaje</button>
              <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Reintegro</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-taxi" role="tabpanel" aria-labelledby="nav-taxi-tab" tabindex="0">
              <p>Puede ser brindado directamente por el prestador (con unidad propia) o tercerizando a través de una remisería (taxi y remise por recupero). <br />
                Si se realiza con esta segunda opción corresponderá una "fee de gestión de viajero" para el prestador. Tener en cuenta los topes de cobertura del cliente en esta prestación.<br />
                En la pantalla de “Red Nacional” al servicio se le asignará llegada y cierre en el momento que sea confirmado por el prestador. <br />
                El producto que corresponderá cargar al prestador serán kilómetros lineales, medidos desde la base hasta el destino del viaje del cliente. Al cliente se le computarán solo kilómetros lineales, medidos en el trayecto que recorre durante el servicio de viajero. <br />
              </p>
              <p>
                Los kilómetros se contabilizarán para el cliente desde el lugar de origen (donde están el vehículo y las personas) hasta el destino final (siempre kilómetros lineales). *Tener en cuenta que el traslado de las personas para ser coordinado por este medio no debe superar los 60 km lineales* <br />
              </p>
              <p>
                <u>Remis LH – Córdoba:</u> Coordina remis en la localidad de Córdoba y alrededores. El producto que se deberá cargar es “taxi y remis propio”. Los servicios deberán ser asignados a la base 11444 – Córdoba – López Héctor Horacio. <br />
              </p>
              <p>
                <u>Resto del país:</u> ver opciones de grilla de prestadores si cuentan con este servicio, o la base que salga en opciones de búsqueda, una de las opciones es Supernova S.A: CUBRE GRAN PARTE DE LAS LOCALIDADES DEL PAÍS. Los servicios deberán ser asignados a la base 11079. <br />
              </p>
              <p><b>
                Si el servicio de viajero cuenta con adicional a cargo del asegurado, no se podrá coordinar con los prestadores antes mencionados, el servicio debe estar cubierto en su totalidad.
              </b></p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-bondi" role="tabpanel" aria-labelledby="nav-bondi-tab" tabindex="0">
              <p>
                El operador deberá analizar si el traslado de las personas supera los 60 km lineales para poder consultar y coordinar este tipo de asistencia. Para ello contamos con dos bases/prestadores. <br />

                <u><b>Plataforma 10 y Central de Pasajes:</b></u> Sistemas que permiten comprar pasajes vía internet y el envío de los mismos mediante email. <br />
                Para su utilización serán necesarios los nombres de las personas que viajan, números de documentos, fecha de nacimiento, edad y casilla de e-mail del cliente en la cual recibirá los pasajes.<br />
                Para determinar si hay disponibilidad de pasajes, se deberá consultar en la página web de la plataforma seleccionada. Para la adquisición de los pasajes se debe solicitar a Supervisor de Logística/TT o Back Office de Logística, ya que son quienes realizarán la compra en caso de ser necesario.<br />
                El producto que se carga para dicha asistencia será “pasajes para prestador 10.5”, ingresando la cantidad de pasajes y “fe de gestión de viajero”.<br />
                Estos servicios deben ser asignados a la base 10832 Capital Federal - Plataforma 10 S.A o 11751 Capital Federal - AIV Soluciones Digitales S.A.(Central de Pasajes) En la pantalla de “Red Nacional” al servicio se le asignará llegada cuando el cliente confirme que recibió los pasajes en su cuenta de email y se le dará cierre en el mismo momento.
              </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-avion" role="tabpanel" aria-labelledby="nav-avion-tab" tabindex="0">
              <p>
                <u><b>Punto Turístico:</b></u> Es una agencia de turismo, que ofrece la gestión de compra de pasajes aéreos (previa autorización del Supervisor) y coordinación de hospedaje en distintas partes del país. El pedido de hospedaje/ pasaje aéreo se envía por mail a: <u>reservas@pturistico.com.ar</u>  <br />
                El producto que se utiliza es: pasajes aéreos: “pasajes para prestador 21%”. <br />
                Estos servicios deberán ser asignados a la base "10849 Córdoba – Punto Turístico" <br />
                En el servicio se deberá registrar: los costos y topes relacionados al servicio, como costos de pasajes, tramo que se autoriza (costo del kilómetro o cantidad de kilómetros a recorrer.)
                Una referencia de servicio con el formato estándar.
              </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-hospedaje" role="tabpanel" aria-labelledby="nav-hospedaje-tab" tabindex="0">
              <p>
                Consiste en la coordinación o pago por parte del prestador del alojamiento solicitado. Tener en cuenta los topes de cobertura del cliente en esta prestación. <br />
                Los productos que se cargan son: “hotelería para prestador” y “fe de gestión de viajero”. En la pantalla de “Red Nacional”, al servicio se le asignará llegada cuando el cliente confirme que ya está en el hospedaje y se le dará cierre en el mismo momento. <br />
                El operador consultará disponibilidad de hospedaje en caso de no haber disponibilidad de traslado para el mismo día, habiendo agotado la posibilidad de reintegro. Se podrá brindar cobertura de alojamiento según póliza, previa autorización se supervisor – Back office. <br />
                Tener en cuenta que se pueden combinar los servicios entre distintas asistencias como: Hospedajes y Remis/ Remis y Pasajes (colectivo o Avión.) <br />
                <b><u>Punto Turístico:</u></b> Es una agencia de turismo, que ofrece la gestión de compra de pasajes aéreos (previa autorización del Supervisor) y coordinación de hospedaje en distintas partes del país. El pedido de hospedaje/pasaje aéreo se envía por e-mail a: <u>reservas@pturistico.com.ar</u>  <br />
                El producto que se utiliza es: Pasajes aéreos: “pasajes para prestador 21%”. <br />
                Estos servicios deberán ser asignados a la base "10849 Córdoba – Punto Turístico" <br />
                <b>En caso de que traslado se coordine, tener en cuenta que NO corresponde hospedaje en caso de que haya disponibilidad de micro, en este caso se brinda reintegro del pasaje, tampoco si él cliente manifestó en la solicitud de servicio que era el destino la localidad donde se dirigía.</b>
              </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-reintegro" role="tabpanel" aria-labelledby="nav-gestor-tab" tabindex="0">
              <p><b>Se deberán agotar todas las vías posibles antes de brindar el servicio por reintegro. En caso de coordinarse bajo esta modalidad, se deberá brindar la mayor contención posible al cliente, ofreciendo comunicación con familiares, policía, números de remiserías, hoteles, verificando disponibilidad de micros, etc.</b></p>
              <p><u>Consideraciones generales para el reintegro:</u>
                <ul className='listaGral'>
                  <li>Debe ser autorizado por Supervisor / Back Office.</li>
                  <li>Se debe cerrar por reintegro asignándolos a la base 10361 – Córdoba.  Brindando los medios para gestionarlo, enviando un mail con copia a derivadores y mesa de ayuda o informar vía verbal los medios de gestión de reintegro (que se dirija a la Cía. o envíe la factura *Página web: www.redsos.com.ar - reclamos y sugerencias.</li>
                  <li>Se deben cargar los productos correspondientes en solapa prestador – listado de producto (“Taxi/remis por reintegro”, “Hotelería por reintegro”, “Pasajes por reintegro”).</li>
                  <li>Se debe recordar al cliente presentar comprobante fiscal y/o ticket para poder acceder al reintegro.</li>
                  <li>Se debe especificar al cliente los topes de cobertura, respetando lo detallado en cada grilla.</li>
                  <li>Se debe dejar registro en el servicio del lugar del cual se toman los precios como referencia para fijar el tope por reintegro, por ejemplo, Plataforma 10 o Central de Pasajes.</li>
                  <li>En los casos que cliente manifieste no ser de la zona o desconocimiento para contratar servicio se puede aconsejarle la página web https://www.telexplorer.com.ar el cual muestra servicios de Taxi / Remis / hospedaje el cual cliente podrá contactarse para contratar sus servicios o realizar consultas.</li>
                  <li>Como última instancia indicar al cliente que lo puede utilizar al tope de reintegro en combustible, para que algún familiar los busque.</li>
                </ul>

                Se debe tener en cuenta que los servicios de reintegro por taxi/Remis como Micro se calculan sobre los KM lineales. <br />
                <ul className='listaGral'>
                  <li>Taxi-Remis: valor hasta 20km lineales tope de $1500 finales. Entre 20km y 60km lineales el valor a tomar es de $120 finales por km lineal.</li>
                  <li>Mas de 60 km, Pasaje en Micro: Valor de referencia de plataforma de venta o valor de $18 final por km lineal.</li>
                  <b>Nota:</b>
                  <li> Si el tope de cobertura en póliza es mayor al que se le ofrece, indicar que es un monto aproximado.</li>
                  <li> Ver siempre el tarifario de reintegro actualizado.</li>
                </ul>
                Registros en todos los servicios
                Una Referencia de Viajero con el formato estándar en la sección de "Herramientas"
              </p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-links" role="tabpanel" aria-labelledby="nav-links-tab" tabindex="0">
          <div className='d-flex flex-column py-4 m-auto justify-content-center text-center'>
            <p>Para coordinar servicio de asistencia al viajero con pasajes de micro se consultará disponibilidad con las plataformas y luego se solicitara a Supoervisor o Back Office que gestione la compra para luego enviar los pasajes al cliente via mail.</p>
            <div>
              <a href="https://www.centraldepasajes.com.ar" target='_blank'>
                <button type="button" className="btn btn-danger my-2">Central de Pasajes</button>
              </a>
            </div>
            <div>
              <a href="https://www.plataforma10.com.ar" target='_blank'>
                <button type="button" className="btn btn-danger my-2">Plataforma 10</button>
              </a>
            </div>
            <p>En caso de que el cliente acepte coordinar asistencia al viajero por reintegro, se podrá consultar a la siguiente guia telefonica "Telexplorer" numeros telefonicos de taxi/remis de la zona. Para ello se deberá consultar en busqueda comercial "rubro" Taxi y seleccionar provincia/localidad para filtrar la busqueda.</p>
            <div>
              <a href="https://www.telexplorer.com.ar/" target='_blank'>
                <button type="button" className="btn btn-danger my-2">Telexplorer</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


