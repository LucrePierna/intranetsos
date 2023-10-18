import React, { useState } from 'react'

export default function Solicitud() {
    const [formData, setFormData] = useState({
        vehiculo: '',
        patente: '',
        color: '',
        titular: '',
        falla: '',
        ubicacion: '',
        destino: '',
        observacion: ''
    })
    const [copied, setCopied] = useState(false)

    const handleFieldChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleCopyClick = () => {
        let formattedText = '';

        formattedText += `
        Vehiculo: ${formData.vehiculo}
        Patente: ${formData.patente}
        Color: ${formData.color}
        Titular: ${formData.titular}
        Ubicación: ${formData.ubicacion}
        Destino: ${formData.destino}
        Falla: ${formData.falla}
        Observación: ${formData.observacion}`;

        navigator.clipboard
            .writeText(formattedText)
            .then(() => setCopied(true))
            .catch((err) => alert('Error en copiar texto ', err));
    }


    const handleReset = () => {
        setFormData({
            vehiculo: '',
            patente: '',
            color: '',
            titular: '',
            falla: '',
            ubicacion: '',
            destino: '',
            observacion: ''
        })
        setCopied(false);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex flex-row">
                    <div className='flex-column px-4'>
                        <div className='py-1'>
                            <label className='px-3'>Vehículo:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.vehiculo}
                                onChange={(e) => handleFieldChange('vehiculo', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Patente:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.patente}
                                onChange={(e) => handleFieldChange('patente', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Color:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.color}
                                onChange={(e) => handleFieldChange('color', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Titular:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.titular}
                                onChange={(e) => handleFieldChange('titular', e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='flex-column px-4'>
                        <div className='py-1'>
                            <label className='px-3'>Falla:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.falla}
                                onChange={(e) => handleFieldChange('falla', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Ubicación:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.ubicacion}
                                onChange={(e) => handleFieldChange('ubicacion', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Destino:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.destino}
                                onChange={(e) => handleFieldChange('destino', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Observación:</label>
                            <textarea
                                id='observacion'
                                name='observacion'
                                className='form-control'
                                rows='4'
                                cols='50'
                                value={formData.observaciones}
                                onChange={(e) => handleFieldChange('observacion', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button className="btn btn-danger" onClick={handleCopyClick}>
                                    {copied ? 'Copiado' : 'Copiar'}
                                </button>
                                <button className="btn btn-danger mx-4" onClick={handleReset}>
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}