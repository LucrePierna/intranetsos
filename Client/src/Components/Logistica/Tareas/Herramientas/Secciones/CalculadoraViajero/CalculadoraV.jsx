import React, { useState } from 'react';
import Formato from './Formato';

export default function CalculadoraV({ resultado }) {
  const [formData, setFormData] = useState({
    cantidadTotal: '',
    cantidadPorAsistencia: '',
    origen: '',
    destino: '',
    tipoAsistencia: '',
    topeCIA: '',
    observaciones: '',
  });
  const [copied, setCopied] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
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

    navigator.clipboard
      .writeText(formattedText)
      .then(() => setCopied(true))
      .catch((err) => alert('Error copying text: ', err));
  };

  const handleReset = () => {
    setFormData({
      cantidadTotal: '',
      cantidadPorAsistencia: '',
      origen: '',
      destino: '',
      tipoAsistencia: '',
      topeCIA: '',
      observaciones: '',
    });
    setCopied(false);
  };

  return (
    <div className='container mt-5 bg-secondary p-5 rounded'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <Formato />
        </div>
        <div className='col-md-6'>
          <form>
            <div className='form-group'>
              <label htmlFor='cantidadTotal'>Cantidad total de personas:</label>
              <input
                type='number'
                className='form-control text-center'
                id='cantidadTotal'
                value={formData.cantidadTotal}
                onChange={(e) => handleFieldChange('cantidadTotal', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cantidadPorAsistencia'>Cantidad de personas por asistencia al viajero:</label>
              <input
                type='number'
                className='form-control text-center'
                id='cantidadPorAsistencia'
                value={formData.cantidadPorAsistencia}
                onChange={(e) => handleFieldChange('cantidadPorAsistencia', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='origen'>Origen de las personas:</label>
              <input
                type='text'
                className='form-control text-center'
                id='origen'
                value={formData.origen}
                onChange={(e) => handleFieldChange('origen', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='destino'>Destino de las personas:</label>
              <input
                type='text'
                className='form-control text-center'
                id='destino'
                value={formData.destino}
                onChange={(e) => handleFieldChange('destino', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='tipoAsistencia'>Tipo de Asistencia:</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control text-center'
                  id='tipoAsistencia'
                  value={formData.tipoAsistencia}
                  onChange={(e) => handleFieldChange('tipoAsistencia', e.target.value)}
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='topeCIA'>Tope establecido por la CIA:</label>
              <input
                type='text'
                className='form-control text-center'
                id='topeCIA'
                value={formData.topeCIA}
                onChange={(e) => handleFieldChange('topeCIA', e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='observaciones'>Observaciones:</label>
              <input
                type='text'
                className='form-control text-center'
                id='observaciones'
                value={formData.observaciones}
                onChange={(e) => handleFieldChange('observaciones', e.target.value)}
              />
            </div>
            <div className='form-group mt-3'>
              <button className='btn btn-dark btnGroup' type='button' onClick={handleCopyClick}>
                {copied ? 'Copiado' : 'Copiar'}
              </button>
              <button className='btn btn-dark btnGroup' type='button' onClick={handleReset}>
                Limpiar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
