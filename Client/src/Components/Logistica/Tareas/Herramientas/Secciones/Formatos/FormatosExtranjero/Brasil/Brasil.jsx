import React, { useState } from 'react'

export default function Brasil() {
    const [formData, setFormData] = useState({
        presentacion: 'Bom dia, Solicito orçamento e disponibilidade:',
        vehiculo: '',
        patente: '',
        color: '',
        titular: '',
        telefono: 0,
        origen: '',
        destino: '',
        falla: '',
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
        let formattedText = '';

        if (formData.saludo) {
            formattedText += `${formData.saludo}, `;
        }

        formattedText += `Solicito orçamento e disponibilidade:
          Veiculo: ${formData.vehiculo}
          Placa: ${formData.patente}
          Cor: ${formData.color}
          Segurado: ${formData.titular}
          Telefones: ${formData.telefono}
          Origem: ${formData.origen}
          Final: ${formData.destino}
          Falha De Carro: ${formData.falla}
          Observações: ${formData.observaciones}`;

        navigator.clipboard
            .writeText(formattedText)
            .then(() => setCopied(true))
            .catch((err) => alert('Error en copiar texto ', err));
    }


    const handleReset = () => {
        setFormData({
            presentacion: 'Bom dia, Solicito orçamento e disponibilidade:',
            vehiculo: '',
            patente: '',
            color: '',
            titular: '',
            telefono: 0,
            origen: '',
            destino: '',
            falla: '',
            observaciones: ''
        })
        setCopied(false);
    }

    return (
        <div className="container mt-3 ">
            <div className="row justify-content-center">
                <div className="d-flex flex-row justify-content-center">
                    <div className='flex-column px-4'>
                        <div className='py-1'>
                            <label className='px-3'>Saludo:</label>
                            <div className='form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='bomDia'
                                    value='Bom dia'
                                    checked={formData.saludo === 'Bom dia'}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            'saludo',
                                            e.target.checked ? 'Bom dia' : ''
                                        )
                                    }
                                />
                                <label className='form-check-label' htmlFor='bomDia'>
                                    Bom dia
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='boaTarde'
                                    value='Boa tarde'
                                    checked={formData.saludo === 'Boa tarde'}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            'saludo',
                                            e.target.checked ? 'Boa tarde' : ''
                                        )
                                    }
                                />
                                <label className='form-check-label' htmlFor='boaTarde'>
                                    Boa tarde
                                </label>
                            </div>
                            <div className='form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='boaNoite'
                                    value='Boa noite'
                                    checked={formData.saludo === 'Boa noite'}
                                    onChange={(e) =>
                                        handleFieldChange(
                                            'saludo',
                                            e.target.checked ? 'Boa noite' : ''
                                        )
                                    }
                                />
                                <label className='form-check-label' htmlFor='boaNoite'>
                                    Boa noite
                                </label>
                            </div>
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Solicito orçamento e disponibilidade:</label>
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Veiculo:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.vehiculo}
                                onChange={(e) => handleFieldChange('vehiculo', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Placa:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.patente}
                                onChange={(e) => handleFieldChange('patente', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Cor:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.color}
                                onChange={(e) => handleFieldChange('color', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Segurado:</label>
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
                            <label className='px-3'>Telefones:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.telefono}
                                onChange={(e) => handleFieldChange('telefono', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Origem:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.origen}
                                onChange={(e) => handleFieldChange('origen', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Final:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.destino}
                                onChange={(e) => handleFieldChange('destino', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Falha De Carro:</label>
                            <input
                                type='text'
                                className='form-control'
                                value={formData.falla}
                                onChange={(e) => handleFieldChange('falla', e.target.value)}
                            />
                        </div>
                        <div className='py-1'>
                            <label className='px-3'>Observações:</label>
                            <textarea
                                id='Observações'
                                name='Observações'
                                className='form-control'
                                rows='4'
                                cols='50'
                                value={formData.observaciones}
                                onChange={(e) => handleFieldChange('observaciones', e.target.value)}
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

