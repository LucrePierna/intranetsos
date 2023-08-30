import React, { useState } from 'react'
import * as bootstrap from 'bootstrap'


export default function Procedimiento() {
  const [formData, setFormData] = useState({
    cantidadTotal: '',
    cantidadPorAsistencia: '',
    origen: '',
    destino: '',
    tipoAsistencia: '',
    topeCIA: '',
    observaciones: ''
  });
  const [copied, setCopied] = useState(false);

  const triggerTabList = document.querySelectorAll('#myTab button')
  triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
      event.preventDefault()
      tabTrigger.show()
    })
  })

  const handleFieldChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleCopyClick = () => {
    const formattedText = `
      Cantidad total de personas: ${formData.cantidadTotal}
      Cantidad de personas por asistencia al viajero: ${formData.cantidadPorAsistencia}
      Origen de las personas: ${formData.origen}
      Destino de las personas: ${formData.destino}
      Tipo de asistencia: ${formData.tipoAsistencia}
      Tope establecido por la CIA: ${formData.topeCIA}
      Observaciones: ${formData.observaciones}
    `;

    navigator.clipboard.writeText(formattedText)
      .then(() => setCopied(true))
      .catch(err => console.error('Error copying text: ', err));
  };

  return (
      <div className='d-flex flex-column align-items-center justify-content-center mx-auto h-50 w-50 mt-5'>
      <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Instrucciones</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Puntos principales</button>
          <button className="nav-link" id="nav-copy-tab" data-bs-toggle="tab" data-bs-target="#nav-copy" type="button" role="tab" aria-controls="nav-copy" aria-selected="false">Referencia de servicio:</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
          <h4 className='mt-3 text-start fs-4'>Se activará cuando haya personas junto al vehículo que por distintos motivos no puedan ser trasladadas en la misma grúa. El operador corroborará si corresponde la asistencia en la grilla.</h4>
          <h5 className='mt-3 text-start fs-4'>El operador deberá realizar el análisis correspondiente del servicio, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio, entre otros. </h5>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
          <h3 className='fs-4 text-start mt-3'>El operador deberá realizar el análisis correspondiente del servicio de asistencia al viajero cuando lo marque, teniendo en cuenta servicios anteriores, cobertura, situación particular del socio</h3>
          <ul className='d-flex flex-column text-start justify-content-center m-auto h-50 w-50'>
            <li>Contencion.</li>
            <li>Corroborar disponibilidad de doble cabina.</li>
            <li>Buscar otras opciones segun cantidad de kilometros.</li>
            <li>Hospedaje.</li>
            <li>Servicio por reintegro.</li>
            <li>Excepciones.</li>
          </ul>
        </div>
        <div className="tab-pane fade show active" id="nav-copy" role="tabpanel" aria-labelledby="nav-copy-tab" tabindex="0">
          <div className='d-flex flex-column mt-5 mx-auto justify-content-center text-start'>
            <div>
              <label className="px-3">Cantidad total de personas:</label>
              <input
                type="number"
                value={formData.cantidadTotal}
                onChange={e => handleFieldChange('cantidadTotal', e.target.value)}
              />
            </div>
            <div>
              <label className="px-3">Cantidad de personas por asistencia al viajero:</label>
              <input
                type="number"
                value={formData.cantidadPorAsistencia}
                onChange={e => handleFieldChange('cantidadPorAsistencia', e.target.value)}
              />
            </div>
            <div>
              <label className="px-3 pt-2">Origen de las personas:</label>
              <input
                type="text"
                value={formData.origen}
                onChange={e => handleFieldChange('origen', e.target.value)}
              />
            </div>
            <div>
              <label className="px-3 pt-2">Destino de las personas:</label>
              <input
                type="text"
                value={formData.destino}
                onChange={e => handleFieldChange('destino', e.target.value)}
              />
            </div>
            <div>
              <label className="px-3 pt-2">Tipo de Asistencia:
                <input
                  type="number"
                  value={formData.tipoAsistencia}
                  onChange={e => handleFieldChange('tipoAsistencia', e.target.value)}
                />
                KM </label>
            </div>
            <div>
              <label className="px-3 pt-2">Tope establecido por la CIA:</label>
              <input
                type="text"
                value={formData.topeCIA}
                onChange={e => handleFieldChange('topeCIA', e.target.value)}
              />
            </div>
            <div>
              <label className="px-3 pt-2">Observaciones:</label>
              <input
                type="text"
                value={formData.observaciones}
                onChange={e => handleFieldChange('observaciones', e.target.value)}
              />
            </div>

            <button class="btn btn-dark mt-3 h-50 w-50 m-auto" onClick={handleCopyClick}>
              {copied ? 'Copiado' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
