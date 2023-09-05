/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react'
import * as bootstrap from 'bootstrap'
import '../../../../EstilosGlobales/General.css'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


export default function Procedimientos() {

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })



  return (
    <div className='d-flex align-items-start flex-colum justify-content-center mx-auto h-50 w-50 mt-5'>
      <nav className='d-flex align-items-start flex-colum'>
        <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="nav-bahia-tab" data-bs-toggle="tab" data-bs-target="#nav-bahia" type="button" role="tab" aria-controls="nav-bahia" aria-selected="true">Bahia Blanca</button>
          <button class="nav-link" id="nav-costa-tab" data-bs-toggle="tab" data-bs-target="#nav-costa" type="button" role="tab" aria-controls="nav-costa" aria-selected="false">Costa</button>
          <button class="nav-link" id="nav-cuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-cuyo" type="button" role="tab" aria-controls="nav-cuyo" aria-selected="false">Cuyo</button>
          <button class="nav-link" id="nav-noa-tab" data-bs-toggle="tab" data-bs-target="#nav-noa" type="button" role="tab" aria-controls="nav-noa" aria-selected="false">NOA</button>
          <button class="nav-link" id="nav-patagonia-tab" data-bs-toggle="tab" data-bs-target="#nav-patagonia" type="button" role="tab" aria-controls="nav-patagonia" aria-selected="false">Patagonia</button>
          <button class="nav-link" id="nav-stafe-tab" data-bs-toggle="tab" data-bs-target="#nav-stafe" type="button" role="tab" aria-controls="nav-stafe" aria-selected="false">Santa Fe</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-bahia" role="tabpanel" aria-labelledby="nav-bahia-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-orgzn-tab" data-bs-toggle="tab" data-bs-target="#nav-orgzn" type="button" role="tab" aria-controls="nav-orgzn" aria-selected="true">Organización de la Zona</button>
              <button class="nav-link" id="nav-consgral-tab" data-bs-toggle="tab" data-bs-target="#nav-consgral" type="button" role="tab" aria-controls="nav-consgral" aria-selected="false">Consideraciones Generales</button>
              <button class="nav-link" id="nav-zninduc-tab" data-bs-toggle="tab" data-bs-target="#nav-zninduc" type="button" role="tab" aria-controls="nav-zninduc" aria-selected="false">Zona de Induccion</button>
              <button class="nav-link" id="nav-zndificil-tab" data-bs-toggle="tab" data-bs-target="#nav-zndificil" type="button" role="tab" aria-controls="nav-zndificil" aria-selected="false">Zona de Dificil Acceso</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-orgzn" role="tabpanel" aria-labelledby="nav-orgzn-tab" tabindex="0">
              <p>Bahía blanca locales <br></br>
                Bahía blanca interior (este, oeste, norte y sur)  </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-consgral" role="tabpanel" aria-labelledby="nav-consgral-tab" tabindex="0">
              <p>Tener en cuenta que para aquellos servicios con kilómetros primero se debe consultar a los prestadores eventuales de la zona.

                Por instrucción del Área de Prestadores la Base 11679 - Giberti Omar tiene prioridad para los servicios con kilómetros, sobre los otros móviles de Bahía. El móvil 705 solo realiza traslados de este tipo, mientras que el 706 también realiza estos servicios, pero dentro de la provincia, ya que no tiene habilitado el permiso para salir.

                Tener en cuenta que el móvil 1095 correspondiente a la Base 13077 - Briseña Matias, actualmente sale de la localidad de Punta Alta.

                En aquellos casos de falta de disponibilidad en la ciudad de Bahía Blanca, tener en consideración al prestador de Punta Alta de la Base 11513 - Logística Puerto Rosales, ya que realiza servicios locales en dicha zona.

                La ciudad de Bahía Blanca cuenta con un móvil de mecánica.

                No todos los móviles pueden dirigirse a la zona de Tornquist, debido a las exigencias de la caminera.   </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-zninduc" role="tabpanel" aria-labelledby="nav-zninduc-tab" tabindex="0">
              <p>Con respecto a las inducciones a mecánica, deberán realizarse dentro de la ciudad de Bahía Blanca.   </p>
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-zndificil" role="tabpanel" aria-labelledby="nav-zndificil-tab" tabindex="0">
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
        <div class="tab-pane fade" id="nav-costa" role="tabpanel" aria-labelledby="nav-costa-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="nav-cuyo" role="tabpanel" aria-labelledby="nav-cuyo-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="nav-noa" role="tabpanel" aria-labelledby="nav-noa-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="nav-patagonia" role="tabpanel" aria-labelledby="nav-patagonia-tab" tabindex="0">...</div>
        <div class="tab-pane fade" id="nav-stafe" role="tabpanel" aria-labelledby="nav-stafe-tab" tabindex="0">...</div>
      </div>
    </div>
  )
}