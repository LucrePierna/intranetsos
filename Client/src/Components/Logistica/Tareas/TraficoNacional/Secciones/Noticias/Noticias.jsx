import React from 'react'

export default function Noticias() {
  return (
    <div id="carouselExampleInterval" class="carousel slide h-50 w-50 justify-content-center mx-auto mt-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://i.pinimg.com/564x/90/52/2b/90522b694ef262ecde1fbf0c04de6496.jpg" className="d-block w-100 style={{ height: '500px' }}" alt="noticia1" />
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img src="https://i.pinimg.com/564x/d8/11/fb/d811fbc6ac83c704188486c6dc8321a7.jpg" className="d-block w-100 style={{ height: '500px' }} " alt="noticia2" />
        </div>
        <div class="carousel-item" data-bs-interval="10000">
          <img src="https://i.pinimg.com/564x/e4/78/41/e4784108c010d2c0ac86d9eed724198e.jpg" className="d-block w-100 style={{ height: '500px' }} " alt="noticia3" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon text-bg-dark" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon text-bg-dark " aria-hidden="true" ></span>
        <span class="visually-hidden" >Next</span>
      </button>

    </div>
  )
}
