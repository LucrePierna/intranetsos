/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

export default function CalculadoraTranp() {
    const [zon, setZon] = useState('bsas');
    const [kms, setKms] = useState('');
    const [resultado, setResultado] = useState(null);

    const valores = {
        bsas: {
            movida: 6419.86,
            km: 150.91
        },
        ros: {
            movida: 4461.84,
            km: 156.37
        },
        cba: {
            movida: 5749.67,
            km: 140.46
        },
        centro: {
            movida: 5751.21,
            km: 160.07
        },
        cuyo: {
            movida: 5313.01,
            km: 161.58
        },
        noreste: {
            movida: 4964.57,
            km: 152.07
        },
        noroeste: {
            movida: 6335.16,
            km: 179.35
        },
        patagoniaI: {
            movida: 6797.54,
            km: 196.63
        },
        patagoniaII: {
            movida: 6580.06,
            km: 210.21
        },
        patagoniaIII: {
            movida: 7174.66,
            km: 209.67
        },
    };

    const nombrePersonalizado = (zona) => {
        switch (zona) {
            case 'bsas':
                return 'CF, GBA Y LA PLATA';
            case 'ros':
                return 'ROSARIO';
            case 'cba':
                return 'CÓRDOBA';
            case 'centro':
                return 'CENTRO';
            case 'cuyo':
                return 'CUYO';
            case 'noreste':
                return 'NORESTE';
            case 'noroeste':
                return 'NOROESTE';
            case 'patagoniaI':
                return 'PATAGONIA I (O)';
            case 'patagoniaII':
                return 'PATAGONIA II (E)';
            case 'patagoniaIII':
                return 'PATAGONIA III (S)';
            default:
                return zona;
        }
    }

    const calcularCosto = () => {
        const kmsValue = parseFloat(kms);
        if (Math.sign(kmsValue) === -1) {
            setResultado('NO SE PUEDEN INGRESAR NÚMEROS NEGATIVOS');
        } else {
            const zona = valores[zon];
            if (zona) {
                const movida = zona.movida;
                const kmValor = zona.km;
                const costo = kmsValue * kmValor + movida;
                setResultado(`El costo total es: $${costo.toFixed(0)}`);
            } else {
                setResultado('Zona no encontrada');
            }
        }
    };

    const resetearValores = () => {
        setZon('bsas');
        setKms('');
        setResultado(null);
    };

    const copiarResultado = () => {
        if (resultado) {
            navigator.clipboard.writeText(resultado).then(() => {
                alert('Resultado copiado al portapapeles');
            });
        }
    };


    return (
        <div className="container text-center mt-5 py-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="bg-secondary rounded-5 p-4">
                        <h1 className='text-center mb-3'>Calculadora de Transportin</h1>
                        <div className="d-flex flex-column justify-content-center mt-2">
                            <label className="form-check py-3">
                                <div className='d-flex flex-column option-Transp '>
                                    Selecciona una zona
                                    <select value={zon} onChange={(e) => setZon(e.target.value)}>
                                        {Object.keys(valores).map((zona) => (
                                            <option key={zona} value={zona} label={nombrePersonalizado(zona)}>
                                                {zona}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                            <br />
                            <label className="form-check ">
                                Kilómetros:
                                <input className='mx-3' type="number" value={kms} onChange={(e) => setKms(e.target.value)} />
                            </label>
                        </div>
                        <br />
                        <div className='d-flex flex-row justify-content-around'>
                            <button className="btn btn-danger mt-3" onClick={calcularCosto}>Calcular</button>
                            <button className="btn btn-danger mt-3" onClick={resetearValores}>Restablecer</button>
                            <button className="btn btn-danger mt-3" onClick={copiarResultado}>Copiar Resultado</button>
                        </div>
                        <div>
                            {resultado && (
                                <div className="mt-3 py-4" dangerouslySetInnerHTML={{ __html: resultado }}></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
