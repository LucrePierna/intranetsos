import React, { useState } from 'react'

export default function Formato() {
    const [formData, setFormData] = useState({
        presentacion: 'TORRE DE CONEXIONES:',
        codigo: '',
        kmDeSvc: '',
        kmDeMvl: '',
        observaciones: ''
    })
    const [copied, setCopied] = useState(false)

    const handleFieldChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    const handleCopyClick = () => {
        const formattedText = `
         ${formData.presentacion}
        Código: ${formData.codigo}
        Km de Svc: ${formData.kmDeSvc}
        Km de Mvl: ${formData.kmDeMvl}
        Observaciones: ${formData.observaciones}
        `;
        navigator.clipboard.writeText(formattedText)
            .then(() => setCopied(true))
            .catch(err => alert('Error en copiar texto ', err))
    }

    const handleReset = () => {
        setFormData({
            presentacion: 'TORRE DE CONEXION:',
            codigo: '',
            kmDeSvc: '',
            kmDeMvl: '',
            observaciones: ''
        })
        setCopied(false);
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='py-1'>
                        <label className='px-3 fs-4'>TORRE DE CONEXIONES:</label>
                    </div>
                    <div className='py-1'>
                        <label className='px-3 fs-4'>Código:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={formData.codigo}
                            onChange={(e) => handleFieldChange('codigo', e.target.value)}
                        />
                    </div>
                    <div className='py-1'>
                        <label className='px-3 fs-4'>Km tt de Svc: </label>
                        <input
                            type='text'
                            className='form-control'
                            value={formData.kmDeSvc}
                            onChange={(e) => handleFieldChange('kmDeSvc', e.target.value)}
                        />
                    </div>
                    <div className='py-1'>
                        <label className='px-3 fs-4'>Km tt de Mvl:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={formData.kmDeMvl}
                            onChange={(e) => handleFieldChange('kmDeMvl', e.target.value)}
                        />
                    </div>
                    <div className='py-1'>
                        <label className='px-3 fs-4'>Observaciones: </label>
                        <textarea
                            id='Observaciones'
                            name='Observaciones'
                            className='form-control'
                            rows='4'
                            cols='50'
                            value={formData.observaciones}
                            onChange={(e) => handleFieldChange('observaciones', e.target.value)}
                        />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                        <button className='btn btn-danger mt-3' onClick={handleCopyClick}>
                            {copied ? 'Copiado' : 'Copiar'}
                        </button>
                        <button className='btn btn-danger mt-3 mx-4' onClick={handleReset}>
                            Limpiar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
