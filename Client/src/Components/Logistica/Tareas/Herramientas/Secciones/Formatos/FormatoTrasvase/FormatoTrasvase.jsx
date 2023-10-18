import React, { useState } from 'react'

export default function Formato() {
    const [formData, setFormData] = useState({
        cliente: '',
        telefono: 0,
        patente: '',
        unidad: '',
        ubicacion: '',
        carga: '',
        falla: '',
        observaciones: ''
    })
    const [copied, setCopied] = useState(false);

    const handleFieldChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleCopyClick = () => {
        const formattedText = `
          Cliente: ${formData.cliente}
          Teléfono: ${formData.telefono}
          Patente: ${formData.patente}
          Unidad: ${formData.unidad}
          Ubicacioón: ${formData.ubicacion}
          Carga: ${formData.carga}
          Falla: ${formData.falla}
          Observaciones: ${formData.observaciones}
        `;

        navigator.clipboard.writeText(formattedText)
            .then(() => setCopied(true))
            .catch(err => alert('Error copying text: ', err));
    };

    const handleReset = () => {
        setFormData({
            cliente: '',
            telefono: 0,
            patente: '',
            unidad: '',
            ubicacion: '',
            carga: '',
            falla: '',
            observaciones: ''
        })
        setCopied(false);
    }

    return (
        <div className='container my-5'>
            <h2 className='my-3 fw-bold'><u>Formato para prestador Asist Cargo</u></h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label>Cliente:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.cliente}
                            onChange={e => handleFieldChange('cliente', e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.telefono}
                            onChange={e => handleFieldChange('telefono', e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Patente:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.patente}
                            onChange={e => handleFieldChange('patente', e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Unidad:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.unidad}
                            onChange={e => handleFieldChange('unidad', e.target.value)}
                        />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-group'>
                        <label>Ubicación:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.ubicacion}
                            onChange={e => handleFieldChange('ubicacion', e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Tipo de carga:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.carga}
                            onChange={e => handleFieldChange('carga', e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Falla:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.falla}
                            onChange={e => handleFieldChange('falla', e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Observaciones:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={formData.observaciones}
                            onChange={e => handleFieldChange('observaciones', e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='d-flex justify-content-between align-items-cente my-3'>
                        <button className="btn btn-dark" onClick={handleCopyClick}>
                            {copied ? 'Copiado' : 'Copiar'}
                        </button>
                        <button className="btn btn-dark" onClick={handleReset}>
                            Limpiar
                        </button>
                    </div>
                    <p className='pt-2'>Enviar formato al siguiente correo <b>operaciones@assistcargo.com</b></p>
                </div>
            </div>
        </div>
    );
}



