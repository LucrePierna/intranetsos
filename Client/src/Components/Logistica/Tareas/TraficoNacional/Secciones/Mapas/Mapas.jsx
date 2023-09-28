/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import * as bootstrap from 'bootstrap'


export default function Corredores() {

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
            <button className="nav-link custom active" style={buttonStyle} id="nav-bahiablanca-tab" data-bs-toggle="tab" data-bs-target="#nav-bahiablanca" type="button" role="tab" aria-controls="nav-bahiablanca" aria-selected="true">Bahia Blanca</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-costa-tab" data-bs-toggle="tab" data-bs-target="#nav-costa" type="button" role="tab" aria-controls="nav-costa" aria-selected="false">Costa</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-cuyo-tab" data-bs-toggle="tab" data-bs-target="#nav-cuyo" type="button" role="tab" aria-controls="nav-cuyo" aria-selected="false">Cuyo</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-noa-tab" data-bs-toggle="tab" data-bs-target="#nav-noa" type="button" role="tab" aria-controls="nav-noa" aria-selected="false">NOA</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-patagonia-tab" data-bs-toggle="tab" data-bs-target="#nav-patagonia" type="button" role="tab" aria-controls="nav-patagonia" aria-selected="false">Patagonia</button>
            <button className="nav-link custom" style={buttonStyle} id="nav-santa-tab" data-bs-toggle="tab" data-bs-target="#nav-santa" type="button" role="tab" aria-controls="nav-santa" aria-selected="false">Santa Fe</button>
          </div>
        </nav>
        <div className="h-100 w-100 tab-content mt-4 m-auto" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-bahiablanca" role="tabpanel" aria-labelledby="nav-bahiablanca-tab" tabindex="0"> <iframe src="https://www.google.com/maps/d/embed?mid=1zMZ63NeVY1bLQKvQE3rKVaVQlA9YDVaU&ehbc=2E312F" className='mapaGeneral' ></iframe></div>
          <div className="tab-pane fade m-auto" id="nav-costa" role="tabpanel" aria-labelledby="nav-costa-tab" tabindex="0"><iframe src="https://www.google.com/maps/d/embed?mid=1LkjXc0BbWSPJddZA9qJCyFzkE2-vviD6&ehbc=2E312F" className='mapaGeneral'></iframe></div>
          <div className="tab-pane fade m-auto" id="nav-cuyo" role="tabpanel" aria-labelledby="nav-cuyo-tab" tabindex="0">  <iframe src="https://www.google.com/maps/d/embed?mid=130l-QA7X10ZsnoSnhm7n2KfGweaLVUw&ehbc=2E312F" className='mapaGeneral'></iframe></div>
          <div className="tab-pane fade m-auto" id="nav-noa" role="tabpanel" aria-labelledby="nav-noa-tab" tabindex="0"><iframe src="https://www.google.com/maps/d/embed?mid=1Au9gfAp5Mwvhgi6KVbqJ4qBvCeLTRBGF&ehbc=2E312F" className='mapaGeneral'></iframe></div>
          <div className="tab-pane fade m-auto" id="nav-patagonia" role="tabpanel" aria-labelledby="nav-patagonia-tab" tabindex="0"><iframe src="https://www.google.com/maps/d/embed?mid=11DTLz8bqaL_6JYBhRSeT_VzwJqmzsDw&ehbc=2E312F" className='mapaGeneral'></iframe></div>
          <div className="tab-pane fade m-auto" id="nav-santa" role="tabpanel" aria-labelledby="nav-santa-tab" tabindex="0"><iframe src="https://www.google.com/maps/d/embed?mid=1FKfsygYUdTm4WGAZUby8sn4eeJPZO9Oa&ehbc=2E312F" className='mapaGeneral'></iframe></div>
        </div>
      </div>
    </div> 
  )
}
