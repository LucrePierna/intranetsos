/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import * as bootstrap from 'bootstrap'


export default function Mapas() {

  const buttonStyle = {
    width: '150px',
    textAlign: 'center'
  }

  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })
  return (
    <div className='container '>
      <div className='d-flex flex-column h-100 w-100 align-items-center justify-content-center mx-auto mt-5 '>
        <nav>
          <div className="nav nav-tabs " id="nav-tab" role="tablist">
            <button className="nav-link custom active" style={buttonStyle} id="nav-cba-tab" data-bs-toggle="tab" data-bs-target="#nav-cba" type="button" role="tab" aria-controls="nav-cba" aria-selected="true">Córdoba - 8700</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-ros-tab" data-bs-toggle="tab" data-bs-target="#nav-ros" type="button" role="tab" aria-controls="nav-ros" aria-selected="false">Rosario - 5052</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-bsas-tab" data-bs-toggle="tab" data-bs-target="#nav-bsas" type="button" role="tab" aria-controls="nav-bsas" aria-selected="false">Bs. As. - 6001</button>
          </div>
        </nav>
        <div className="h-100 w-100 tab-content m-auto" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-cba" role="tabpanel" aria-labelledby="nav-cba-tab" tabindex="0">
            <iframe src="https://www.google.com/maps/d/embed?mid=1ugH5IcCnCTtHJtoda_IzuB-zXeQMyS8&ehbc=2E312F" className='mapaGeneral' >
            </iframe>
          </div>
          <div className="tab-pane fade m-auto" id="nav-ros" role="tabpanel" aria-labelledby="nav-ros-tab" tabindex="0">
            <iframe src="https://www.google.com/maps/d/embed?mid=16Nx7dXEXbu8WHyqQKwmDQZQosEeeduw&ehbc=2E312F" className='mapaGeneral'>
            </iframe>
          </div>
          <div className="tab-pane fade m-auto" id="nav-bsas" role="tabpanel" aria-labelledby="nav-bsas-tab" tabindex="0">
            <iframe src="https://www.google.com/maps/d/embed?mid=1x1ubrmOkKUCU66OdaVM9milLgQOIi-9t&ehbc=2E312F" className='mapaGeneral'>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
