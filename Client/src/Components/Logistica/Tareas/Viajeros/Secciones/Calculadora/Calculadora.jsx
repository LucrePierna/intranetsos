import React, { useState } from 'react'
import Formato from './Formato';

export default function Calculadora({ resultado }) {


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
      .catch(err => alert('Error copying text: ', err));
  };

  const handleReset = () => {
    setFormData({
      cantidadTotal: '',
      cantidadPorAsistencia: '',
      origen: '',
      destino: '',
      tipoAsistencia: '',
      topeCIA: '',
      observaciones: ''
    })
    setCopied(false);
  }

  return (
    <div className='d-flex flex-row h-100 justify-content-center bg-secondary rounded h-50 w-70 m-auto mt-5 py-5 align-items-center'>
      <div className='d-flex px-5 mt-5 justify-content-center'>
        <Formato />
      </div>

      <div className='d-flex flex-column mt-5 justify-content-center text-start'>
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
              type="text"
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
        <div className='pt-3 m-auto h-50 w-50 m-auto'>
          <button className="btn btn-dark mt-3 " onClick={handleCopyClick}>
            {copied ? 'Copiado' : 'Copiar'}
          </button>
          <button className="btn btn-dark mt-3 mx-4" onClick={handleReset}>
            Restablecer
          </button>
        </div>
      </div>
    </div>
  )
}
