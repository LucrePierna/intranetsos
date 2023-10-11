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
                     {/*<button className="nav-link custom" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Tarea</button> */}
                </div>
            </nav>
            <div className="h-100 w-100 tab-content text-start px-5 m-auto " id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
                <p>Las asistencias son de cordón a cordón, por lo que, si al llegar el móvil el vehículo se encontrara en un estacionamiento, vereda o jardín de un domicilio,
                 el cliente debe sacarlo a la calle (independientemente de que lo haya dejado el cliente o una grua nuestra en donde se encuentra). Solo podremos intervenir cuando se encuentre en una vereda por consecuencia de un siniestro, cobrando el costo de extracción
                  correspondiente según la cobertura del asegurado.</p>

                </div>
                <div className="tab-pane fade " id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabindex="0">
                <p> Si el vehículo es bajo de fábrica y el móvil que fue al lugar no puede cargarlo o no quiere hacerlo por miedo a dañarlo, por más que cliente firme 
                    conformidad de arrastre, se procederá a solicitarle foto del vehículo y realizar un derivado a otro móvil. Al nuevo móvil se le enviara la foto del
                     vehículo para que confirme si lo cargará antes de ir al lugar. Se le indica al cliente que ira otro móvil de manera condicional a intentar cargar 
                     aclarándole que debe firmar conformidad y que el vehículo puede sufrir daños en la carga. Si el segundo móvil que va al lugar tampoco puede cargarlo
                      se le ofrecerá servicio por reintegro al socio.</p>
                </div>
                <div className="tab-pane fade " id="nav-operatoria" role="tabpanel" aria-labelledby="nav-operatoria-tab" tabindex="0">
                    <p>Los servicios con adicionales cobrados desde SOS: se envía factura desde la empresa.</p>
                    <p>Los servicios que cobre un móvil por cualquier medio (Efectivo, transferencia o tarjeta): corresponde que el chofer envíe la factura,
                        TODOS los choferes tienen para facturar, ya sea el chofer o el titular.</p>

                </div>
                <div className="tab-pane fade " id="nav-speech" role="tabpanel" aria-labelledby="nav-speech-tab" tabindex="0">
                <p>Controlar los servicios al ingresar en pantalla, si tienen adicional y el mismo se abona con tarjeta, verificar que este cobrado, de no estarlo el servicio
                     DEBE ser rechazado con una referencia que indique "Adicional sin cobrar, una vez cobrado pasar a base con xx minutos".</p>
                     <br />
                    <p>xx = (cantidad de minutos que tenía el servicio al momento de ingresar a pantalla).</p>

                </div>
                <div className="tab-pane fade " id="nav-contencion" role="tabpanel" aria-labelledby="nav-contencion-tab" tabindex="0">
                <p> Cuando un socio solicita un servicio por peritaje, el mismo tiene una tolerancia para la vuelta de 30min, en este servicio no le computamos el adicional 
                    de diagnóstico de traslado desde un taller, pero SI un segundo servicio, si el mismo por cobertura es con costo debe cobrarse el mismo antes de trasladar
                    el vehículo.</p>
                </div>
                {/* <div className="tab-pane fade " id="nav-refesvc" role="tabpanel" aria-labelledby="nav-refesvc-tab" tabindex="0">
                <p> Los servicios solicitados por vehículos en parking son condicionales, si el vehículo está en la calle y el móvil que fue no puede cargarlo por falta de 
                    implementos le hacemos un derivado de manera condicional y buscamos móvil con 4 carros o 2 carros y 2 ski de arrastre, siempre que las ruedas se encuentren
                     derechas y sin obstáculos adelante del mismo. Si el vehículo está en parking, pero no está en la calle, el cliente debe destrabar y dejar el vehículo paralelo al
                      cordón, luego de eso debe solicitar el servicio nuevamente.</p>
                </div> */}

                <div className="tab-pane fade " id="nav-gruat" role="tabpanel" aria-labelledby="nav-gruat-tab" tabindex="0">
                    <p>Para coordinar cualquier servicio de pesados debes tener SI O SI foto de la unidad, caso contrario no el servicio queda en espera hasta recibirla.</p>
                </div>
                <div className="tab-pane fade " id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">
                    ...
                </div>
            </div >
        </div>
    )
}