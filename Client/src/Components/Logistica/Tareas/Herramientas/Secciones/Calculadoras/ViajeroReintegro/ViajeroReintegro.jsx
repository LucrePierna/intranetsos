import React, { useState } from 'react';

export default function ViajeroReintegro() {
    const [selectedOption, setSelectedOption] = useState('');
    const [km, setKm] = useState('');
    const [resultado, setResultado] = useState(null);
    const [cantPersona, setCantPersona] = useState('');
    const [formData, setFormData] = useState({
        resultadoFinal: ''
    });
    const [copied, setCopied] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setResultado(null);
        setKm('');
    };


    const calcularResultado = () => {
        let resultadoCalculado = null;
        let detalleCalculoTexto = '';

        if (selectedOption === 'remis') {
            if (km <= 20) {
                resultadoCalculado = 4800;
            } else if (km > 20 && km <= 60) {
                resultadoCalculado = km * 300;
            } else {
                resultadoCalculado = 'Debe calcular con Micro';
            }
        } else if (selectedOption === 'micro') {
            if (km > 60) {
                resultadoCalculado = km * 60 * cantPersona;
            } else {
                resultadoCalculado = 'Debe calcular con Remis';
            }
        }

        setResultado(resultadoCalculado);

        if (resultadoCalculado !== null) {
            setFormData({ resultadoFinal: resultadoCalculado.toString() });
        }
    };

    const handleCopyClick = () => {
        const formattedText = `
        Sr/a le informamos que el reintegro de su servicio es de $: ${formData.resultadoFinal}
        `;
        navigator.clipboard.writeText(formattedText)
            .then(() => setCopied(true))
            .catch(err => alert('Error en copiar texto ', err))
    }

    const handleReset = () => {
        setFormData({
            resultadoFinal: ''
        });
        setCopied(false);
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center mt-5 bg-secondary rounded p-5">
            <h1 className='text-center mb-4'>REINTEGRO DE VIAJERO</h1>
            <div className="form-group">
                <label htmlFor="transporte" className='mb-3 fs-4'>Medio de transporte:</label>
                <select id="transporte" className="form-control" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="remis">Remis</option>
                    <option value="micro">Micro</option>
                </select>
            </div>
            {selectedOption === 'micro' && (
                <div className='text-center my-4'>
                    <div className="bg-danger bg-gradient text-white p-3 rounded">
                        <h1 className="fs-6">De 0 a 4 años no abonan pasaje, solo coseguro. A cargo del cliente.</h1>
                    </div>
                </div>
            )}
            {selectedOption && (
                <div className="form-group">
                    <label htmlFor="km" className='my-4 fs-4'>Cantidad de kilómetros lineales:</label>
                    <input
                        type="text"
                        id="km"
                        className="form-control"
                        value={km}
                        onChange={(e) => setKm(e.target.value)}
                    />
                </div>
            )}

            {selectedOption === 'micro' && (
                <div className="form-group">
                    <label htmlFor="cantPersona" className='my-4 fs-4'>Cantidad de personas:</label>
                    <input
                        type="text"
                        id="cantPersona"
                        className="form-control"
                        value={cantPersona}
                        onChange={(e) => setCantPersona(e.target.value)}
                    />
                </div>
            )}

            {selectedOption && (
                <button className="btn btn-danger mt-5 buttonExt" onClick={calcularResultado}>Calcular</button>
            )}

            {resultado !== null && (
                <div className="mt-3">
                    {typeof resultado === 'number' ? (
                        <p className="alert alert-success">
                            Sr/a le informamos que el reintegro de su servicio es de ${resultado}.
                        </p>
                    ) : (
                        <p className="alert alert-danger">{resultado}</p>
                    )}
                </div>
            )}

            <div className='d-flex flex-row justify-content-center align-items-center mt-3'>
                {resultado !== null && (
                    <button className='btn btn-danger me-3' onClick={handleCopyClick}>
                        {copied ? 'Copiado' : 'Copiar'}
                    </button>
                )}
                <button className='btn btn-danger' onClick={handleReset}>
                    Limpiar
                </button>
            </div>
        </div>
    );
}
