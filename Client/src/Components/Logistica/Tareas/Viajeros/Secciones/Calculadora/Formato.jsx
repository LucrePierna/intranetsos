import React, { useState } from 'react';
import { Button } from "@nextui-org/react";

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
            detalleCalculoTexto += '+ IVA\n';
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
                detalleCalculoTexto += `Restando cobertura del cliente: $${coberturaTotal}\n`;
            } else if (!esPorPersona && cobertura) {
                coberturaRestada = cobertura;
                resultadoCalculado -= cobertura;
                detalleCalculoTexto += `Cobertura global: $${cobertura}\n`;
                detalleCalculoTexto += `Restando cobertura del cliente: $${cobertura}\n`;
            }  
            if(tieneTopeDeCobertura){
                setResultado(0)
            }else{
                setResultado(resultadoCalculado)
            }
            setDetalleCalculo(detalleCalculoTexto)
        }

        resultadoCalculado = Math.max(resultadoCalculado, 0);

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
            calcularResultado(0);
            setDetalleCalculo('Esta cubierto para el cliente.')
        }
    }

    const handleEsPorPersonaChange = (e) => {
        setEsPorPersona(e.target.checked);
    }

    return (
        <div className='d-flex flex-column calculadora'>
            <h1 className='text-center m-auto mb-3'>Calculadora de Viajero</h1>
            <input type="number" name="km" value={km} onChange={handleInputChange} placeholder="Cargar kilómetros" />

            <input type="text" name="precio" value={precio} onChange={handleInputChange} placeholder="Cargar precio en $" />

            <input type="checkbox" name="tieneIVA" checked={tieneIVA} onChange={(e) => setTieneIVA(e.target.checked)} />
            <label htmlFor="tieneIVA">Agregar IVA</label>

            <input type="number" name="personas" value={personas} onChange={handleInputChange} placeholder="Cantidad de personas" disabled={!esPorPersona} />

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
                    name='cobertura'
                    value={cobertura}
                    onChange={handleInputChange}
                    placeholder='Cobertura del cliente'
                    disabled
                />
            ) : (
                <input
                    type='text'
                    name='cobertura'
                    value={cobertura}
                    onChange={handleInputChange}
                    placeholder='Cobertura del cliente'
                />
            )}

            {!tieneTopeDeCobertura && (
                <Button onClick={calcularResultado} color="danger" >Calcular</Button>
            )}

            <div>
                {resultado === 0 && !tieneTopeDeCobertura ? (
                    <div className='text-bg-danger '>Está cubierto para el cliente.</div>
                ) : (
                    <div>El costo viajero es: $ {resultado}</div>
                )}
            </div>

            {tieneTopeDeCobertura && resultado === 0 ? (
                <div className='text-bg-danger '>Está cubierto para el cliente.</div>
            ) : null}

            <div>{detalleCalculo}</div>
        </div>
    );
}
