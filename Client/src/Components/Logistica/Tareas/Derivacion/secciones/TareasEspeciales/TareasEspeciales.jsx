import React from 'react'
import * as bootstrap from 'bootstrap'

export default function TareasEspeciales() {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })
    return (
        <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Cerrajeria</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Extraccion</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Grabado de cristales</button>
                    <button className="nav-link" id="nav-vehicles-tab" data-bs-toggle="tab" data-bs-target="#nav-vehicles" type="button" role="tab" aria-controls="nav-vehicles" aria-selected="false">Guarda de Vehículos</button>
                    <button className="nav-link" id="nav-roads-tab" data-bs-toggle="tab" data-bs-target="#nav-roads" type="button" role="tab" aria-controls="nav-roads" aria-selected="false">Caminos Intransitables</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <h1>Cerrajeria</h1>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <h1>Extraccion</h1>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                    <h1>Grabado de cristales</h1>
                </div>
                <div className="tab-pane fade" id="nav-vehicles" role="tabpanel" aria-labelledby="nav-vehicles-tab" tabIndex="0">
                    <h1>Guarda de Vehículos</h1>
                </div>
                <div className="tab-pane fade" id="nav-roads" role="tabpanel" aria-labelledby="nav-roads-tab" tabIndex="0">
                    <h1>Caminos Intransitables</h1>
                </div>
            </div>
        </div>
    )
}
