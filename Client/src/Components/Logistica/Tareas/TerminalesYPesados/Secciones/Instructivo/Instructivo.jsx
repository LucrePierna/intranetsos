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
    <div className='d-flex align-items-start flex-colum bg-secondary rounded justify-content-center mx-auto h-50 w-50 mt-5 ' >
      <nav className='d-flex align-items-start flex-colum'>
        <div class="nav flex-column nav-tabs me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link custom" id="nav-inicial-tab" data-bs-toggle="tab" data-bs-target="#nav-inicial" type="button" role="tab" aria-controls="nav-inicial" aria-selected="false">Tarea</button>
          <button className="nav-link custom" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tarea</button>
          <button className="nav-link custom" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Tarea</button>
          <button className="nav-link custom" id="nav-cierra-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles" type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Tarea</button>
          <button className="nav-link custom" id="nav-zona-tab" data-bs-toggle="tab" data-bs-target="#nav-roads" type="button" role="tab" aria-controls="nav-roads" aria-selected="false">Tarea</button>
        </div>
      </nav>
      <div className="tab-content px-5" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-inicial" role="tabpanel" aria-labelledby="nav-inicial-tab" tabindex="0">
        ...contenido...        </div>

        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        ...contenido...
        </div>

        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-manual-tab" data-bs-toggle="tab" data-bs-target="#nav-manual" type="button" role="tab" aria-controls="nav-manual" aria-selected="true">Tarea</button>
              <button class="nav-link sub" id="nav-automatica-tab" data-bs-toggle="tab" data-bs-target="#nav-automatica" type="button" role="tab" aria-controls="nav-automatica" aria-selected="false">Tarea</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-manual" role="tabpanel" aria-labelledby="nav-manual-tab" tabindex="0">
            ...contenido...
            </div>
            <div class="tab-pane fade" id="nav-automatica" role="tabpanel" aria-labelledby="nav-automatica-tab" tabindex="0">
...contenido...
            </div>
          </div>
        </div>

        <div className="tab-pane fade text-start py-2" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-cierra-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-progsvc-tab" data-bs-toggle="tab" data-bs-target="#nav-progsvc" type="button" role="tab" aria-controls="nav-progsvc" aria-selected="true">Tarea</button>
              <button class="nav-link sub" id="nav-demsvc-tab" data-bs-toggle="tab" data-bs-target="#nav-demsvc" type="button" role="tab" aria-controls="nav-demsvc" aria-selected="false">Tarea</button>
              <button class="nav-link sub" id="nav-cttocl-tab" data-bs-toggle="tab" data-bs-target="#nav-cttocl" type="button" role="tab" aria-controls="nav-cttocl" aria-selected="false">Tarea</button>
              <button class="nav-link sub" id="nav-pagos-tab" data-bs-toggle="tab" data-bs-target="#nav-pagos" type="button" role="tab" aria-controls="nav-pagos" aria-selected="false">Tarea</button>
              <button class="nav-link sub" id="nav-reintegro-tab" data-bs-toggle="tab" data-bs-target="#nav-reintegro" type="button" role="tab" aria-controls="nav-reintegro" aria-selected="false">Tarea</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3 " id="nav-progsvc" role="tabpanel" aria-labelledby="nav-progsvc-tab" tabindex="0">
            ...contenido...
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-demsvc" role="tabpanel" aria-labelledby="nav-demsvc-tab" tabindex="0">
            ...contenido...
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-cttocl" role="tabpanel" aria-labelledby="nav-cttocl-tab" tabindex="0">
            ...contenido...
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-pagos" role="tabpanel" aria-labelledby="nav-pagos-tab" tabindex="0">
            ...contenido...
            </div>
            <div class="tab-pane fade px-3 mt-3" id="nav-reintegro" role="tabpanel" aria-labelledby="nav-reintegro-tab" tabindex="0">
            ...contenido...
            </div>
          </div>
        </div>

        <div className="tab-pane fade " id="nav-roads" role="tabpanel" aria-labelledby="nav-zona-tab" tabIndex="0">
          <nav>
            <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link sub active" id="nav-derivzn-tab" data-bs-toggle="tab" data-bs-target="#nav-derivzn" type="button" role="tab" aria-controls="nav-derivzn" aria-selected="true">Tarea</button>
              <button class="nav-link sub" id="nav-mapazn-tab" data-bs-toggle="tab" data-bs-target="#nav-mapazn" type="button" role="tab" aria-controls="nav-mapazn" aria-selected="false">Tarea</button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active px-3 mt-3" id="nav-derivzn" role="tabpanel" aria-labelledby="nav-derivzn-tab" tabindex="0">
            ...contenido...
            </div>
            <div class="tab-pane fade px-3 py-5" id="nav-mapazn" role="tabpanel" aria-labelledby="nav-mapazn-tab" tabindex="0">
            ...contenido...
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}
