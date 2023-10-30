/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import * as bootstrap from 'bootstrap'
import DesviosMvl from './DesviosMvl/DesviosMvl'
import IncidenciasOp from '../Incidencias/IncidenciasOp/IncidenciasOp'

export default function Incidencias() {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })
    return (
        <div className='d-flex flex-column align-items-center justify-content-center mx-auto mt-4'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link custom active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Incidencias </button>
                    <button className="nav-link custom" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Desvios de Móvil</button>
                </div>
            </nav>
            <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                    <IncidenciasOp />
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <DesviosMvl />
                </div>
            </div>
        </div>
    )
}


