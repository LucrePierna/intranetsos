import React, { useState } from 'react'

export default function Calculadora() {

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
    <div>
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
  )
}
