import React, { useState } from 'react'

export default function Formato() {

    const [formData, setFormData] = useState({
        aceptaModalidad: 'no',
        plazos: '',
        documentacion: {
            llaves: false,
            autorizacion: false,
            cedulaVerde: false,
            cedulaVerdeDigital: false
        },
        metodopago: '',
        cobrado: 'no',
        viajero: 'reintegro',
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


    const handleMetodoPagoChange = (value) => {
        if (formData.aceptaModalidad === 'no') {
            setFormData((prevData) => ({
                ...prevData,
                metodoPago: value,
                aceptaModalidad: 'si',
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                metodoPago: value,
            }));
        }
    }

    const handleCopyClick = () => {
        let formattedText = '';

        if (formData.aceptaModalidad === 'si') {
            formattedText += 'Acepta Modalidad: Sí\n';
        } else {
            formattedText += 'Cliente no acepta modalidad.\n';
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
        if (formData.documentacion.cedulaVerdeDigital) {
            formattedText += 'Cédula Verde Digital, ';
        }
        formattedText = formattedText.replace(/, $/, '\n');

        formattedText += `Método de pago: ${formData.metodoPago}\n`;

        if (formData.cobrado === 'si') {
            formattedText += 'Adicional cobrado: Sí\n';
        } else {
            formattedText += 'Adicional cobrado: No - Pago pendiente.\n';
        }

        formattedText += 'Viajero: ';
        if (formData.viajero === 'reintegro') {
            formattedText += 'Reintegro\n';
        } else if (formData.viajero === 'combi') {
            formattedText += 'Combi \n';
        } else if (formData.viajero === 'micro') {
            formattedText += 'Pasakes en micro \n';
        } else if (formData.viajero === 'sinCoordinar') {
            formattedText += 'Sin Coordinar - Viajero pendiente de coordinación\n';
        }

        formattedText += `Observaciones: ${formData.observaciones}\n`;

        navigator.clipboard
            .writeText(formattedText)
            .then(() => setCopied(true))
            .catch((err) => alert('Error en copiar texto ', err));
    };

    const handleReset = () => {
        setFormData({
            aceptaModalidad: 'no',
            plazos: '',
            documentacion: {
                llaves: false,
                autorizacion: false,
                cedulaVerde: false,
                cedulaVerdeDigital: false
            },
            metodopago: '',
            cobrado: 'no',
            viajero: 'reintegro',
            observaciones: ''
        })
        setCopied(false);
    }


    return (
        <div className='formato-container'>
            <h1>Formulario</h1>
            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Acepta Modalidad:
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

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Plazos de entrega:
                    <input
                        className='mx-2'
                        type='text'
                        value={formData.plazos}
                        onChange={(e) => handleFieldChange('plazos', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                </label>
            </div>

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Documentación a entregar:
                    <input
                        className='mx-2'
                        type='checkbox'
                        checked={formData.documentacion.llaves}
                        onChange={() => handleDocumentacionChange('llaves')}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Llaves
                </label>
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
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='checkbox'
                        checked={formData.documentacion.cedulaVerdeDigital}
                        onChange={() => handleDocumentacionChange('cedulaVerdeDigital')}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Cédula Verde Digital
                </label>
            </div>

            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Método de pago:
                    <input
                        className='mx-2'
                        type='radio'
                        name='metodoPago'
                        value='transferencia'
                        checked={formData.metodoPago === 'transferencia'}
                        onChange={() => handleMetodoPagoChange('transferencia')}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Transferencia
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='metodoPago'
                        value='tarjetaCredito'
                        checked={formData.metodoPago === 'tarjetaCredito'}
                        onChange={() => handleMetodoPagoChange('tarjetaCredito')}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Tarjeta de Crédito
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='metodoPago'
                        value='tarjetaDebito'
                        checked={formData.metodoPago === 'tarjetaDebito'}
                        onChange={() => handleMetodoPagoChange('tarjetaDebito')}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Tarjeta de Débito
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
                        onChange={(e) => handleFieldChange('viajero', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Reintegro
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='viajero'
                        value='combiPasajes'
                        checked={formData.viajero === 'combiPasajes'}
                        onChange={(e) => handleFieldChange('viajero', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Combi Pasajes
                </label>
                <label className='p-1 mx-1'>
                    <input
                        className='mx-2'
                        type='radio'
                        name='viajero'
                        value='sinCoordinar'
                        checked={formData.viajero === 'sinCoordinar'}
                        onChange={(e) => handleFieldChange('viajero', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                    Sin Coordinar
                </label>
            </div>



            <div className='form-row py-1'>
                <label className='p-1 mx-1'>
                    Observaciones:
                    <textarea
                        className='mx-2'
                        value={formData.observaciones}
                        onChange={(e) => handleFieldChange('observaciones', e.target.value)}
                        disabled={formData.aceptaModalidad === 'no'}
                    />
                </label>
            </div>

            <div className='form-row py-1'>
                <button className='btn btn-dark mt-3 ' onClick={handleCopyClick}>
                    {copied ? 'Copiado' : 'Copiar'}
                </button>
                <button className='btn btn-dark mt-3 mx-4' onClick={handleReset}>
                    Restablecer
                </button>
            </div>
        </div>
    );
}

