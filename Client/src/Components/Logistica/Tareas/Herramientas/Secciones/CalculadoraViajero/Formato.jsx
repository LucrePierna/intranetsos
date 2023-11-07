import React, { useState, useEffect } from 'react';

export default function Formato() {
    const [km, setKm] = useState('');
    const [tieneIVA, setTieneIVA] = useState(false);
    const [precio, setPrecio] = useState('');
    const [personas, setPersonas] = useState('');
    const [cobertura, setCobertura] = useState('');
    const [resultado, setResultado] = useState('');
    const [tieneTopeDeCobertura, setTieneTopeDeCobertura] = useState(false);
    const [esPorPersona, setEsPorPersona] = useState(false);
    const [detalleCalculo, setDetalleCalculo] = useState('');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'km') {
            setKm(value);
        } else if (name === 'precio') {
            setPrecio(value);
        } else if (name === 'personas') {
            setPersonas(value);
        } else if (name === 'cobertura') {
            setCobertura(value);
        }
    }

    const calcularResultado = () => {
        let resultadoCalculado = km * precio * 2;
        let detalleCalculoTexto = `${km} km * 2 * $${precio} = $${resultadoCalculado}\n`;

        if (tieneIVA) {
            resultadoCalculado *= 1.21;
            detalleCalculoTexto += ` + IVA = $${Math.floor(resultadoCalculado)}   `;
        } else {
            detalleCalculoTexto += 'Sin IVA\n';
        }

        let coberturaRestada = 0;

        if (!tieneTopeDeCobertura) {
            if (esPorPersona && personas && cobertura) {
                const coberturaTotal = cobertura * personas;
                coberturaRestada = coberturaTotal;
                resultadoCalculado -= coberturaTotal;
                detalleCalculoTexto += `Cobertura por persona: $${cobertura}\n`;
                detalleCalculoTexto += `Personas: ${personas}\n`;
            } else if (!esPorPersona && cobertura) {
                coberturaRestada = cobertura;
                resultadoCalculado -= cobertura;
                detalleCalculoTexto += `Cobertura global: $${cobertura}\n`;
            }
        }

        resultadoCalculado = Math.max(resultadoCalculado, 0);
        resultadoCalculado = parseInt(resultadoCalculado);

        if (resultadoCalculado === 0) {
            detalleCalculoTexto += `Está cubierto para el cliente. `;
        } else {
            detalleCalculoTexto += `Restando la cobertura del cliente $${coberturaRestada}. Debe abonar cliente $${resultadoCalculado}`;
        }

        setResultado(resultadoCalculado);
        setDetalleCalculo(detalleCalculoTexto);
    }



    const handleNoTieneTopeChange = (e) => {
        setTieneTopeDeCobertura(e.target.checked);

        if (e.target.checked) {
            const resultadoCalculadoST = km * 2 * precio;

            if (tieneIVA) {
                const resultadoCalculadoConIVA = resultadoCalculadoST * 1.21;
                setResultado(resultadoCalculadoConIVA);
                setDetalleCalculo(`${km} km * 2 * $${precio} = $${resultadoCalculadoST}\n+ IVA (21%)\n`);
            } else {
                setResultado(resultadoCalculadoST);
                setDetalleCalculo(`${km} km * 2 * $${precio} = $${resultadoCalculadoST}\nSin IVA\n`);
            }
        } else {
            setResultado('');
            setDetalleCalculo('');
        }
    }

    useEffect(() => {
        setCopied(false);
    }, [km, precio, tieneIVA, personas, cobertura, tieneTopeDeCobertura, esPorPersona]);



    const handleEsPorPersonaChange = (e) => {
        setEsPorPersona(e.target.checked);
    }
    const copyToClipboard = () => {
        const resultadoEntero = Math.floor(resultado);

        const textToCopy = `${detalleCalculo}\nEl costo viajero es: $${resultadoEntero}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
        });
    };

    const resetResult = () => {
        setCobertura('')
        setTieneTopeDeCobertura('')
        setPrecio('')
        setKm('');
        setTieneIVA('')
        setEsPorPersona('')
        setPersonas('')
        setResultado('');
        setDetalleCalculo('');
        setCopied(false);
    };

    return (
        <div className='calculadora'>
            <h1 className='text-center m-auto mb-3'>Calculadora de Viajero</h1>
            <input className='inputViajero' type="text" name="km" value={km} onChange={handleInputChange} placeholder="Cargar kilómetros lineales" />

            <input className='inputViajero' type="text" name="precio" value={precio} onChange={handleInputChange} placeholder="Cargar precio en $" />

            <input type="checkbox" name="tieneIVA" checked={tieneIVA} onChange={(e) => setTieneIVA(e.target.checked)} />
            <label htmlFor="tieneIVA">Agregar IVA</label>

            <input className='inputViajero' type="text" name="personas" value={personas} onChange={handleInputChange} placeholder="Cantidad de personas" disabled={!esPorPersona} />

            <input
                type='checkbox'
                name='tieneTope'
                checked={tieneTopeDeCobertura}
                onChange={handleNoTieneTopeChange}
            />
            <label htmlFor='tieneTope'>No tiene tope de cobertura</label>

            <input
                type='checkbox'
                name='esPorPersona'
                checked={esPorPersona}
                onChange={handleEsPorPersonaChange}
            />
            <label htmlFor='esPorPersona'>Cobertura por persona</label>

            {tieneTopeDeCobertura ? (
                <input
                    type='text'
                    className='inputViajero'
                    name='cobertura'
                    value={cobertura}
                    onChange={handleInputChange}
                    placeholder='$ Cobertura del cliente'
                    disabled
                />
            ) : (
                <input
                    type='text'
                    name='cobertura'
                    value={cobertura}
                    onChange={handleInputChange}
                    placeholder='Cobertura del cliente'
                    className='inputViajero'
                />
            )}

            {!tieneTopeDeCobertura && (
                <button onClick={calcularResultado} className="btn btn-danger mt-3" >Calcular</button>
            )}

            <div>
                {resultado === 0 && !tieneTopeDeCobertura ? (
                    <div className='text-bg-danger '>Está cubierto para el cliente.</div>
                ) : (
                    <div className='text-bg-danger text-white fw-semi-bold'>El costo viajero es: $ {Math.floor(resultado)}</div>
                )}
            </div>

            {tieneTopeDeCobertura && resultado === 0 ? (
                <div className='text-bg-danger '>Está cubierto para el cliente.</div>
            ) : null}

            <div>{detalleCalculo}</div>
            <div className='form-group mt-3'>
                {!copied ? (
                    <button className='btn btn-dark btnGroup' onClick={copyToClipboard} >
                        Copiar Resultado
                    </button>
                ) : (
                    <div className='text-white' style={{ backgroundColor: 'green' }}>¡Resultado copiado al portapapeles!</div>
                )}
                <div className='my-2'>
                    <button className='btn btn-dark btnGroup' onClick={resetResult} >
                        Restablecer Resultado
                    </button>
                </div>
            </div>
        </div>


    );
}
