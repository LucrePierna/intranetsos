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
            
            <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
<iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1650px" height="800px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>            </div>
        </div>
    )
}
