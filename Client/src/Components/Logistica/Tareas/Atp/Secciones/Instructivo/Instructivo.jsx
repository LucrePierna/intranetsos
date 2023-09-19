/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'


export default function Procedimientos() {

  useEffect(() => {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    const inicialTab = new bootstrap.Tab(document.querySelector('#nav-inicial-tab'));
    inicialTab.show();

  }, []);



  return (
    <div className='conteinerNav mt-5'>
      <nav className='navConteiner'>
        <div className='nav flex-column nav-tabs me-3' id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="false">Objetivo</button>
          <button className="nav-link custom" id="nav-ingchat-tab" data-bs-toggle="tab" data-bs-target="#nav-ingchat" type="button" role="tab" aria-controls="nav-ingchat" aria-selected="false">Ingreso de Chat</button>
          <button className="nav-link custom" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Motivo de la Consulta</button>
          <button className="nav-link custom" id="nav-cierrechat-tab" data-bs-toggle="tab" data-bs-target="#nav-cierrechat" type="button" role="tab" aria-controls="nav-cierrechat" aria-selected="false">Cierre de Chat</button>
          <button className="nav-link custom" id="nav-finturno-tab" data-bs-toggle="tab" data-bs-target="#nav-finturno" type="button" role="tab" aria-controls="nav-finturno" aria-selected="false">Fin de Turno</button>
          <button className="nav-link custom" id="nav-zona-tab" data-bs-toggle="tab" data-bs-target="#nav-zona" type="button" role="tab" aria-controls="nav-zona" aria-selected="false">Carga de Productos</button>
          <button className="nav-link custom" id="nav-gestiones-tab" data-bs-toggle="tab" data-bs-target="#nav-gestiones" type="button" role="tab" aria-controls="nav-gestiones" aria-selected="false">Otras Gestiones</button>
        </div>
      </nav>
      <div className='h-100 w-100 tab-content text-start mt-3 px-5 m-auto fs-5' id="nav-tabContent">
        <div className="tab-pane fade show active lineaGeneral" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
          <p>Requiere la solución especifica de consultas realizadas por prestadores de red nacional a través de llamados o mensajes que ingresan en la plataforma Chattigo, exclusivo para prestadores. En algunas oportunidades, pueden presentarse consultas de móviles que corresponden a tráfico de red nacional cuando se vean colapsados. En estos casos, se verifica en el servicio a que tráfico corresponde el servicio y se da aviso al 9700 (tráfico local) o 9750 (tráfico nacional) según corresponda. </p>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-ingchat" role="tabpanel" aria-labelledby="nav-ingchat-tab" tabindex="0">
          <h3><u>Ingreso de chat/llamado</u></h3>
          <p>Se comunica prestador, el mismo puede estar identificado con su nombre o número de base.</p>
          <p>Ejemplo: “Buen día, por el caso 20230505300100...”</p>
          <h3><u>Saludo inicial</u></h3>
          <p>No hay un saludo especifico, pero se sugiere “Buen día/tardes/noches, mi nombre es X, en que le puedo ayudar?”</p>
          <p>Se considerará válido en tanto respete los parámetros de trato con el prestador y contenga el nombre del operador que lo atiende. Se evaluará la profesionalidad de la comunicación con el prestador desde lo que marca el SGC de amabilidad y trato. Tutear está permitido, dentro de los límites del respeto y el profesionalismo.
          </p>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <p className='fs-5'>Detectar el motivo de la consulta del prestador, verificar desde que base se está comunicando y cuál es el motivo del contacto. <br />
            Se deberá consultar el código del servicio y a que fecha corresponde. </p>
          <h5><u>Motivos de Contacto</u></h5>
          <div className='text-start d-flex flex-row mt-3 px-5'>
            <ul className='px-5'>
              <li>Prestador informa tener disponibilidad</li>
              <li>Prestador informa que el servicio fue finalizado </li>
              <li>Uso de carros</li>
              <li>Hora de trabajo</li>
              <li>Hora de espera</li>
              <li>Modificación de origen/destino</li>
            </ul>
            <ul >
              <li>Móvil está junto al vehículo sólo </li>
              <li>No puede realizar la asistencia</li>
              <li>Estar en el lugar, pero no tiene capacidad operativa para realizar el servicio </li>
              <li>No hay nadie en destino para recibir</li>
              <li>Llego al lugar, pero el cliente anulo el servicio</li>
              <li>Se necesita realizar trabajo de extracción</li>
            </ul>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-cierrechat" role="tabpanel" aria-labelledby="nav-cierrechat-tab" tabIndex="0">
          <h3><u>Confirmar cierre y comprensión de las partes</u></h3>
          <p>Una vez resuelta la consulta, indagar si el prestador requiere ayuda en algo más, en caso de obtener una respuesta negativa, finalizar chat agradeciendo por la comunicación y despedirse amablemente. “¿Puedo ayudarle en algo más?” “Gracias por comunicarse, buenas tardes/noches” </p>
          <h3><u>Registrar datos en el servicio</u></h3>
          <p>Dejar en referencias de derivación en los servicios correspondientes la consulta del prestador, el motivo de consulta, si hubo contacto o no con el cliente y si fue resuelta la misma. </p>
          <h3><u>Cerrar/ finalizar</u></h3>
          <p>Al finalizar la consulta y luego de dejar los registros, clasificar correctamente el motivo de cierre: Anulación de servicio - Consulta general - Modificación de servicio – Prestadores. </p>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-finturno" role="tabpanel" aria-labelledby="nav-finturno-tab" tabIndex="0">
          <h3><u>Transferir Chat's</u></h3>
          <p>Al finalizar la jornada, habiendo quedado consultas pendientes de cerrar, el operador de chattigo deberá transferir chat al operador que esté de turno dando aviso previo al mismo o a un supervisor/back office.</p>
          <h3><u>Imprtante</u></h3>
          <p>Al momento de finalizar la tarea y desloguearse, asegurarse de “Finalizar sesión” y que no quede logueado el usuario, ya que continuarán ingresando chats que no serán atendidos generando demoras y posibles reclamos.</p>
        </div>
        <div className="tab-pane fade " id="nav-zona" role="tabpanel" aria-labelledby="nav-zona-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-procedimiento-tab" data-bs-toggle="tab" data-bs-target="#nav-procedimiento" type="button" role="tab" aria-controls="nav-procedimiento" aria-selected="true">Procedimiento</button>
              <button class="nav-link sub" id="nav-hstrabesp-tab" data-bs-toggle="tab" data-bs-target="#nav-hstrabesp" type="button" role="tab" aria-controls="nav-hstrabesp" aria-selected="false">Hora de Trabajo/Espera</button>
              <button class="nav-link sub" id="nav-carros-tab" data-bs-toggle="tab" data-bs-target="#nav-carros" type="button" role="tab" aria-controls="nav-carros" aria-selected="false">Uso de Carros</button>
              <button class="nav-link sub" id="nav-extraccion-tab" data-bs-toggle="tab" data-bs-target="#nav-extraccion" type="button" role="tab" aria-controls="nav-extraccion" aria-selected="false">Extracción</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-procedimiento" role="tabpanel" aria-labelledby="nav-procedimiento-tab" tabindex="0">
              <p>
                Esta gestión se realiza cuando un prestador solicita uso de carros, hora de trabajo, hora de espera o extracción. Los prestadores tienen cargado dentro de su grilla de precios el saldo de cada producto, a excepción de la extracción. Para cargar un producto se debe ingresar al servicio, en la solapa de “Prestadores”, tocar el botón de “Editar” que está arriba a la derecha y, en la línea que dice “Listado de productos” que esta debajo de los datos del prestador, tocar el botón de “Agregar”. Allí aparecerá una ventana para seleccionar el producto correspondiente.
              </p>
            </div>
            <div class="tab-pane fade px-3 py-5" id="nav-hstrabesp" role="tabpanel" aria-labelledby="nav-hstrabesp-tab" tabindex="0">
              <p>Al seleccionar el producto, aparecerá automáticamente el precio unitario según lo que se haya pactado con el prestador, esto no se modifica. Luego se debe indicar la cantidad de horas de trabajo/espera que solicite el prestador, una vez cargado esto no se debe modificar nada más, solo tocar “Guardar”</p>
            </div>
            <div class="tab-pane fade px-3 py-5" id="nav-carros" role="tabpanel" aria-labelledby="nav-carros-tab" tabindex="0">
              <p>Al seleccionar el producto, aparecerá automáticamente el precio unitario según lo que se haya pactado con el prestador, esto no se modifica. Si el prestador nos indica que debe usar 1 o 2 carros, se debe cargar como “Uso de carros”. Si el prestador debe usar 3 o 4 carros, se debe cargar “Uso de 4 carros”. No se debe modificar más nada, solo tocar “Guardar”.</p>
            </div>
            <div class="tab-pane fade px-3 py-5" id="nav-extraccion" role="tabpanel" aria-labelledby="nav-extraccion-tab" tabindex="0">
              <p>En este caso el precio no está pactado, ya que cada extracción tiene un saldo diferente y cada compañía tiene un tope cubierto distinto. Se debe verificar el radio de la cobertura del cliente, allí ver el tope cubierto por extracción. Cuando se seleccione el producto no aparecerá ningún precio unitario, se debe indicar “1” en cantidad y modificar la línea de “importe corregido”. </p>
              <h3><u>¡IMPORTANTE!</u></h3>
              <p>Al momento de cargar el producto “Extracción”, se debe verificar en la grilla del prestador si el mismo es responsable inscripto o monotributista, ya que el sistema agrega el IVA dependiendo los datos fiscales del prestador. Si el prestador es monotributista, se agrega el monto cubierto por extracción tal cual está en la grilla. Si el prestador es responsable inscripto, se debe quitar el 21% del valor de la extracción. Ejemplo: Prestador responsable inscripto cobra $5000 por extracción y el cliente tiene cubierto $3000. Se calcula $3000 / 1.21 = $2479.3. En este caso, se cargaría el producto con un valor de $2479.3 y el cliente abona una diferencia de $2000. </p>
            </div>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-gestiones" role="tabpanel" aria-labelledby="nav-gestiones-tab" tabIndex="0">
          <h3><u>Cliente envía ubicación/fotos por chat</u></h3>
          <p>Se deberá solicitar al cliente la patente del vehículo y dejar asentado en el servicio la información.</p>
          <h3><u>Cliente solicita un servicio por chattigo</u></h3>
          <p>Se deberá informar al cliente que se contacte con el teléfono correspondiente para solicitar el servicio. Se recomienda tener un speech ya armado en un bloc de notas, por ejemplo: “Bienvenido al área de prestadores de SOS Red de Asistencia. Si desea solicitar una asistencia o consultar un servicio en curso, debe mandar un WhatsApp al 1128080012, o bien llamar al 0800 333 6524. Muchas gracias.”</p>
        </div>
      </div>
    </div >
  )
}
