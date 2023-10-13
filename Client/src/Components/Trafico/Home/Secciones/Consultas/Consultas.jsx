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
                    <button className="nav-link custom active" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="true">Vehiculo prop. privada</button>
                    <button className="nav-link custom" id="nav-etapas-tab" data-bs-toggle="tab" data-bs-target="#nav-etapas" type="button" role="tab" aria-controls="nav-etapas" aria-selected="false">Vehiculos bajos</button>
                    <button className="nav-link custom" id="nav-operatoria-tab" data-bs-toggle="tab" data-bs-target="#nav-operatoria" type="button" role="tab" aria-controls="nav-operatoria" aria-selected="false">Factura por adicionales</button>
                    <button className="nav-link custom" id="nav-speech-tab" data-bs-toggle="tab" data-bs-target="#nav-speech" type="button" role="tab" aria-controls="nav-speech" aria-selected="false">Servicios con adicional</button>
                    <button className="nav-link custom" id="nav-contencion-tab" data-bs-toggle="tab" data-bs-target="#nav-contencion" type="button" role="tab" aria-controls="nav-contencion" aria-selected="false">Servicios de Peritaje</button>
                    {/* <button className="nav-link custom" id="nav-refesvc-tab" data-bs-toggle="tab" data-bs-target="#nav-refesvc" type="button" role="tab" aria-controls="nav-refesvc" aria-selected="false">Vehiculos en Parking</button> */}
                    <button className="nav-link custom" id="nav-gruat-tab" data-bs-toggle="tab" data-bs-target="#nav-gruat" type="button" role="tab" aria-controls="nav-gruat" aria-selected="false">Coordinación pesados</button>
                    <button className="nav-link custom" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Vehículos sin motor</button>
                    <button className="nav-link custom" id="nav-fc-tab" data-bs-toggle="tab" data-bs-target="#nav-fc" type="button" role="tab" aria-controls="nav-fc" aria-selected="false">Fuera Cochera</button>
                    <button className="nav-link custom" id="nav-patente-tab" data-bs-toggle="tab" data-bs-target="#nav-patente" type="button" role="tab" aria-controls="nav-patente" aria-selected="false">Patente incorrecta</button>

                </div>
            </nav>
            <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto" id="nav-tabContent">
                <div className="tab-pane fade show active lineaGeneral" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
                    <p>Las asistencias son de cordón a cordón, por lo que, si al llegar el móvil el vehículo se encontrara en un estacionamiento, cochera, vereda o jardín de un domicilio,
                        el cliente debe sacarlo a la calle (independientemente de que lo haya dejado el cliente o una grua nuestra en donde se encuentra).
                        Solo podremos intervenir cuando se encuentre en una vereda por consecuencia de un siniestro, cobrando el costo de extracción
                        correspondiente según la cobertura del asegurado.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabindex="0">
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
                <div className="tab-pane fade lineaGeneral" id="nav-operatoria" role="tabpanel" aria-labelledby="nav-operatoria-tab" tabindex="0">
                    <p>Los servicios con adicionales cobrados desde SOS: se envía factura desde la empresa.</p>
                    <p>Los servicios que cobre un móvil por cualquier medio (Efectivo, transferencia o tarjeta): corresponde que el chofer envíe la factura,
                        TODOS los choferes tienen para facturar, ya sea el chofer o el titular. Ante cualquier duda se debe comunicar con su ejecutivo de cuenta.</p>
                    <p>En ambos casos la factura es electrónica y se envía vía mail al socio.</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-speech" role="tabpanel" aria-labelledby="nav-speech-tab" tabindex="0">
                    <h1>Controlar los servicios al ingresar en pantalla</h1>
                    <br />
                    <p>Si el adicional es en efectivo, aceptamos el servicio normalmente y lo coordinamos. </p>
                    <p>si tienen adicional y el mismo se abona con tarjeta, verificar que este cobrado, de no estarlo el servicio
                        DEBE ser rechazado con una referencia que indique "Adicional sin cobrar, una vez cobrado pasar a base con xx minutos".</p>
                    <p>xx = (cantidad de minutos que tenía el servicio al momento de ingresar a pantalla).</p>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-contencion" role="tabpanel" aria-labelledby="nav-contencion-tab" tabindex="0">
                    <p> Cuando un socio solicita un servicio por peritaje, el mismo tiene una tolerancia de 30min en destino mientras lo peritan para que luego el mismo móvil
                        lo traslade, pasado este tiempo el móvil se retira y el cliente deberá solicitar el servicio una vez que esté listo para trasladar.</p>
                    <p>En este servicio no le computamos el adicional de diagnóstico por traslado desde taller, pero SI un segundo servicio, si el mismo por cobertura es
                        con costo debe cobrarse el mismo antes de trasladar el vehículo, en caso de que el socio no quiera abonar, el móvil se retira</p>
                </div>
                {/* <div className="tab-pane fade " id="nav-refesvc" role="tabpanel" aria-labelledby="nav-refesvc-tab" tabindex="0">
                <p> Los servicios solicitados por vehículos en parking son condicionales, si el vehículo está en la calle y el móvil que fue no puede cargarlo por falta de 
                    implementos le hacemos un derivado de manera condicional y buscamos móvil con 4 carros o 2 carros y 2 ski de arrastre, siempre que las ruedas se encuentren
                     derechas y sin obstáculos adelante del mismo. Si el vehículo está en parking, pero no está en la calle, el cliente debe destrabar y dejar el vehículo paralelo al
                      cordón, luego de eso debe solicitar el servicio nuevamente.</p>
                </div> */}

                <div className="tab-pane fade lineaGeneral" id="nav-gruat" role="tabpanel" aria-labelledby="nav-gruat-tab" tabindex="0">
                    <p>Para coordinar cualquier servicio de pesados debes tener SI O SI foto de la unidad, caso contrario no el servicio queda en espera hasta recibirla.</p>
                </div>
                <div className="tab-pane fade " id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">
                    <p>Los vehículos que se encuentren sin motor no tienen servicio. El mismo debe estar colocado o dentro del vehículo para poder realizar la asistencia.</p>
                </div>
                <div className="tab-pane fade " id="nav-fc" role="tabpanel" aria-labelledby="nav-fc-tab" tabindex="0">
                <h1>Recordar que este servicio lo brinda SOS a modo de cortesía hacia el cliente, no estamos obligados y se consulta
                        disponibilidad es de lunes a viernes de 9 a 17hs, NO se programan estos servicios. </h1>
                    <br />
                    <p>¿En qué consiste el procedimiento?</p>
                    <p>Se envía un móvil de menor porte (Por lo general, una camioneta con un tenedor adaptado para enganchar el auto) para sacar el vehículo de donde se
                        encuentra y una vez que el vehículo está en la calle, se carga en grúa y es trasladado hasta el destino que nos indica el cliente.</p>
                    <br />
                    <p>Algunas consideraciones a tener en cuenta cuando les consulten disponibilidad:</p>
                    <p>• Lugar físico en donde se encuentre el vehículo (planta alta, planta baja, 1er subsuelo, 2do subsuelo, etc.).</p>
                    <p>• Cómo se encuentra estacionado el vehículo (de frente o de culata).</p>
                    <p>• Altura de la cochera debe ser mayor a 2.5m.</p>
                    <p>• Condiciones de las rampas (curvas, empinadas, etc.)</p>
                    <br />
                    <p>¿Cuándo NO lo podemos brindar?</p>
                    <p>• Cuando el vehículo se encuentre en la planta alta de un estacionamiento, en este caso el cliente deberá sacarlo por sus medios</p>
                    <p> • Cuando se encuentre en un estacionamiento a nivel de la calle, aquí también deberá sacarlo por sus medios.</p>
                    <p> • Cuando las ruedas del vehículo no giren. En este caso deberá sacarlo por sus medios.</p>
                    <p> • Cuando el vehículo este en niveles más abajo del primer subsuelo.</p>
                    <p> • Cuando esté en cocheras particulares (Ejemplo: cochera de una casa)</p>
                </div>
                <div className="tab-pane fade " id="nav-patente" role="tabpanel" aria-labelledby="nav-patente-tab" tabindex="0">
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