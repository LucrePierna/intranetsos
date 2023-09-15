/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import * as bootstrap from 'bootstrap'


export default function Corredores() {
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
          <button className="nav-link custom active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Corredor Pais</button>
          <button className="nav-link custom" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Corredor Turista</button>
          <button className="nav-link custom" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Corredor Triple</button>
        </div>
      </nav>
      <div className="tab-content mt-3" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">  <iframe src="https://www.google.com/maps/d/embed?mid=1tFFeKr1DrrYGLdAMZgQauzG5u6QjRKc&ehbc=2E312F" className='Client/src/index.css'></iframe></div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><iframe src="https://www.google.com/maps/d/embed?mid=15hD9V0JCdH3q58WN8w2lXK1XiUms4O4&ehbc=2E312F"
         className='Client/src/index.css'></iframe></div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">  <iframe src="https://www.google.com/maps/d/embed?mid=1NvIICBDj5Q1ld5q2pSRSHEJk1sPSnhY&ehbc=2E312F" className='Client/src/index.css'></iframe></div>
      </div>
    </div>
  )
}


