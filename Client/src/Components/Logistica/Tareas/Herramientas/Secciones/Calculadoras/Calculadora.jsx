/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import * as bootstrap from 'bootstrap'
import Reintegro from './Reintegro/Reintegro'
import Extraccion from './Extraccion/Extraccion'
import ViajeroReintegro from './ViajeroReintegro/ViajeroReintegro'
import CalculadoraV from '../CalculadoraViajero/CalculadoraV'


export default function Calculadoras() {
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
              id='nav-home-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-home'
              type='button'
              role='tab'
              aria-controls='nav-home'
              aria-selected='true'
            >
              Reintegro Km
            </button>
            <button
              className='nav-link custom'
              id='nav-profile-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-profile'
              type='button'
              role='tab'
              aria-controls='nav-profile'
              aria-selected='false'
            >
              Viajero por Reintegro
            </button>
            <button
              className='nav-link custom'
              id='nav-viajero-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-viajero'
              type='button'
              role='tab'
              aria-controls='nav-viajero'
              aria-selected='false'
            >
              Viajero Doble Cabina
            </button>
            <button
              className='nav-link custom'
              id='nav-contact-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-contact'
              type='button'
              role='tab'
              aria-controls='nav-contact'
              aria-selected='false'
            >
              Extracción
            </button>

          </div>
        </nav>
        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-home'
            role='tabpanel'
            aria-labelledby='nav-home-tab'
            tabIndex='0'
          >
            <Reintegro />
          </div>
          <div
            className='tab-pane fade'
            id='nav-profile'
            role='tabpanel'
            aria-labelledby='nav-profile-tab'
            tabIndex='0'
          >
            <ViajeroReintegro />
          </div>
          <div
            className='tab-pane fade'
            id='nav-viajero'
            role='tabpanel'
            aria-labelledby='nav-viajero-tab'
            tabIndex='0'
          >
            <CalculadoraV />
          </div>
          <div
            className='tab-pane fade'
            id='nav-contact'
            role='tabpanel'
            aria-labelledby='nav-contact-tab'
            tabIndex='0'
          >
            <Extraccion />
          </div>
        </div>
      </div>
    </div>
  );
}


