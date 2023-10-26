import React, { useState } from 'react';

export default function CalculadoraExtranjero() {
    const [tipoCalculo, setTipoCalculo] = useState('km');
    const [cantidadKm, setCantidadKm] = useState();
    const [valorKm, setValorKm] = useState();
    const [coberturaCliente, setCoberturaCliente] = useState();
    const [cotizacion, setCotizacion] = useState();
    const [valorDolar, setValorDolar] = useState();
    const [resultado, setResultado] = useState();
    const [copiado, setCopiado] = useState(false);
    const [restoCobKm, setRestoCobKm] = useState();
    const [restoCob, setRestoCob] = useState();

    const handleCalculo = () => {
        setCopiado(false);
        if (tipoCalculo === 'km') {
            const cobertura = cantidadKm * valorKm;
            const coberturaUsd = cobertura / valorDolar;
            const resultadoCalculado = cotizacion - coberturaUsd;
            const resultadoFinal = Math.abs(resultadoCalculado.toFixed(2));
            const restoCoberturaKm = resultadoFinal * valorDolar / valorKm;
            const restoCobertura = resultadoFinal * valorDolar;
            setResultado(`La costo del servicio es de USD ${resultadoFinal}`);
            setRestoCobKm(`La cobertura del cliente es de ${restoCoberturaKm.toFixed(0)} km`);
            setRestoCob(`La cobertura del cliente es de $ ${restoCobertura.toFixed(0)} `);
        } else {
            const resultadoCalculado = coberturaCliente / valorDolar - cotizacion;
            const resultadoFinal = Math.abs(resultadoCalculado.toFixed(2));
            const restoCobertura = resultadoFinal * valorDolar;
            const restoCoberturaKm = resultadoFinal * valorDolar / valorKm;
            setResultado(`La costo del servicio es de USD${resultadoFinal}`);
            setRestoCobKm(`La cobertura del cliente es de ${restoCoberturaKm.toFixed(0)} km`);
            setRestoCob(`La cobertura del cliente es de $ ${restoCobertura.toFixed(0)} `);
        }
    };

    const handleLimpiar = () => {
        setTipoCalculo('km');
        setCantidadKm();
        setValorKm();
        setRestoCobKm();
        setRestoCob();
        setCoberturaCliente();
        setCotizacion();
        setValorDolar();
        setResultado();
        setCopiado(false);
    };

    const handleCopiar = () => {
        let contenidoACopiar = resultado;

        if (restoCobKm) {
            contenidoACopiar += '\n' + restoCobKm;
        }

        if (restoCob) {
            contenidoACopiar += '\n' + restoCob;
        }

        if (contenidoACopiar) {
            navigator.clipboard.writeText(contenidoACopiar).then(() => {
                setCopiado(true);
                console.log('Resultado copiado al portapapeles: ' + contenidoACopiar);
            }).catch((error) => {
                console.error('Error al copiar al portapapeles: ' + error);
            });
        }
    };

    return (
        <div className='containerExtranjero '>
            <h1>Calculadora Extranjero</h1>
            <div className='d-flex flex-row'>
                <label className='form-check-label pt-2'>
                    <input
                        type="checkbox"
                        name="tipoCalculo"
                        value="km"
                        className='form-check-input  rounded-circle mx-2'
                        checked={tipoCalculo === 'km'}
                        onChange={() => setTipoCalculo('km')}
                    />
                    Kilómetros
                </label>
                <label className='form-check-label pt-2'>
                    <input
                        type="checkbox"
                        name="tipoCalculo"
                        value="dinero"
                        className='form-check-input  rounded-circle mx-2'
                        checked={tipoCalculo === 'dinero'}
                        onChange={() => setTipoCalculo('dinero')}
                    />
                    Dinero
                </label>
            </div>
            {tipoCalculo === 'km' && (
                <div className='mt-2'>
                    <label className='form-check pt-2'>
                        Cantidad de Kilómetros:
                        <input
                            type="number"
                            className='form-control input-style'
                            value={cantidadKm}
                            onChange={(e) => setCantidadKm(e.target.value)}
                        />
                    </label>
                    <label className='form-check pt-2'>
                        Valor de Kilómetro:
                        <input
                            type="number"
                            className='form-control input-style'
                            value={valorKm}
                            onChange={(e) => setValorKm(e.target.value)}
                        />
                    </label>
                </div>
            )}
            {tipoCalculo === 'dinero' && (
                <div>
                    <label className='form-check pt-2'>
                        Cobertura del Cliente:
                        <input
                            type="number"
                            className='form-control input-style'
                            value={coberturaCliente}
                            onChange={(e) => setCoberturaCliente(e.target.value)}
                        />
                    </label>
                    <label className='form-check pt-2'>
                        Valor de Kilómetro:
                        <input
                            type="number"
                            className='form-control input-style'
                            value={valorKm}
                            onChange={(e) => setValorKm(e.target.value)}
                        />
                    </label>
                </div>
            )}
            <label className='form-check pt-2'>
                Cotización:
                <input
                    type="number"
                    className='form-control input-style'
                    value={cotizacion}
                    onChange={(e) => setCotizacion(e.target.value)}
                />
            </label>
            <label className='form-check pt-2'>
                Valor de divisa del Día:
                <input
                    type="number"
                    className='form-control input-style'
                    value={valorDolar}
                    onChange={(e) => setValorDolar(e.target.value)}
                />
            </label>
            <div className='d-flex flex-row mt-4'>
                <button className='btn btn-danger mt-3 mx-2' onClick={handleCalculo}>Calcular</button>
                <button className={`btn btn-${copiado ? 'success' : 'danger'} mt-3 mx-2`} onClick={copiado ? null : handleCopiar}>
                    {copiado ? 'Copiado' : 'Copiar'}
                </button>
                <button className='btn btn-danger mt-3 mx-2' onClick={handleLimpiar}>Limpiar</button>
            </div>
            <div className='mt-2'>
                {resultado && (
                    <div className="bg-success p-2" dangerouslySetInnerHTML={{ __html: resultado }}></div>
                )}
                {restoCobKm && (
                    <div className="bg-success p-2" dangerouslySetInnerHTML={{ __html: restoCobKm }}></div>
                )}
                {restoCob && (
                    <div className="bg-success p-2" dangerouslySetInnerHTML={{ __html: restoCob }}></div>
                )}

            </div>
        </div>
    );
}


