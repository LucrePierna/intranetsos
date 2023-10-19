import React from 'react'
import '../../../../EstilosGlobales/General.css'
import * as bootstrap from 'bootstrap'

export default function Instructivo() {

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
          <button className="nav-link custom active" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="true">Descripción</button>
          <button className="nav-link custom" id="nav-etapas-tab" data-bs-toggle="tab" data-bs-target="#nav-etapas" type="button" role="tab" aria-controls="nav-etapas" aria-selected="false">Etapas</button>
          <button className="nav-link custom" id="nav-operatoria-tab" data-bs-toggle="tab" data-bs-target="#nav-operatoria" type="button" role="tab" aria-controls="nav-operatoria" aria-selected="false">Operatoria</button>
          <button className="nav-link custom" id="nav-speech-tab" data-bs-toggle="tab" data-bs-target="#nav-speech" type="button" role="tab" aria-controls="nav-speech" aria-selected="false">Speech</button>
          <button className="nav-link custom" id="nav-contencion-tab" data-bs-toggle="tab" data-bs-target="#nav-contencion" type="button" role="tab" aria-controls="nav-contencion" aria-selected="false">Contención</button>
          <button className="nav-link custom" id="nav-refesvc-tab" data-bs-toggle="tab" data-bs-target="#nav-refesvc" type="button" role="tab" aria-controls="nav-refesvc" aria-selected="false">Referencia en servicio</button>
          <button className="nav-link custom" id="nav-gruat-tab" data-bs-toggle="tab" data-bs-target="#nav-gruat" type="button" role="tab" aria-controls="nav-gruat" aria-selected="false">Grúa triple</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto " id="nav-tabContent">
        <div className="tab-pane fade show active lineaGeneral" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
          <p>Traslado mediante grúa multitraslado, desde el lugar de origen al destino final, dicha modalidad consta de varias instancias durante el traslado y a su vez nos permite contar con mayor disponibilidad de prestadores locales para traslados en zona o a hacia localidades aledañas. <br />
            Reducir el tiempo de espera para los servicios con destino a las bases predeterminadas (Capital Federal y Gran BS As, Córdoba y Rosario) esto a consecuencia de la gran demanda de los corredores afectados o por la cantidad de km a recorrer.</p>
          <h1><u>DESCRIPCIÓN</u></h1>
          <ul className='px-5 listaGral'>
            <li>Es un servicio que se brinda a todos los vehículos que se encuentren dentro de un corredor habilitado para dicha modalidad.</li>
            <li>Este tipo de traslado incluye todos los vehículos cuyas categorías sean Liviano, Liviano Excedido y Liviano Especial.</li>
            <li>El multitraslado de los vehículos se desarrolla en tres etapas: <b>Inicio</b>, <b>Transportin</b>, <b>Distribución</b></li>
          </ul>
          <p>Esta modalidad requiere un continuo control y seguimiento hasta la entrega del vehículo.</p>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabindex="0">
          <h1><u>ETAPAS</u></h1>
          <ol className='px-5 listaGral'>
            <li><u>TRANSPORTIN INICIO:</u> En esta etapa realizamos la búsqueda de la unidad en la zona de origen, en el corredor delimitado para este tipo de asistencia, el destino será la base en la cual el vehículo queda a resguardo, quedando a si el primer servicio como Multitraslado y TRANSPORTIN inicio.</li>
            <li><u>TRANSPORTIN:</u> Es el traslado del bloque de vehículos en un camión de Gran porte (Grúa mosquito) desde la base de recolección hasta la base de distribución asignada, quedando asi el segundo servicio como multitraslado y Transportin.</li>
            <li><u>TRANSPORTIN DISTRIBUCION:</u> coordinación del traslado del vehículo al destino final que indico el cliente</li>
          </ol>
          <h1><u>ALCANCE DE APLICACIÓN</u></h1>
          <ul className='px-5 listaGral'>
            <li>La falla de los vehículos no debe afectar la estructura de los mismos ni impedir su rodamiento normal. Según el corredor, se podrá consultar si se puede realizar alguna excepción en cuando a esta exclusión.</li>
            <li>Se considerará las características del vehículo; altura, largo, ruedas duales, cúpulas u otra característica que nos facilite la carga y descarga del TRANSPORTIN.</li>
            <li>El Origen del servicio debe encontrarse dentro de los limites estipulados en los distintos corredores o agendas informadas por los prestadores con su correspondiente base de guarda asignada.</li>
            <li>Para poder concretar la modalidad se deberá contar con la documentación que se requiere (llaves, tarjeta verde y autorización), esto sin excepción.</li>
          </ul>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-operatoria" role="tabpanel" aria-labelledby="nav-operatoria-tab" tabindex="0">
          <h1><u>ASISTENCIA AL VIAJERO</u></h1>
          <p>En esta modalidad el vehículo viaja solo por esta condición se coordina la asistencia de la siguiente manera:</p>
          <ol className='px-5 listaGral'>
            <li>Pasajes para 2 ocupante que corresponderían acompañar el traslado en la grúa.</li>
            <li>Si son más de 2 personas, al resto se brinda la asistencia según lo estipule la grilla en cuanto al alcance y topes.</li>
            <li>En el caso de que S.O.S contrate una combi para algún corredor, se respetará la cobertura del convenio según el alcance (cantidad de personas y si le corresponde la asistencia), no obstante, no se tendrá en cuenta topes.</li>
          </ol>
          <h1><u>ADICIONALES</u></h1>
          <p>El adicional debe ser abonado de la siguiente forma:</p>
          <ol className='px-5 listaGral' type='A'>
            <li> Tarjeta de Crédito o Débito.</li>
            <li> Transferencia.</li>
            <li> Efectivo, esto solo en el caso de que el prestador realice las tres etapas del servicio.</li>
          </ol>
          <h1><u>PLAZOS DE ENTREGA:</u></h1>
          <p>El plazo general es de 5 días hábiles dicha información se la brindaremos en la primera instancia de contención donde se verifican los datos registrados en el servicio y se corrobora la cobertura de cliente</p>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-speech" role="tabpanel" aria-labelledby="nav-speech-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active " id="nav-pag1" role="tabpanel" aria-labelledby="nav-pag1-tab" tabindex="0">
              <p>“Buenos/as días/tardes/noches sr/a, me comunico de ……., por el traslado solicitado para el vehículo …, hablo con el sr/a …? Soy la persona encargada de trabajar en su servicio, quería validarle/corroborar los datos registrados (validación del servicio)”.</p>
              <p>“Me comunico para informarle que la modalidad para realizar su traslado (opcional: “por las características de su servicio”) es la siguiente, coordinamos con un prestador para retirar el vehículo del lugar, quedaría en guarda en la base de nuestro prestador, y en el transcurso de 5 días hábiles se lo entregamos en el destino que usted nos indique”.</p>
              <p>“Debe entregar tarjeta verde, llaves y autorización con la firma del titular o responsable del vehículo para que pueda desplazarse solo”.</p>
              <p>“En cuanto a las personas que están junto al vehículo, le brindamos dos pasajes de colectivo completamente cubiertos, para que puedan regresar a su domicilio (en caso de tener viajero), y al resto de las personas, se les brinda la cobertura que le brinda su compañía”.</p>
              <p>“Usted debe retirar todos los objetos de valor que se encuentren en el vehículo, ya que la compañía no se responsabiliza por las perdidas, de todos modos, el prestador que va al lugar completa un inventario para registrar el estado del vehículo y los objetos que queden dentro del vehículo, como batería, ruedas de auxilio y todo lo necesario, para que usted lo pueda corroborar cuando le entreguemos su vehículo”.</p>
            </div>
            <div className="tab-pane fade" id="nav-pag2" role="tabpanel" aria-labelledby="nav-pag2-tab" tabindex="0">
              <p><u>Si el cliente consultara el por qué se lo entregaríamos en ese tiempo y no hay disponibilidad en este momento la respuesta es la siguiente</u><br />
                “Por cuestiones de logística se coordina de este modo teniendo en cuenta los km a recorrer, su vehículo sale desde la base de nuestro prestador y viaja en un móvil que tiene mayor capacidad”.</p>
              <p><u>En caso de que el cliente no acepte</u><br />
                “Si usted quiere puedo volver a comunicarme, para que lo pueda analizar”.</p>
              <p><u>Si el cliente insiste en que quiere hacer el traslado directo:</u><br />
                “Lo que podemos hacer en caso de que no acepte la modalidad, es realizar el traslado a la localidad más cercana con infraestructura, para que intente solucionar allí, en caso de querer continuar viaje a su destino luego de este traslado, el servicio queda contabilizado, ya que utilizó el servicio y podría tener costo”</p>
              <p><b>No está permitido realizar postas para el traslado.</b></p>
            </div>
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-pag1-tab" data-bs-toggle="tab" data-bs-target="#nav-pag1" type="button" role="tab" aria-controls="nav-pag1" aria-selected="true">Pág 1</button>
                <button class="nav-link sub" id="nav-pag2-tab" data-bs-toggle="tab" data-bs-target="#nav-pag2" type="button" role="tab" aria-controls="nav-pag2" aria-selected="true">Pág 2</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-contencion" role="tabpanel" aria-labelledby="nav-contencion-tab" tabindex="0">
          <p><b>Comprenderá de 4 instancias de contacto con el cliente para informar la trazabilidad de su servicio</b></p>
          <ol className='px-5 listaGral'>
            <li> Se realiza llamado de contención se validan datos, se informa modalidad, informar que su vehículo se retira con la menor demora posible, es llevado a nuestra base en la localidad a resguardo y en un plazo de 5 días hábiles es entregado en el destino (contención inicial)</li>
            <li> instancia de contención, confirmar a cliente a las 48 hs que “su vehículo está en proceso de traslado y nos estaremos comunicando para informarle la fecha y horario de entrega en su domicilio/ taller /concesionario etc. “</li>
            <li> instancia de contención se lo llamará a cliente para informar que” su vehículo será entregado en el transcurso del día xxxx “</li>
            <li> instancia, al monumento de la distribución se le informara a cliente que el vhc esta en camino al destino final.</li>
          </ol>
          <p><u>Todas las instancias de contención con el cliente deben estar plasmadas en referencia de contención y la misma debe ser en el servicio que corresponda de acuerdo a la instancia en la que se encuentra la gestión</u></p>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-refesvc" role="tabpanel" aria-labelledby="nav-refesvc-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active " id="nav-p1" role="tabpanel" aria-labelledby="nav-p1-tab" tabindex="0">
              <h1><u>DERIVACIÓN (requerimiento REFERENCIA DE TRANSPORTIN)</u></h1>
              <ul className='px-5 listaGral'>
                <li>En una referencia de derivación registrar lo siguiente:
                  <ul>
                    <li>¿Acepto la modalidad?</li>
                    <li>Plazos de entrega informada:</li>
                    <li>Documentación a entregar:</li>
                    <li>Método de pago:</li>
                    <li>Viajero:</li>
                  </ul>
                </li>
              </ul>
              <h1><u>ADICIONALES</u></h1>
              <p>los adicionales de los servicios que son traslados mediante la modalidad Transportin se realizan mediante el link de pago o por transferencia</p>
              <ul className='px-5 listaGral'>
                <li>El cliente abona el servicio por <u>link de pago</u>, se debe verificar en la pagina de MercadoPago si impacto la operación en caso de ser así se da curso al servicio. Se debe verificar que el pago quede impactado en sistema Astor y Call Ora.</li>
                <li>El cliente abona el servicio por <u>transferencia</u> operador al momento de la gestión del servicio y de informar la cobertura debe enviar los datos de la cuenta de SOS para la operación mediante transferencia bancaria debe quedar atento a solicitar el comprobante de la operación y foto de DNI para adjuntar en sistema Astor, a su vez debe cargar la solapa con los datos del cliente para que la información se envié por mail al sector de finanza para la factura.</li>
              </ul>
              <h1><u>COTIZACIONES (además de cargar producto)</u></h1>
              <ul className='px-5 listaGral'>
                <li>Se realiza traslado desde origen a destino, cotización $.... ó se realiza traslado de corredor …, cotización $</li>
                <li>Se carga guarda de vehículo, por x días</li>
                <li>Se carga hora de trabajo o "x" horas de trabajo, correspondiente a "x" vehículos</li>
              </ul>
            </div>
            <div className="tab-pane fade" id="nav-p2" role="tabpanel" aria-labelledby="nav-p2-tab" tabindex="0">
              <u><h1>REFERENCIA DE DERIVACIÓN</h1><p>(en caso de que vaya en mosquito o grúa triple):</p></u>
              <ul className='px-5 listaGral'>
                <li>Corresponde a traslado en servicio de transportín N° (servicio original) …</li>
              </ul>
              <h1><u>DERIVACIÓN PARA SERVICIOS DE GRÚA MÚLTITRASLADO</u></h1>
              <p><u>(servicios de Koller, Benevento, Vasallo)</u></p>
              <ul className='px-5 listaGral'>
                <li><u>Recorrido de ida:</u> grúa múltiple sale de … con los vhcs: Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) descarga en … los siguientes vhcs…</li>
                <li><u>Recorrido de vuelta:</u> grúa múltiple sale de … con los vhcs: Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) para descargar en base ...</li>
              </ul>
              <h1><u>DERIVACIÓN DE TRASLADO CON GRÚA TRIPLE</u></h1>
              <ul className='px-5 listaGral'>
                <li><u>Recorrido de ida:</u> grúa triple sale de … con los vhcs: Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) descarga en … los siguientes vhcs…</li>
                <li><u>Recorrido de vuelta:</u> grúa triple sale de … con los vhcs: Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) / Vehículo - patente (destino final: …) para descargar en base ...</li>
              </ul>
            </div>
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-p1-tab" data-bs-toggle="tab" data-bs-target="#nav-p1" type="button" role="tab" aria-controls="nav-p1" aria-selected="true">Pág 1</button>
                <button class="nav-link sub" id="nav-p2-tab" data-bs-toggle="tab" data-bs-target="#nav-p2" type="button" role="tab" aria-controls="nav-p2" aria-selected="true">Pág 2</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-gruat" role="tabpanel" aria-labelledby="nav-gruat-tab" tabindex="0">
          <h1><u>Descripción</u></h1>
          <p>Grúa Tripe (móvil 1211).
            Es la unidad propia de SOS disponible para trasladar un máximo de 3 vehículos bajo la modalidad trasportín. Tiene sus recorridos propios y se pueden generar otros de acuerdo a la demanda en la zona. Cabe destacar que el móvil no cotiza por servicios y que solo traslada vehículos de clientes de SOS.
          </p>
          <h1><u>Etapas</u></h1>
          <p>Una vez recolectados los vehículos se deberá coordinar el móvil con el prestador Vasallo Base 13480 y con los datos de los vehículos a trasladar. Para ello se generará un código de manera manual con los siguientes datos:</p>
          <ul className='text-center list-unstyled h-50 w-50 m-auto py-4 listaGral'>
            <li>Cliente: Grúa Triple.</li>
            <li>Patente: TTT001.</li>
            <li>Radio: Servicio Privado Trasportín.</li>
            <li>Tipo de vehículo: Pesado Categoría 1.</li>
            <li>Origen: Desde donde sale el mosquito.</li>
            <li>Destino: Destino Final del mosquito.</li>
          </ul>
          <p>En referencias de derivación: Registrar los vehículos que traslada en el trayecto.</p>
          <p>Luego el operador deberá asignar el servicio por reintegro a base 10361 Reintegro Córdoba, pero con el cierre TRANSPORTIN ENLACE.</p>
        </div>
      </div>
    </div >
  )
}

