import React from 'react'
import '../../../../EstilosGlobales/General.css'
import * as bootstrap from 'bootstrap'

export default function Mapas() {

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
          <button className="nav-link custom active" id="nav-derivgral-tab" data-bs-toggle="tab" data-bs-target="#nav-derivgral" type="button" role="tab" aria-controls="nav-derivgral" aria-selected="true">Derivacion General</button>
          <button className="nav-link custom" id="nav-trafnac-tab" data-bs-toggle="tab" data-bs-target="#nav-trafnac" type="button" role="tab" aria-controls="nav-trafnac" aria-selected="false">Trafico Nacional</button>
          <button className="nav-link custom" id="nav-extranjero-tab" data-bs-toggle="tab" data-bs-target="#nav-extranjero" type="button" role="tab" aria-controls="nav-extranjero" aria-selected="false">Extranjero</button>
          <button className="nav-link custom" id="nav-transportin-tab" data-bs-toggle="tab" data-bs-target="#nav-transportin" type="button" role="tab" aria-controls="nav-transportin" aria-selected="false">Transportin</button>
          <button className="nav-link custom" id="nav-trasvase-tab" data-bs-toggle="tab" data-bs-target="#nav-trasvase" type="button" role="tab" aria-controls="nav-trasvase" aria-selected="false">Terminales y Pesados</button>
        </div>
      </nav>
      <div className="h-100 w-100 tab-content text-start mt-3 px-5 m-auto " id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-derivgral" role="tabpanel" aria-labelledby="nav-derivgral-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-logrn-tab" data-bs-toggle="tab" data-bs-target="#nav-logrn" type="button" role="tab" aria-controls="nav-logrn" aria-selected="true">Mapas Unificados</button>
                <button class="nav-link sub" id="nav-xzona-tab" data-bs-toggle="tab" data-bs-target="#nav-xzona" type="button" role="tab" aria-controls="nav-xzona" aria-selected="true">Derivacion por Zona</button>
              </div>
            </nav>
            <div class="tab-pane fade show active " id="nav-logrn" role="tabpanel" aria-labelledby="nav-logrn-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1WLS3ua4LFhR6zWT8pntdDwEbT5cJrgE&ehbc=2E312F&noprof=1" className='responsiveIframe'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-xzona" role="tabpanel" aria-labelledby="nav-xzona-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1lC9Ly-MPSGxrXd9RtateJyx7K4vPkVs&ehbc=2E312F&noprof=1" className='responsiveIframe'></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-trafnac" role="tabpanel" aria-labelledby="nav-trafnac-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-bb-tab" data-bs-toggle="tab" data-bs-target="#nav-bb" type="button" role="tab" aria-controls="nav-bb" aria-selected="true">Bahia Blanca</button>
                <button class="nav-link sub" id="nav-costa-tab" data-bs-toggle="tab" data-bs-target="#nav-costa" type="button" role="tab" aria-controls="nav-costa" aria-selected="true">Costa</button>
                <button class="nav-link sub" id="nav-cuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-cuyo" type="button" role="tab" aria-controls="nav-cuyo" aria-selected="true">Cuyo</button>
                <button class="nav-link sub" id="nav-noa-tab" data-bs-toggle="tab" data-bs-target="#nav-noa" type="button" role="tab" aria-controls="nav-noa" aria-selected="true">NOA</button>
                <button class="nav-link sub" id="nav-patagonia-tab" data-bs-toggle="tab" data-bs-target="#nav-patagonia" type="button" role="tab" aria-controls="nav-patagonia" aria-selected="true">Patagonia</button>
                <button class="nav-link sub" id="nav-stafe-tab" data-bs-toggle="tab" data-bs-target="#nav-stafe" type="button" role="tab" aria-controls="nav-stafe" aria-selected="true">Santa Fe</button>
              </div>
            </nav>
            <div class="tab-pane fade show active " id="nav-bb" role="tabpanel" aria-labelledby="nav-bb-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1zMZ63NeVY1bLQKvQE3rKVaVQlA9YDVaU&ehbc=2E312F" className='mapaGeneral' ></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-costa" role="tabpanel" aria-labelledby="nav-costa-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1LkjXc0BbWSPJddZA9qJCyFzkE2-vviD6&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-cuyo" role="tabpanel" aria-labelledby="nav-cuyo-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=130l-QA7X10ZsnoSnhm7n2KfGweaLVUw&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-noa" role="tabpanel" aria-labelledby="nav-noa-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1Au9gfAp5Mwvhgi6KVbqJ4qBvCeLTRBGF&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-patagonia" role="tabpanel" aria-labelledby="nav-patagonia-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=11DTLz8bqaL_6JYBhRSeT_VzwJqmzsDw&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-stafe" role="tabpanel" aria-labelledby="nav-stafe-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1FKfsygYUdTm4WGAZUby8sn4eeJPZO9Oa&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-extranjero" role="tabpanel" aria-labelledby="nav-extranjero-tab" tabindex="0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <iframe src="https://www.google.com/maps/d/embed?mid=1m4-iWyxS47KzaDjIfAHYOfEl9n1w8pw&ehbc=2E312F&noprof=1" className='responsiveIframe'></iframe>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-transportin" role="tabpanel" aria-labelledby="nav-transportin-tab" tabindex="0">
          <div class="tab-content" id="nav-tabContent">
            <nav>
              <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                <button class="nav-link sub active" id="nav-pais-tab" data-bs-toggle="tab" data-bs-target="#nav-pais" type="button" role="tab" aria-controls="nav-pais" aria-selected="true">Corredor País</button>
                <button class="nav-link sub" id="nav-turista-tab" data-bs-toggle="tab" data-bs-target="#nav-turista" type="button" role="tab" aria-controls="nav-turista" aria-selected="true">Corredor Turista</button>
                <button class="nav-link sub" id="nav-triple-tab" data-bs-toggle="tab" data-bs-target="#nav-triple" type="button" role="tab" aria-controls="nav-triple" aria-selected="true">Corredor Triple</button>
              </div>
            </nav>
            <div class="tab-pane fade show active " id="nav-pais" role="tabpanel" aria-labelledby="nav-pais-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1tFFeKr1DrrYGLdAMZgQauzG5u6QjRKc&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-turista" role="tabpanel" aria-labelledby="nav-turista-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=15hD9V0JCdH3q58WN8w2lXK1XiUms4O4&ehbc=2E312F" className='mapaGeneral'></iframe>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-triple" role="tabpanel" aria-labelledby="nav-triple-tab" tabindex="0">
              <div className="d-flex justify-content-center align-items-center h-100">
                <iframe src="https://www.google.com/maps/d/embed?mid=1BcCIVizUczjWAlltulnokYL4SeQsvLo&ehbc=2E312F&noprof=1" className='mapaGeneral'></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade lineaGeneral" id="nav-trasvase" role="tabpanel" aria-labelledby="nav-trasvase-tab" tabindex="0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <iframe src="https://www.google.com/maps/d/embed?mid=1LP1MnE1PCR_Xw2bvVg_nVrOPmPfyi9I&ehbc=2E312F&noprof=1" className='responsiveIframe'></iframe>
          </div>
        </div>
      </div>
    </div >
  )
}