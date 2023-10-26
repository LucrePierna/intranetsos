import React, { useState } from 'react';

const options = [
    { label: 'Uruguay', km: 1.30, mov: 51, ext: 20 },
    { label: 'Paraguay', km: 1.80, mov: 88, ext: 20 },
    { label: 'Chile', km: 1.21, mov: 25, ext: 20 },
];

export default function CalculadoraContraPrestacion() {
    const [selectedOption, setSelectedOption] = useState('');
    const [kms, setKms] = useState('');
    const [isExt, setIsExt] = useState(false);
    const [resultado, setResultado] = useState(null);
    const [copiado, setCopiado] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleKmsChange = (e) => {
        setKms(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsExt(e.target.checked);
    };

    const calcularResultado = () => {
        setCopiado(false);
        const option = options.find((opt) => opt.label === selectedOption);
        if (!option) {
            setResultado('Selecciona una opción válida.');
            return;
        }

        const kmsValue = parseFloat(kms);
        if (isNaN(kmsValue)) {
            setResultado('Ingresa un valor válido para los kilómetros.');
        } else if (kmsValue <= 20) {
            let resultadoMovida = option.mov;
            setResultado(`Valor del servicio ${resultadoMovida}.`);
        } else {
            let nuevoResultado = (kmsValue * 2) - 20;
            let resultadoKm = nuevoResultado * option.km;
            let resultadoFinal = resultadoKm + option.mov;

            if (isExt) {
                let resultadoExt = resultadoFinal + (0.2 * resultadoFinal);
                setResultado(`La cotización de la contraprestación es: USD${resultadoExt.toFixed(0)}`);
            } else {
                setResultado(`La cotización de la contraprestación es: USD${resultadoFinal.toFixed(0)}`);
            }
        }
    };

    const copiarResultado = () => {
        if (resultado) {
            navigator.clipboard.writeText(resultado).then(() => {
                setCopiado(true);
                console.log('Resultado copiado al portapapeles: ' + resultado);
            }).catch((error) => {
                console.error('Error al copiar al portapapeles: ' + error);
            });
        }
    };

    const resetearValores = () => {
        setSelectedOption('');
        setKms('');
        setIsExt(false);
        setResultado(null);
        setCopiado(false);
    };
    return (
        <div className="containerExt ">
            <div>
                <label>
                    Opción de Prestador
                    <select className='form-select container-style' value={selectedOption} onChange={handleOptionChange}>
                        <option value="">Selecciona una opción</option>
                        {options.map((option, index) => (
                            <option key={index} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div>
                <label className='form-check mt-2'>
                    Kilómetros lineales:
                    <input className='form-control input-style' type="text" value={kms} onChange={handleKmsChange} />
                </label>
                <label className='form-check-label my-2'>
                    Servicio en el exterior:
                    <input className='form-check-input  rounded-circle mx-2' type="checkbox" checked={isExt} onChange={handleCheckboxChange} />
                </label>

            </div>
            <div className='d-flex flex-row '>
                <button className='btn btn-danger mt-3 mx-2' onClick={calcularResultado}>Calcular</button>
                <button className={`btn btn-${copiado ? 'success' : 'danger'} mt-3 mx-2`} onClick={copiado ? null : copiarResultado}>
                    {copiado ? 'Copiado' : 'Copiar'}
                </button>
                <button className='btn btn-danger mt-3 mx-2' onClick={resetearValores}>Limpiar</button>
            </div>
            <div className='bg-success mt-3 px-2 '>{resultado && <p>{resultado}</p>}</div>
        </div>
    );
}
