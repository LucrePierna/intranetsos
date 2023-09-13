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
        <div className='d-flex flex-column py-2 justify-content-center text-start'>
            <h6 className='my-3'>Formato para prestador Asist Cargo</h6>
            <div>
                <label className="px-3 py-2">Cliente:</label>
                <input
                    type="text"
                    value={formData.cliente}
                    onChange={e => handleFieldChange('cliente', e.target.value)}
                />
            </div>
            <div>
                <label className="px-3 py-2">Télefono:</label>
                <input
                    type="number"
                    value={formData.telefono}
                    onChange={e => handleFieldChange('telefono', e.target.value)}
                />
            </div>
            <div>
                <label className="px-3 py-2">Patente:</label>
                <input
                    type="text"
                    value={formData.patente}
                    onChange={e => handleFieldChange('patente', e.target.value)}
                />
            </div>
            <div>
                <label className="px-3 py-2">Unidad:</label>
                <input
                    type="text"
                    value={formData.unidad}
                    onChange={e => handleFieldChange('unidad', e.target.value)}
                />
            </div>
            <div>
                <label className="px-3 py-2">Ubicación:</label>
                    <input
                        type="number"
                        value={formData.ubicacion}
                        onChange={e => handleFieldChange('ubicacion', e.target.value)}
                    />
                    
            </div>
            <div>
                <label className="px-3 py-2">Tipo de carga:</label>
                <input
                    type="text"
                    value={formData.carga}
                    onChange={e => handleFieldChange('carga', e.target.value)}
                />
            </div>
            <div>
                <label className="px-3 py-2">Falla:</label>
                <input
                    type="text"
                    value={formData.falla}
                    onChange={e => handleFieldChange('falla', e.target.value)}
                />
            </div>
            <div>
                <label className="px-3 py-2">Observaciones:</label>
                <input
                    type="text"
                    value={formData.observaciones}
                    onChange={e => handleFieldChange('observaciones', e.target.value)}
                />
            </div>
            <div className='d-flex flex-row pt-3 m-auto h-50 w-50 m-auto'>
                <button className="btn btn-dark mt-3 " onClick={handleCopyClick}>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
                <button className="btn btn-dark mt-3 mx-4" onClick={handleReset}>
                    Restablecer
                </button>
            </div>

        <p className='pt-2'>Enviar formato al siguiente correo <b>operaciones@assistcargo.com</b></p>

        </div>
    )
}



