import React from 'react'
import * as bootstrap from 'bootstrap'
import productos from '../../../Image/procedimientos/PRODUCTOS_PRESTADOR.png'
import cargaProducto from '../../../Image/procedimientos/cargaproducto.jpg'
import prestadorEventual from '../../../Image/procedimientos/Prestador eventual no puede hacer la asistencia.jpg'
import movilGeo from '../../../Image/procedimientos/Movil geo no puede hacer la asistencia.jpg'
import movilDestino from '../../../Image/procedimientos/Móvil en destino.jpg'
import nsVhc from '../../../Image/procedimientos/No encuentra vhc - vhc solo.jpg'
import hsEspera from '../../../Image/procedimientos/Hora de espera.jpg'
import altayBaja from '../../../Image/procedimientos/Alta-Baja de movil.jpg'
import tomaPascua from '../../../Image/procedimientos/toma posterior a pascua.jpg'
import anulacion from '../../../Image/procedimientos/Anulación-Modificación svc en curso.jpg'

export default function Procedimientos() {
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
                    <button className="nav-link custom active" id="nav-productoPrestador-tab" data-bs-toggle="tab" data-bs-target="#nav-productoPrestador" type="button" role="tab" aria-controls="nav-productoPrestador" aria-selected="true">Productos Prestador </button>
                    <button className="nav-link custom" id="nav-cargaProducto-tab" data-bs-toggle="tab" data-bs-target="#nav-cargaProducto" type="button" role="tab" aria-controls="nav-cargaProducto" aria-selected="false">Carga de Productos</button>
                    <button className="nav-link custom" id="nav-prestadorEventual-tab" data-bs-toggle="tab" data-bs-target="#nav-prestadorEventual" type="button" role="tab" aria-controls="nav-prestadorEventual" aria-selected="false">Prestador Eventual</button>
                    <button className="nav-link custom" id="nav-mvlGeo-tab" data-bs-toggle="tab" data-bs-target="#nav-mvlGeo" type="button" role="tab" aria-controls="nav-mvlGeo" aria-selected="false">Móvil Geo</button>
                    <button className="nav-link custom" id="nav-mvlDestino-tab" data-bs-toggle="tab" data-bs-target="#nav-mvlDestino" type="button" role="tab" aria-controls="nav-mvlDestino" aria-selected="false">Móvil Destino</button>
                    <button className="nav-link custom" id="nav-noVHC-tab" data-bs-toggle="tab" data-bs-target="#nav-noVHC" type="button" role="tab" aria-controls="nav-noVHC" aria-selected="false">No se encuentra vehículo</button>
                    <button className="nav-link custom" id="nav-hsEspera-tab" data-bs-toggle="tab" data-bs-target="#nav-hsEspera" type="button" role="tab" aria-controls="nav-hsEspera" aria-selected="false">Hora de espera</button>
                    <button className="nav-link custom" id="nav-altaybaja-tab" data-bs-toggle="tab" data-bs-target="#nav-altaybaja" type="button" role="tab" aria-controls="nav-altaybaja" aria-selected="false">Alta y Baja</button>
                    <button className="nav-link custom" id="nav-tomaPascua-tab" data-bs-toggle="tab" data-bs-target="#nav-tomaPascua" type="button" role="tab" aria-controls="nav-tomaPascua" aria-selected="false">Toma en pascua</button>
                    <button className="nav-link custom" id="nav-anulacion-tab" data-bs-toggle="tab" data-bs-target="#nav-anulacion" type="button" role="tab" aria-controls="nav-anulacion" aria-selected="false">Anulación</button>
                </div>
            </nav>
            <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-productoPrestador" role="tabpanel" aria-labelledby="nav-productoPrestador-tab" tabindex="0">
                    <img src={productos} alt="Productos Prestador" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-cargaProducto" role="tabpanel" aria-labelledby="nav-cargaProducto-tab" tabindex="0">
                    <img src={cargaProducto} alt="Carga de Productos" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-prestadorEventual" role="tabpanel" aria-labelledby="nav-prestadorEventual-tab" tabindex="0">
                    <img src={prestadorEventual} alt="Prestador Eventual" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-mvlGeo" role="tabpanel" aria-labelledby="nav-mvlGeo-tab" tabindex="0">
                    <img src={movilGeo} alt="Móvil Geo" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-mvlDestino" role="tabpanel" aria-labelledby="nav-mvlDestino-tab" tabindex="0">
                    <img src={movilDestino} alt="Móvil Destino" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-noVHC" role="tabpanel" aria-labelledby="nav-noVHC-tab" tabindex="0">
                    <img src={nsVhc} alt="No se encuentra vhc" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-hsEspera" role="tabpanel" aria-labelledby="nav-hsEspera-tab" tabindex="0">
                    <img src={hsEspera} alt="Hora de espera" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-altaybaja" role="tabpanel" aria-labelledby="nav-altaybaja-tab" tabindex="0">
                    <img src={altayBaja} alt="Prestador Eventual" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-tomaPascua" role="tabpanel" aria-labelledby="nav-tomaPascua-tab" tabindex="0">
                    <img src={tomaPascua} alt="Toma en Pascua" className='responsiveImgSaludos' />
                </div>
                <div className="tab-pane fade" id="nav-anulacion" role="tabpanel" aria-labelledby="nav-anulacion-tab" tabindex="0">
                    <img src={anulacion} alt="Anulación" className='responsiveImgSaludos' />
                </div>
            </div>
        </div>
    )
}
