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
        let resultadoCalculado = km * precio;
        let detalleCalculoTexto = `${km} km * $${precio}\n`;

        if (tieneIVA) {
            resultadoCalculado *= 1.21;
            detalleCalculoTexto += '+ IVA';
        } else {
            detalleCalculoTexto += 'Sin IVA';
        }

        if (!tieneTopeDeCobertura) {
            if (esPorPersona && personas && cobertura) {
                resultadoCalculado -= cobertura * personas;
                detalleCalculoTexto += `\nCobertura por persona: $${cobertura}\n`;
                detalleCalculoTexto += `Personas: ${personas}\n`;
            } else if (!esPorPersona && cobertura) {
                resultadoCalculado -= cobertura;
                detalleCalculoTexto += `\nCobertura global: $${cobertura}\n`;
            }
        }

        resultadoCalculado = Math.max(resultadoCalculado, 0);

        setResultado(resultadoCalculado);
        setDetalleCalculo(detalleCalculoTexto);
    }

    const handleNoTieneTopeChange = (e) => {
        setTieneTopeDeCobertura(e.target.checked);
        if (e.target.checked) {
            calcularResultado();
        }
    }

    const handleEsPorPersonaChange = (e) => {
        setEsPorPersona(e.target.checked);
    }

    return (
        <div className='d-flex flex-column calculadora'>
            <h1>Calculadora de Viajero</h1>
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
                <Button onClick={calcularResultado} color="danger" variant="ghost">Calcular</Button>
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
