import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'

export default function Trasvase() {
  useEffect(() => {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    const inicialTab = new bootstrap.Tab(document.querySelector('#nav-descripcion-tab'));
    inicialTab.show();
  }, []);

  return (
    <div className='conteinerNav mt-5 ' >
      <nav className='navConteiner'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="false">Descripcion</button>
          <button className="nav-link custom" id="nav-etapas-tab" data-bs-toggle="tab" data-bs-target="#nav-etapas" type="button" role="tab" aria-controls="nav-etapas" aria-selected="false">Etapas</button>
          <button className="nav-link custom" id="nav-derivacion-tab" data-bs-toggle="tab" data-bs-target="#nav-derivacion" type="button" role="tab" aria-controls="nav-derivacion" aria-selected="false">Derivacion</button>
        </div>
      </nav>
      <div className="tab-content h-100 w-100 fs-5 text-start " id="nav-tabContent">
        <div className="tab-pane fade show active lineaGeneral" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
          <h3>Es la prestación que se realiza a las unidades de categoría “pesados” que transportan líquidos/químicos y consiste en traspasar un líquido de un camión cisterna a otro. El servicio se presta porque hay una falla en el camión, acoplado o semirremolque, Puede haber derrame o NO. </h3>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabindex="0">
          <h3><u>Analizar el servicio atendiendo principalmente a:</u></h3>
          <ul className='listaGral'>
            <li>Origen.</li>
            <li>Marca y modelo de la unidad.</li>
            <li>Tipo de combustible.</li>
            <li>Cantidad de litros.</li>
            <li>Dettame SI / NO.</li>
            <li>Teléfono de contacto del chofer o persona junto a la unidad.</li>
          </ul>
        </div>
        <div className="tab-pane lineaGeneral" id="nav-derivacion" role="tabpanel" aria-labelledby="nav-derivacion-tab" tabindex="0">
              <h3><u>Una vez analizado y corroborado los datos el operador consultará disponibilidad con las bases</u></h3>
              <ul className='listaGral'>
                <li>13191 - J & D SERVICIOS AMBIENTALES SRL = Llamado telefónico.</li>
                <li>11620 - ASIST CARGO SA = por correo electrónico.</li>
              </ul>
        </div>
      </div>
    </div>
  )
}
