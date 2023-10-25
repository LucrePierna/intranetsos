import React from 'react'
import * as bootstrap from 'bootstrap'
import CalculadoraContraPrestacion from './CalculadoraContraPrestacion'

export default function CalculadoraExt() {
    const triggerTabList = document.querySelectorAll('#myTab button')
    triggerTabList.forEach(triggerEl => {
        const tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', event => {
            event.preventDefault()
            tabTrigger.show()
        })
    })
    return (
        <div className='container mt-5'>
            <div className='d-flex flex-column align-items-center justify-content-center mt-3'>
                <nav>
                    <div className='nav nav-tabs' id='nav-tab' role='tablist'>
                        <button
                            className='nav-link custom active'
                            id='nav-contraprestacion-tab'
                            data-bs-toggle='tab'
                            data-bs-target='#nav-contraprestacion'
                            type='button'
                            role='tab'
                            aria-controls='nav-contraprestacion'
                            aria-selected='true'
                        >
                            Contraprestación
                        </button>
                    </div>
                </nav>
                <div className='tab-content' id='nav-tabContent'>
                    <div
                        className='tab-pane fade show active'
                        id='nav-contraprestacion'
                        role='tabpanel'
                        aria-labelledby='nav-contraprestacion-tab'
                        tabIndex='0'
                    >
                        <CalculadoraContraPrestacion />
                    </div>

                </div>
            </div>
        </div>
    )
}
