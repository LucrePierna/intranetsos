import React, { useEffect } from 'react'
import * as bootstrap from 'bootstrap'
import Mapas from '../Mapas/Mapas';

export default function Instructivo() {

  useEffect(() => {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
      const tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
      })
    })
    const inicialTab = new bootstrap.Tab(document.querySelector('#nav-uruguay-tab'));
    inicialTab.show();

  }, []);



  return (
    <div className='d-flex align-items-start flex-colum justify-content-center mx-auto h-50 w-50 mt-5'>
      <nav className='d-flex align-items-start flex-colum'>
        <div class="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link" id="nav-uruguay-tab" data-bs-toggle="tab" data-bs-target="#nav-uruguay" type="button" role="tab" aria-controls="nav-uruguay" aria-selected="false">Uruguay</button>
          <button className="nav-link" id="nav-brasil-tab" data-bs-toggle="tab" data-bs-target="#nav-brasil" type="button" role="tab" aria-controls="nav-brasil" aria-selected="false">Brasil</button>
          <button className="nav-link" id="nav-chile-tab" data-bs-toggle="tab" data-bs-target="#nav-chile" type="button" role="tab" aria-controls="nav-chile" aria-selected="false">Chile</button>
          <button className="nav-link" id="nav-contraprestacion-tab" data-bs-toggle="tab" data-bs-target="#nav-contraprestacion" type="button" role="tab" aria-controls="nav-contraprestacion" aria-selected="false">Contraprestacion</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade" id="nav-uruguay" role="tabpanel" aria-labelledby="nav-uruguay-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-terrestre-tab" data-bs-toggle="tab" data-bs-target="#nav-terrestre" type="button" role="tab" aria-controls="nav-terrestre" aria-selected="true">Terrestres</button>
              <button class="nav-link" id="nav-Fluvial-tab" data-bs-toggle="tab" data-bs-target="#nav-Fluvial" type="button" role="tab" aria-controls="nav-Fluvial" aria-selected="false">Fluvial</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-terrestre" role="tabpanel" aria-labelledby="nav-terrestre-tab" tabindex="0">
              <ul>
                <h4>Puntos importantes.</h4>
                <li>Origen en Uruguay.</li>
                <li>Destino final en Argentina.</li>
                <li>Paso fronterizo mas próximo.</li>
                <li>Estado del paso y horarios para cruzar la frontera.</li>
                <li>Cliente debe acompañar el trasaldo.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul>
                <h4>Pasos fronterizos: </h4>
                <li>Fray Bentos - Gualeguaychú</li>
                <li>Paysandú - Colon</li>
                <li>Salto grande - concordia</li>
              </ul>
            </div>
            <div class="tab-pane fade" id="nav-Fluvial" role="tabpanel" aria-labelledby="nav-Fluvial-tab" tabindex="0">
              <h5 className='mt-3 fs-4 fw-bold'>Los traslados se realizan por medio de Buque-Bus</h5>
              <ul>
                <h4>Puntos importantes:</h4>
                <li>Horario de salida en puerto y dársena.</li>
                <li>Horario de llegada a destino en Pto. Madero.</li>
                <li>El vehiculo debe estar 2hs antes del horario de salida.</li>
                <li>Cliente debe acompañar el trasaldo.</li>
                <li>Coordinar traslado en lado argentino.</li>
              </ul>

              <ul>
                <h4>Puertos: </h4>
                <li>Colonia Sacramento (Acepta vehiculos con ruedas que no giren, cliente debe consultar con puerto)</li>
                <li>Montevideo</li>
                <li>Puerto Piriápolis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="nav-brasil" role="tabpanel" aria-labelledby="nav-brasil-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-coordinacion-tab" data-bs-toggle="tab" data-bs-target="#nav-coordinacion" type="button" role="tab" aria-controls="nav-coordinacion" aria-selected="true">Coordinacion</button>
              <button class="nav-link" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Formato</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-coordinacion" role="tabpanel" aria-labelledby="nav-coordinacion-tab" tabindex="0">
              <h1>como se coordina el servicio</h1>
            </div>
            <div class="tab-pane fade" id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">

              formato de servicio
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-chile" role="tabpanel" aria-labelledby="nav-chile-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-local-tab" data-bs-toggle="tab" data-bs-target="#nav-local" type="button" role="tab" aria-controls="nav-local" aria-selected="true">Local</button>
              <button class="nav-link" id="nav-argentina-tab" data-bs-toggle="tab" data-bs-target="#nav-argentina" type="button" role="tab" aria-controls="nav-argentina" aria-selected="false">Hasta frontera</button>
              <button class="nav-link" id="nav-tdfuego-tab" data-bs-toggle="tab" data-bs-target="#nav-tdfuego" type="button" role="tab" aria-controls="nav-tdfuego" aria-selected="false">Tierra del fuego</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-local" role="tabpanel" aria-labelledby="nav-local-tab" tabindex="0">
              Local
            </div>
            <div class="tab-pane fade" id="nav-argentina" role="tabpanel" aria-labelledby="nav-argentina-tab" tabindex="0">
             frontera
            </div>
            <div class="tab-pane fade" id="nav-tdfuego" role="tabpanel" aria-labelledby="nav-tdfuego-tab" tabindex="0">
             tierra del fuego
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-contraprestacion" role="tabpanel" aria-labelledby="nav-contraprestacion-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-asistencia-tab" data-bs-toggle="tab" data-bs-target="#nav-asistencia" type="button" role="tab" aria-controls="nav-asistencia" aria-selected="true">Asistencia</button>
              <button class="nav-link" id="nav-tipos-tab" data-bs-toggle="tab" data-bs-target="#nav-tipos" type="button" role="tab" aria-controls="nav-tipos" aria-selected="false">Tipos</button>
            </div>
          </nav>
          <div class="tab-content text-start px-2 mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-asistencia" role="tabpanel" aria-labelledby="nav-asistencia-tab" tabindex="0">
             asistenciaasistencia
            </div>
            <div class="tab-pane fade" id="nav-tipos" role="tabpanel" aria-labelledby="nav-tipos-tab" tabindex="0">
             tipos
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}
