import React, { useState } from 'react';

export default function ViajeroReintegro() {
    const [selectedOption, setSelectedOption] = useState('');
    const [km, setKm] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setResultado(null);
        setKm('');
    };

    const calcularResultado = () => {
        if (selectedOption === 'remis') {
            if (km <= 20) {
                setResultado(1500);
            } else if (km > 20 && km <= 60) {
                setResultado(km * 120);
            } else {
                setResultado('Debe calcular con Micro');
            }
        } else if (selectedOption === 'micro') {
            if (km > 60) {
                setResultado(km * 18);
            } else {
                setResultado('Debe calcular con Remis');
            }
        }
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center mt-5  bg-secondary rounded p-5">
            <h1 className='text-center mb-4'>REINTEGRO DE VIAJERO</h1>
            <div className="form-group">
                <label htmlFor="transporte" className='mb-3 fs-4'>Medio de transporte:</label>
                <select id="transporte" className="form-control" value={selectedOption} onChange={handleOptionChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="remis">Remis</option>
                    <option value="micro">Micro</option>
                </select>
            </div>

            {selectedOption && (
                <div className="form-group">
                    <label htmlFor="km" className='my-4 fs-4'>Cantidad de kilómetros:</label>
                    <input
                        type="number"
                        id="km"
                        className="form-control"
                        value={km}
                        onChange={(e) => setKm(e.target.value)}
                    />
                </div>
            )}

            {selectedOption && (
                <button className="btn btn-danger mt-5 buttonExt" onClick={calcularResultado}>Calcular</button>
            )}

            {resultado !== null && (
                <div className="mt-3">
                    {typeof resultado === 'number' ? (
                        <p className="alert alert-success">El reintegro es de ${resultado}</p>
                    ) : (
                        <p className="alert alert-danger">{resultado}</p>
                    )}
                </div>
            )}
        </div>
    );
}
