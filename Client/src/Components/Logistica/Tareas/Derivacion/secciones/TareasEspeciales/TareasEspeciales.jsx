import React from 'react'
import * as bootstrap from 'bootstrap'

export default function TareasEspeciales() {
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
                    <button className="nav-link custom active" id="nav-cerrajeria-tab" data-bs-toggle="tab" data-bs-target="#nav-cerrajeria" type="button" role="tab" aria-controls="nav-cerrajeria" aria-selected="true">Cerrajería</button>
                    <button className="nav-link custom" id="nav-extraccion-tab" data-bs-toggle="tab" data-bs-target="#nav-extraccion" type="button" role="tab" aria-controls="nav-extraccion" aria-selected="false">Extracción</button>
                    <button className="nav-link custom" id="nav-cristales-tab" data-bs-toggle="tab" data-bs-target="#nav-cristales" type="button" role="tab" aria-controls="nav-cristales" aria-selected="false">Grabado de cristales</button>
                    <button className="nav-link custom" id="nav-guardavhc-tab" data-bs-toggle="tab" data-bs-target="#nav-guardavhc" type="button" role="tab" aria-controls="nav-guardavhc" aria-selected="false">Guarda de Vehículos</button>
                    <button className="nav-link custom" id="nav-intransitable-tab" data-bs-toggle="tab" data-bs-target="#nav-intransitable" type="button" role="tab" aria-controls="nav-intransitable" aria-selected="false">Caminos Intransitables</button>
                </div>
            </nav>
            <div className="h-100 w-100 tab-content px-3 m-auto h-50 w-70 fs-5 " id="nav-tabContent">
                <div className="tab-pane fade show active px-3 mt-3 " id="nav-cerrajeria" role="tabpanel" aria-labelledby="nav-cerrajeria-tab" tabindex="0">
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        </div>
                    </nav>
                    <div class="tab-content px-3 mt-3 " id="nav-tabContent">
                        <p >Es un servicio especial por el cual se coordina la apertura del vehículo cuando la grilla del cliente así lo indique. El cliente deberá siempre acreditar la identidad y la titularidad del vehículo mediante una de las siguientes posibilidades: cédula verde, cédula azul, título de propiedad, exposición policial autorizante de la apertura.</p>
                        <h3><u>Tipo de coberturas</u></h3>
                        <ul className='mt-2 text-start'>
                            <li>Si posee, (en determinadas circunstancias): la grilla brinda el servicio de apertura siempre y cuando existan las circunstancias que indica. Por ejemplo: si la grilla informa que NO se brinda el servicio en caso de robo o hurto de las llaves, debemos consultar al cliente si esto ocurrió, y si así fue, no tendrá el servicio. Puede ser con o sin tope.</li>
                            <li>Si posee: la grilla brinda el servicio de apertura, sin exigir que se den determinadas circunstancias. Puede ser con o sin tope</li>
                            <li>No posee: En cuyo caso se le informará al cliente que debe hacer la apertura por sus medios.  </li>
                        </ul>
                        <h3><u>Selección de prestador</u></h3>
                        <p>El Operador de Logística deberá verificar la disponibilidad de prestadores de cerrajería en la zona que se encuentra el cliente. Se procederá de la siguiente manera:</p>
                        <ul className='mt-2 text-start'>
                            <li>Coordinar el servicio con un prestador de asistencia al hogar. Se deberá contactar al prestador de la localidad o zona aledaña de asistencia al hogar y derivarle el servicio para que envíen un cerrajero, evaluando de esta manera la posibilidad de realizar la apertura del vehículo.</li>
                            <li>No deberá informar cobertura al prestador, el mismo nos brindará un presupuesto en base al trabajo a realizar el cual deberá autorizarlo un supervisor o B.O.</li>
                        </ul>
                        <h3><u>CERRAJERÍA, con necesidad de traslado.</u></h3>
                        <p>Estos casos se dan cuando el cliente perdió las llaves del vehículo, por lo cual, a pesar de hacer la apertura, también va a requerir traslado. O en caso de no poder efectuarse la apertura del vehículo.</p>
                    </div>
                </div>
                <div className="tab-pane fade px-3 mt-3 text-start" id="nav-extraccion" role="tabpanel" aria-labelledby="nav-extraccion-tab" tabindex="0">
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        </div>
                    </nav>
                    <div class="tab-content px-3 mt-3 " id="nav-tabContent">
                        <p>Es una de las asistencias especiales que se brindan cuando el cliente solicita un servicio cuyo vehículo se encuentre atascado, dado vuelta o de costado. El prestador deba realizar maniobras y dejarlo en condiciones de ser trasladado o de volver a rodar por sus medios.</p>
                        <p>El operador deberá en primera instancia validar si según la cobertura el cliente posee el servicio. Luego se deberá corroborar:</p>
                        <ul className='text-start m-auto py-2'>
                            <li >Descripción del hecho.</li>
                            <li>Estado de ruedas.</li>
                            <li>Estado del vehículo.</li>
                            <li>Estado del camino.</li>
                        </ul>
                        <p className='mt-2'>El operador deberá buscar prestador informando explícitamente la situación. El prestador debe informarnos la cotización cuando llega al lugar una vez evaluada la condición del vehículo, la misma es autorizada por supervisor/Back Office. </p>
                        <ul className='mt-2 text-start'>
                            <li>Recordar que en este caso siempre firma conformidad de arrastre sin excepción</li>
                            <li>No indicar de antemano a prestador tope de cliente.</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade px-3 mt-3 text-start" id="nav-cristales" role="tabpanel" aria-labelledby="nav-cristales-tab" tabindex="0">
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        </div>
                    </nav>
                    <div class="tab-content px-3 mt-3 " id="nav-tabContent">
                        <p className='fs-5'>Es un servicio especial que consiste en el grabado de los caracteres que componen la patente, en los cristales del vehículo. El Operador deberá corroborar si según grilla el cuenta con el servicio y su cobertura. La operatoria varía según la ubicación. </p>
                        <p className='mt-2'>Capital Federal y Gran Buenos Aires, el cliente deberá contactarse con nuestro prestador para pedir turno. Si el cliente rechaza realizar el servicio con alguno de nuestros prestadores se brindará el servicio por reintegro.</p>
                        <ul className='text-start mt-2'>
                            <li>Ag 10643	Station	Capital Federal	Warnes 999 (Villa Crespo)	011 48554442 / 011 48580222 / 011 48578858</li>
                            <li>Ag 10837	Auto Radio Alarma	La Plata	Calle 66 y 138	0221-155411491 / 0221 4502326</li>
                        </ul>
                        <ul className='text-start mt-2'>Red Nacional
                            <li>Verificar si hay bases disponibles en la localidad que el cliente se encuentre, de ser así brindar los datos del prestador para que el cliente saque turno y asista al lugar.</li>
                            <li>En caso de no existir bases o que el cliente no acepte ir al lugar indicado por nosotros, se le brindará el servicio por reintegro.</li>
                        </ul>
                        <h3>Debemos informar al cliente (según cuadro):</h3>
                        <ul className='mt-2 text-start'>
                            <li>Dirección del prestador</li>
                            <li>Teléfonos para pedir turnos</li>
                            <li>Código del servicio</li>
                        </ul>
                    </div>
                </div>
                <div className="tab-pane fade px-3 mt-3 text-start" id="nav-guardavhc" role="tabpanel" aria-labelledby="nav-guardavhc-tab" tabIndex="0">
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                        </div>
                    </nav>
                    <div class="tab-content px-3 mt-3 " id="nav-tabContent">
                        <p className='mt-5'>Es la tarea que se coordina excepcionalmente para dejar en resguardo un vehículo en la base de algún prestador cuando el servicio a realizar implica que el prestador no llegue a destino en horario solicitado o por la demanda de servicios en zona se vea afectada por la falta del mismo. </p>
                        <p>El operador deberá verificar con la base si cuenta con lugar para realizarlo y si la base tiene pactada la guarda en grilla (De no verlo reflejado se toma el costo de una movida local) se verifica en línea si es correcta la misma y se evalúa con un supervisor/back office si el costo es a cargo del cliente o absorbe SOS. </p>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-intransitable" role="tabpanel" aria-labelledby="nav-intransitable-tab" tabIndex="0">
                    <nav>
                        <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                            <button class="nav-link sub active" id="nav-camintransitable-tab" data-bs-toggle="tab" data-bs-target="#nav-camintransitable" type="button" role="tab" aria-controls="nav-camintransitable" aria-selected="true">Caminos Intransitables</button>
                            <button class="nav-link sub" id="nav-infcliente-tab" data-bs-toggle="tab" data-bs-target="#nav-infcliente" type="button" role="tab" aria-controls="nav-infcliente" aria-selected="false">Información al Cliente</button>
                            <button class="nav-link sub" id="nav-posibprest-tab" data-bs-toggle="tab" data-bs-target="#nav-posibprest" type="button" role="tab" aria-controls="nav-posibprest" aria-selected="false">Posibilidades de Prestador</button>
                            <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Reintegro</button>
                        </div>
                    </nav>
                    <div class="tab-content fs-5 mt-5" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-camintransitable" role="tabpanel" aria-labelledby="nav-camintransitable-tab" tabindex="0">
                            <h3>¿Qué es un camino Intransitable?</h3>
                            <p>Los mismos se encuentran marcados a través del mapa Mapsource, señalizado con verde flúor.</p>
                            <ul className='text-start'>Pueden estar compuestos por:
                                <li>Pendientes peligrosas.</li>
                                <li>Curvas de visibilidad reducida. </li>
                                <li>Vegetación próxima al camino.</li>
                                <li>Con pérdida de material del mismo camino o de los relieves que lo rodean.</li>
                                <li>Camino intransitable o asfalto en muy malas condiciones</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="nav-infcliente" role="tabpanel" aria-labelledby="nav-infcliente-tab" tabindex="0">
                            <ul className='text-start'>
                                <li>Estos caminos se encuentran excluidos del servicio, no obstante, se consultará con el prestador sobre la accesibilidad del mismo y luego de ello se notificará la posibilidad de coordinar la asistencia.</li>
                                <li>Ante disconformidad del cliente con el punto,se podrá informar que estos caminos no pertenecen a la red de tránsito pesado y que, si bien podría suceder que un vehículo liviano pueda acceder, debe considerar que las grúas son vehículos pesados, que deberá realizar dicho tramo cargado y que ello conlleva riesgos.</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade text-start px-5" id="nav-posibprest" role="tabpanel" aria-labelledby="nav-posibprest-tab" tabindex="0">
                            <h3>Existen dos posibilidades a raíz de lo consultado con el prestador: </h3>
                            <ul className='text-start'>
                                <li>Que los prestadores de la zona cobraren un costo adicional por asumir los riesgos que el rescate en esas condiciones implica. Dicho costo estará a cargo del cliente. Riesgos para el móvil: rotura, mayor demanda de tiempo para realizar el servicio, etc.</li>
                                <li>Que todos los prestadores de la zona coincidan en la imposibilidad de acceder por el estado del camino. De ser así, el cliente deberá movilizarlo de la zona por sus medios, hasta encontrarse en una ubicación donde pueda ser auxiliado.</li>
                            </ul>
                        </div>
                        <div class="tab-pane fade" id="nav-reintegro" role="tabpanel" aria-labelledby="nav-reintegro-tab" tabindex="0">
                            <p className='mt-2 px-5'>Si el cliente solicitara la alternativa del reintegro, el operador informara que podrá acceder al reintegro del servicio solo por los kilómetros de ruta transitable o en buen estado, de acuerdo a la calduladora de reintegro. El servicio, en caso de utilizarse esta opción, se debe cerrar por reintegro y referenciar lo anterior.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
