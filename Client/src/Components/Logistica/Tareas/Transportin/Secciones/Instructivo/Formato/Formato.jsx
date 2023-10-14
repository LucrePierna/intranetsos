import React, { useState } from 'react'

export default function Formato() {

    const [formData, setFormData] = useState({
        aceptaModalidad: 'si',
        plazos: '5 días hábiles',
        documentacion: {
            llaves: false,
            autorizacion: false,
            cedulaVerde: false,
        },
        metodoPago: 'Link de pago',
        cobrado: 'no',
        viajero: '',
        pertenencias: 'no',
        observaciones: ''
    })
    const [copied, setCopied] = useState(false)

    const handleFieldChange = (field, value) => {
        if (formData.aceptaModalidad === 'no') {
            setFormData((prevData) => ({
                ...prevData,
                [field]: value,
                aceptaModalidad: 'si',
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [field]: value,
            }));
        }
    };

    const handleDocumentacionChange = (field) => {
        if (formData.aceptaModalidad === 'no') {
            setFormData((prevData) => ({
                ...prevData,
                [field]: !prevData.documentacion[field],
                aceptaModalidad: 'si',
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                documentacion: {
                    ...prevData.documentacion,
                    [field]: !prevData.documentacion[field],
                },
            }));
        }
    };



    const handleReintegroChange = () => {
        handleFieldChange('viajero', 'reintegro');
    };

    const handleCombiChange = () => {
        handleFieldChange('viajero', 'combi');
    };

    const handlePasajeChange = () => {
        handleFieldChange('viajero', 'micro');
    };

    const handleSinCoordinarChange = () => {
        handleFieldChange('viajero', 'sinCoordinar');
    };


    const handleCopyClick = () => {
        let formattedText = '';

        if (formData.aceptaModalidad === 'si') {
            formattedText += 'Acepta Modalidad: Sí\n';
        } else {
            formattedText += 'Se ofrece modalidad al Cliente, no acepta modalidad. Se le informa que solo cuenta con traslado en zona.\n';
            navigator.clipboard
                .writeText(formattedText)
                .then(() => setCopied(true))
                .catch((err) => alert('Error en copiar texto ', err));
            return;
        }


        formattedText += `Plazos de entrega: ${formData.plazos}\n`;

        formattedText += 'Documentación a entregar: ';
        if (formData.documentacion.llaves) {
            formattedText += 'Llaves, ';
        }
        if (formData.documentacion.autorizacion) {
            formattedText += 'Autorización, ';
        }
        if (formData.documentacion.cedulaVerde) {
            formattedText += 'Cédula Verde, ';
        }

        formattedText = formattedText.replace(/, $/, '\n');

        formattedText += `Método de pago: ${formData.metodoPago}\n`;

        if (formData.cobrado === 'si') {
            formattedText += 'Adicional cobrado: Sí\n';
        } else if (formData.cobrado === 'sin adicional') {
            formattedText += 'Adicional: Sin adicional.\n';
        } else {
            formattedText += 'Adicional cobrado: No - Pago pendiente.\n';
        }

        formattedText += 'Viajero: ';
        if (formData.viajero === 'reintegro') {
            formattedText += 'Reintegro\n';
        } else if (formData.viajero === 'combi') {
            formattedText += 'Combi \n';
        } else if (formData.viajero === 'micro') {
            formattedText += 'Pasajes en micro \n';
        } else if (formData.viajero === 'sinCoordinar') {
            formattedText += 'Sin Coordinar - Viajero pendiente de coordinación\n';
        }

        if (formData.pertenencias === 'si') {
            formattedText += 'Se informa que la compañía no se responsabiliza por las pertenencias: Sí\n';
        } else {
            formattedText += 'Se informa que la compañía no se responsabiliza por las pertenencias: No\n';
        }

        formattedText += `Observaciones: ${formData.observaciones}\n`;

        navigator.clipboard
            .writeText(formattedText)
            .then(() => setCopied(true))
            .catch((err) => alert('Error en copiar texto ', err));
    };

    const handleReset = () => {
        setFormData({
            aceptaModalidad: 'si',
            plazos: '5 días hábiles',
            documentacion: {
                llaves: false,
                autorizacion: false,
                cedulaVerde: false,
                cedulaVerdeDigital: false
            },
            metodoPago: 'Link de pago',
            cobrado: 'no',
            viajero: 'reintegro',
            pertenencias: 'no',
            observaciones: ''
        })
        setCopied(false);
    }


    return (
        <div className='container formato-container'>
            <h1>Formulario</h1>
            <div className='form-row py-1'>
                <div className='col-md-6'>
                    <label className='p-1 mx-1'>
                        Acepta Modalidad:
                    </label>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex'>
                        <label className='p-1 mx-1'>
                            <input
                                className='mx-2'
                                type='radio'
                                name='aceptaModalidad'
                                value='si'
                                checked={formData.aceptaModalidad === 'si'}
                                onChange={(e) => handleFieldChange('aceptaModalidad', e.target.value)}
                            />
                            Sí
                        </label>
                        <label className='p-1 mx-1'>
                            <input
                                type='radio'
                                name='aceptaModalidad'
                                value='no'
                                checked={formData.aceptaModalidad === 'no'}
                                onChange={(e) => handleFieldChange('aceptaModalidad', e.target.value)}
                            />
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div className='form-row py-1'>
                <div className='col-md-6'>
                    <label className='p-1 mx-1'>
                        Plazos de entrega:
                        <input
                            className='mx-2'
                            value={formData.plazos}
                            onChange={(e) => handleFieldChange('plazos', e.target.value)}
                            readOnly={true}
                            disabled={formData.aceptaModalidad === 'no'}
                        />
                    </label>
                </div>
            </div>

            <div className='form-row py-1'>
                <div className='col-md-6'>
                    <label className='p-1 mx-1'>
                        Documentación a entregar:
                    </label>
                </div>
                <div className='col-md-6'>
                    <div>
                        <label className='p-1 mx-1'>
                            <input
                                className='mx-2'
                                type='checkbox'
                                checked={formData.documentacion.llaves}
                                onChange={() => handleDocumentacionChange('llaves')}
                                disabled={formData.aceptaModalidad === 'no'}
                            />
                            Llaves
                        </label>
                    </div>
                    <div>
                        <label className='p-1 mx-1'>
                            <input
                                className='mx-2'
                                type='checkbox'
                                checked={formData.documentacion.autorizacion}
                                onChange={() => handleDocumentacionChange('autorizacion')}
                                disabled={formData.aceptaModalidad === 'no'}
                            />
                            Autorización
                        </label>
                    </div>
                    <div>
                        <label className='p-1 mx-1'>
                            <input
                                className='mx-2'
                                type='checkbox'
                                checked={formData.documentacion.cedulaVerde}
                                onChange={() => handleDocumentacionChange('cedulaVerde')}
                                disabled={formData.aceptaModalidad === 'no'}
                            />
                            Cédula Verde
                        </label>
                    </div>
                </div>
            </div>

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Método de pago:
                    <input
                        className='mx-2'
                        value={formData.metodoPago}
                        onChange={(e) => handleFieldChange('metodoPago', e.target.value)}
                        readOnly={true}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                </label>
            </div>

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Adicional cobrado:
                    <input
                        className='mx-2'
                        type='radio'
                        name='cobrado'
                        value='si'
                        checked={formData.cobrado === 'si'}
                        onChange={(e) => handleFieldChange('cobrado', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Sí
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='cobrado'
                        value='no'
                        checked={formData.cobrado === 'no'}
                        onChange={(e) => handleFieldChange('cobrado', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    No
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='cobrado'
                        value='sin adicional'
                        checked={formData.cobrado === 'sin adicional'}
                        onChange={(e) => handleFieldChange('cobrado', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Sin adicional
                </label>
            </div>

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Viajero:
                    <input
                        className='mx-2'
                        type='radio'
                        name='viajero'
                        value='reintegro'
                        checked={formData.viajero === 'reintegro'}
                        onChange={handleReintegroChange}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Reintegro
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='viajero'
                        value='combi'
                        checked={formData.viajero === 'combi'}
                        onChange={handleCombiChange}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Combi
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='viajero'
                        value='micro'
                        checked={formData.viajero === 'micro'}
                        onChange={handlePasajeChange}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Pasaje en micro
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='viajero'
                        value='sinCoordinar'
                        checked={formData.viajero === 'sinCoordinar'}
                        onChange={handleSinCoordinarChange}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Sin Coordinar
                </label>
            </div>

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Se informa que la compañía no se responsabiliza por las pertenencias:
                    <input
                        className='mx-2'
                        type='radio'
                        name='pertenencias'
                        value='si'
                        checked={formData.pertenencias === 'si'}
                        onChange={(e) => handleFieldChange('pertenencias', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Sí
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='pertenencias'
                        value='no'
                        checked={formData.pertenencias === 'no'}
                        onChange={(e) => handleFieldChange('pertenencias', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    No
                </label>
            </div>


            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Observaciones:
                    <textarea
                        className='mx-2'
                        maxlength="218"
                        value={formData.observaciones}
                        onChange={(e) => handleFieldChange('observaciones', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                </label>
            </div>

            <div className='form-row py-1'>
                <button className='btn btn-danger mt-3 ' onClick={handleCopyClick}>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
                <button className='btn btn-danger mt-3 mx-4' onClick={handleReset}>
                    Limpiar
                </button>
            </div>
        </div>

    );
}



