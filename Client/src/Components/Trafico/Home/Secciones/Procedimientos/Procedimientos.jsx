import React from 'react'
import * as bootstrap from 'bootstrap'


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
        <div className='conteinerNav mt-5 '>
            <nav className='navConteiner'>
                <div className="nav flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link custom active" id="nav-descripcion-tab" data-bs-toggle="tab" data-bs-target="#nav-descripcion" type="button" role="tab" aria-controls="nav-descripcion" aria-selected="true">Alta-baja de móvil</button>
                    <button className="nav-link custom" id="nav-etapas-tab" data-bs-toggle="tab" data-bs-target="#nav-etapas" type="button" role="tab" aria-controls="nav-etapas" aria-selected="false">Extracción-uso de carros</button>
                    <button className="nav-link custom" id="nav-operatoria-tab" data-bs-toggle="tab" data-bs-target="#nav-operatoria" type="button" role="tab" aria-controls="nav-operatoria" aria-selected="false">Hora de espera</button>
                    <button className="nav-link custom" id="nav-speech-tab" data-bs-toggle="tab" data-bs-target="#nav-speech" type="button" role="tab" aria-controls="nav-speech" aria-selected="false">Móvil geo no puede hacer la asistencia</button>
                    <button className="nav-link custom" id="nav-contencion-tab" data-bs-toggle="tab" data-bs-target="#nav-contencion" type="button" role="tab" aria-controls="nav-contencion" aria-selected="false">No encuentra vehiculo-vehiculo sólo</button>
                    <button className="nav-link custom" id="nav-refesvc-tab" data-bs-toggle="tab" data-bs-target="#nav-refesvc" type="button" role="tab" aria-controls="nav-refesvc" aria-selected="false">Prestador eventual no puede hacer la asistencia</button>
                    <button className="nav-link custom" id="nav-gruat-tab" data-bs-toggle="tab" data-bs-target="#nav-gruat" type="button" role="tab" aria-controls="nav-gruat" aria-selected="false">Proceso carga de producto prestador</button>
                    <button className="nav-link custom" id="nav-formato-tab" data-bs-toggle="tab" data-bs-target="#nav-formato" type="button" role="tab" aria-controls="nav-formato" aria-selected="false">Anulación-modificación de servicio en curso</button>
                </div>
            </nav>
            <div className="h-100 w-100 tab-content text-start px-5 m-auto " id="nav-tabContent">
                <div className="tab-pane fade show active lineaGeneral" id="nav-descripcion" role="tabpanel" aria-labelledby="nav-descripcion-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-etapas" role="tabpanel" aria-labelledby="nav-etapas-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-operatoria" role="tabpanel" aria-labelledby="nav-operatoria-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-speech" role="tabpanel" aria-labelledby="nav-speech-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-contencion" role="tabpanel" aria-labelledby="nav-contencion-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-refesvc" role="tabpanel" aria-labelledby="nav-refesvc-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-gruat" role="tabpanel" aria-labelledby="nav-gruat-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
                <div className="tab-pane fade lineaGeneral" id="nav-formato" role="tabpanel" aria-labelledby="nav-formato-tab" tabindex="0">
                    <div className="h-100 w-100 tab-content mt-1" id="nav-tabContent">
                        <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={3c88f482-5c4b-41ef-b893-fbd2af7333e2}&amp;action=embedview" width="1400px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    </div>
                </div>
            </div>
        </div >
    )
}