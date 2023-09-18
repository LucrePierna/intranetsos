import React from 'react'

export default function Anulacion() {
  return (
    <div className='conteinerNav mt-5'>
      <div className="tab-pane px-4 mt-4">
        <nav>
          <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div className='tab-content d-flex flex-row mt-3 m-auto fs-5'>
            <ul>
              <h5><u>Vehículo Modificado</u></h5>
              <p>Se utilizará cuando la grúa esté en origen y detecte que el vehículo sufrió alguna modificación que imposibilite cargar al vehículo, por ejemplo, suspensión, cajas o cupulas que excedan el alto de vehículo de fábrica. <br />
                Ante esta situación el operador deberá informar al cliente que no cuenta con el servicio y solicitar la autorización de un supervisor/Back Office para que la grúa se retire. </p>

              <h5><u>Derivado a Otro Móvil</u></h5>
              <p>Se utiliza cuando se detecta que, por algún motivo, la grúa no tiene la capacidad para realizar el servicio, pero si corresponde brindar servicio al cliente.  Por ejemplo, por dimensiones, por falta de carros</p>

              <h5><u>Imposible Transitar el Servicio</u></h5>
              <p>Aplica esta anulación cuando la grúa llega al lugar de asistencia y detecta que no puede acceder al vehículo en, por ejemplo, algún caso de inundación. <br />
                De no existir camino alternativo el móvil debe enviar fotos y se debe autorizar la retirada con un supervisor/Back Office <br />
                Se informa la situación al cliente y que debe solicitar el servicio cuando el camino se encuentre en condiciones </p>
            </ul>
            <ul>
              <h5><u>Colisión Móvil Asignado</u></h5>
              <p>Se asigna este cierre cuando en casos de que el prestador no pueda realizar el servicio, por ejemplo, que se le rompió la grúa, el operador deberá indagar si la grúa se encontraba en viaje a destino o si ya cargo al vehículo. <br />
                Solicitar a prestador ubicación y registrarla en el nuevo servicio.<br />
                Informar al cliente buscaremos Alternativa. <br />
                Registrar lo informado </p>

              <h5><u>Derivado a Otro Móvil</u></h5>
              <p>Se utiliza al enviar móvil mecánico que no dio solución y se necesita realizar el traslado; o al llegar la grúa, que no tiene la capacidad para trasladarlo, pero si corresponde brindar servicio.   </p>

              <h5><u>No Se Encontró Cliente</u></h5>
              <p>Prestador no encontró vehículo ni al cliente, por lo cual no se realiza el servicio. <br />
                Recordar se debe intentar llamar al menos 3 veces al cliente.   </p>

              <h5><u>Al Llegar Móvil Cliente</u></h5>
              <p>Móvil llega en tiempo y forma al lugar, pero por motivos ajenos a SOS y al prestador no puede realizarse el servicio   </p>
            </ul>
          </div>
        </div>
      </div>
    </div>


  )
}
