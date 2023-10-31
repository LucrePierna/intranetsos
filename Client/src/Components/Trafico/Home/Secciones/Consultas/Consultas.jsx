import React from 'react'
import * as bootstrap from 'bootstrap'



export default function Consultas() {

    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })

    return (
        <div className='conteinerNav mt-5 '>
            <nav className='navConteiner'>
                <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link custom active" id="nav-proppriv-tab" data-bs-toggle="tab" data-bs-target="#nav-proppriv" type="button" role="tab" aria-controls="nav-proppriv" aria-selected="true">Vehiculo prop. privada</button>
                    <button className="nav-link custom" id="nav-vhcbajo-tab" data-bs-toggle="tab" data-bs-target="#nav-vhcbajo" type="button" role="tab" aria-controls="nav-vhcbajo" aria-selected="false">Vehiculos bajos</button>
                    <button className="nav-link custom" id="nav-factadic-tab" data-bs-toggle="tab" data-bs-target="#nav-factadic" type="button" role="tab" aria-controls="nav-factadic" aria-selected="false">Factura por adicionales</button>
                    <button className="nav-link custom" id="nav-svcconad-tab" data-bs-toggle="tab" data-bs-target="#nav-svcconad" type="button" role="tab" aria-controls="nav-svcconad" aria-selected="false">Servicios con adicional</button>
                    <button className="nav-link custom" id="nav-peritaje-tab" data-bs-toggle="tab" data-bs-target="#nav-peritaje" type="button" role="tab" aria-controls="nav-peritaje" aria-selected="false">Servicios de Peritaje</button>
                    <button className="nav-link custom" id="nav-parking-tab" data-bs-toggle="tab" data-bs-target="#nav-parking" type="button" role="tab" aria-controls="nav-parking" aria-selected="false">Vehiculos en Parking</button>
                    <button className="nav-link custom" id="nav-pesados-tab" data-bs-toggle="tab" data-bs-target="#nav-pesados" type="button" role="tab" aria-controls="nav-pesados" aria-selected="false">Coordinación pesados</button>
                    <button className="nav-link custom" id="nav-sinmotor-tab" data-bs-toggle="tab" data-bs-target="#nav-sinmotor" type="button" role="tab" aria-controls="nav-sinmotor" aria-selected="false">Vehículos sin motor</button>
                    <button className="nav-link custom" id="nav-fc-tab" data-bs-toggle="tab" data-bs-target="#nav-fc" type="button" role="tab" aria-controls="nav-fc" aria-selected="false">Fuera Cochera</button>
                    <button className="nav-link custom" id="nav-patenteinc-tab" data-bs-toggle="tab" data-bs-target="#nav-patenteinc" type="button" role="tab" aria-controls="nav-patenteinc" aria-selected="false">Patente incorrecta</button>
                </div>
            </nav>
            <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto" id="nav-tabContent">
                <div className="tab-pane fade show active lineaGeneral" id="nav-proppriv" role="tabpanel" aria-labelledby="nav-proppriv-tab" tabindex="0">
                    <p>Las asistencias son de cordón a cordón, por lo que, si al llegar el móvil el vehículo se encontrara en un estacionamiento, cochera, vereda o jardín de un domicilio,
                        el cliente debe sacarlo a la calle (independientemente de que lo haya dejado el cliente o una grua nuestra en donde se encuentra).
                        Solo podremos intervenir cuando se encuentre en una vereda por consecuencia de un siniestro, cobrando el costo de extracción
                        correspondiente según la cobertura del asegurado.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-vhcbajo" role="tabpanel" aria-labelledby="nav-vhcbajo-tab" tabindex="0">
                    <p> Si el vehículo es bajo de fábrica y el móvil que fue al lugar no puede cargarlo o no quiere hacerlo por miedo a dañarlo, por más que cliente firme
                        conformidad de arrastre, se procederá a solicitarle foto del vehículo y realizar un derivado a otro móvil. Al nuevo móvil se le enviara la foto del
                        vehículo para que confirme si lo cargará antes de ir al lugar. Se le indica al cliente que ira otro móvil de manera condicional a intentar cargar
                        aclarándole que debe firmar conformidad y que el vehículo puede sufrir daños en la carga. Si el segundo móvil que va al lugar tampoco puede cargarlo
                        se le ofrecerá servicio por reintegro al socio.</p>
                    <p>En el caso de que el vehículo sea bajo producto de una modificación en la suspensión y tenga exclusión en su póliza, le consultaremos al móvil
                        que se encuentra en el lugar si puede cargarlo si el cliente le firma conformidad de arrastre, en caso de negarse o de que el cliente no quiera
                        firmar conformidad, el móvil se retira y se le informa al cliente que no cuenta con servicio. Si el móvil acepta cargar bajo estas condiciones, se le informa
                        al socio que no cuenta con servicio y que lo cargaremos de manera excepcional.
                    </p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-factadic" role="tabpanel" aria-labelledby="nav-factadic-tab" tabindex="0">
                    <p>Los servicios con adicionales cobrados desde SOS: se envía factura desde la empresa.</p>
                    <p>Los servicios que cobre un móvil por cualquier medio (Efectivo, transferencia o tarjeta): corresponde que el chofer envíe la factura,
                        TODOS los choferes tienen para facturar, ya sea el chofer o el titular. Ante cualquier duda se debe comunicar con su ejecutivo de cuenta.</p>
                    <p>En ambos casos la factura es electrónica y se envía vía mail al socio.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-svcconad" role="tabpanel" aria-labelledby="nav-svcconad-tab" tabindex="0">
                    <h1>Controlar los servicios al ingresar en pantalla</h1>
                    <br />
                    <p>Si el adicional es en efectivo, aceptamos el servicio normalmente y lo coordinamos. </p>
                    <p>si tienen adicional y el mismo se abona con tarjeta, verificar que este cobrado, de no estarlo el servicio
                        DEBE ser rechazado con una referencia que indique "Adicional sin cobrar, una vez cobrado pasar a base con xx minutos".</p>
                    <p>xx = (cantidad de minutos que tenía el servicio al momento de ingresar a pantalla).</p>

                 

                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-peritaje" role="tabpanel" aria-labelledby="nav-peritaje-tab" tabindex="0">
                    <p> Cuando un socio solicita un servicio por peritaje, el mismo tiene una tolerancia de 30min en destino mientras lo peritan para que luego el mismo móvil
                        lo traslade, pasado este tiempo el móvil se retira y el cliente deberá solicitar el servicio una vez que esté listo para trasladar.</p>
                    <p>En este servicio no le computamos el adicional de diagnóstico por traslado desde taller, pero SI un segundo servicio, si el mismo por cobertura es
                        con costo debe cobrarse el mismo antes de trasladar el vehículo, en caso de que el socio no quiera abonar, el móvil se retira.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-parking" role="tabpanel" aria-labelledby="nav-parking-tab" tabindex="0">
                    <p> Los servicios solicitados por vehículos en parking son condicionales, si el vehículo está en la calle y el móvil que fue no puede cargarlo por falta de
                        implementos le hacemos un derivado de manera condicional y buscamos móvil con 4 carros o 2 carros y 2 ski de arrastre, siempre que las ruedas se encuentren
                        derechas y sin obstáculos adelante del mismo. Si el vehículo está en parking, pero no está en la calle, el cliente debe destrabar y dejar el vehículo paralelo al
                        cordón, luego de eso debe solicitar el servicio nuevamente.</p>
                    <p>No se destrabamos manualmente Parking a ningun vehiculo.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-pesados" role="tabpanel" aria-labelledby="nav-pesados-tab" tabindex="0">
                    <p>Para coordinar cualquier servicio de pesados debes tener SI O SI foto de la unidad, caso contrario no el servicio queda en espera hasta recibirla.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-sinmotor" role="tabpanel" aria-labelledby="nav-sinmotor-tab" tabindex="0">
                    <p>Los vehículos que se encuentren sin motor no tienen servicio. El mismo debe estar colocado o dentro del vehículo para poder realizar la asistencia.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-fc" role="tabpanel" aria-labelledby="nav-fc-tab" tabindex="0">
                    <h1>Recordar que este servicio lo brinda SOS a modo de cortesía hacia el cliente, no estamos obligados y se consulta
                        disponibilidad de lunes a viernes de 9 a 17hs, NO se programan estos servicios. </h1>
                    <br />
                    <p>¿En qué consiste el procedimiento?</p>
                    <p>Se envía un móvil de menor porte (Por lo general, una camioneta con un tenedor adaptado para enganchar el auto) para sacar el vehículo de donde se
                        encuentra y una vez que el vehículo está en la calle, se carga en grúa y es trasladado hasta el destino que nos indica el cliente.</p>
                    <br />

                    <p><u>Consideraciones a tener en cuenta sobre situación del vehículo y del lugar:</u></p>
                    <ul className='mt-2 listaGral'>
                        <li>Estado de las ruedas (si las ruedas no giran no podemos retirarlo.)</li>
                        <li>Espacio suficiente para que maniobre el móvil.</li>
                        <li>Estacionado de frente o de culata.</li>
                        <li>Altura de la entrada de la cochera desde el piso al techo (debe ser mayor a 2.5mts).</li>
                        <li>Ubicación de la cochera (sólo asistimos en 1er subsuelo).</li>
                        <li>Condiciones de las rampas (curvas, empinadas, no ingresamos en ascensores).</li>
                    </ul>
                    <br />
                    <p><u>¿Cuándo NO lo podemos brindar?</u></p>
                    <ul className='mt-2 listaGral'>
                        <li>Cuando el vehículo se encuentre en la planta alta de un estacionamiento, en este caso el cliente deberá sacarlo por sus medios.</li>
                        <li>Cuando se encuentre en un estacionamiento a nivel de la calle, aquí también deberá sacarlo por sus medios.</li>
                        <li>Cuando las ruedas del vehículo no giren. En este caso deberá sacarlo por sus medios.</li>
                        <li>Cuando el vehículo este en niveles más abajo del primer subsuelo.</li>
                        <li>Cuando esté en cocheras particulares (Ejemplo: cochera de una casa).</li>
                        <li>Cuando se solicite un fuera cochera para una moto.</li>
                    </ul>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-patenteinc" role="tabpanel" aria-labelledby="nav-patenteinc-tab" tabindex="0">
                    <p>Cuando un móvil llega a realizar una asistencia y nos indica que no le coincide la patente, debemos llamar al 8800 o 98008 e indicarles la situación
                        para que corroboren si el socio cuenta con asistencia con dicha patente, le indicamos al móvil que aguarde 15min mientras se realiza la gestión y se
                        comunique nuevamente, en caso de tener servicio realizaremos la asistencia. En caso de no tener servicio se anulará el mismo como
                        "servicio mal tomado/duplicado" (dar aviso a supervisor para esta anulación) en el caso de que la patente corresponda a otro asegurado, en el caso
                        de que sea otro vehículo del cliente y el haya dado mal la patente se anula como "al llegar móvil cliente" ya que es su responsabilidad el haber
                        brindado una patente incorrecta. </p>
                </div>
            </div >
        </div>
    )
}