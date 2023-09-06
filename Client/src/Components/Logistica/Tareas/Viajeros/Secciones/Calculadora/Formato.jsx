import React, { useState } from 'react'
import {Button} from "@nextui-org/react";

export default function Formato() {
    const [km, setKm] = useState('');
    const [tieneIVA, setTieneIVA] = useState(false);
    const [tieneTope, setTieneTope] = useState(false);
    const [precio, setPrecio] = useState('');
    const [personas, setPersonas] = useState('');
    const [cobertura, setCobertura] = useState('');
    const [resultado, setResultado] = useState('');

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

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
        if (tieneIVA) {
            resultadoCalculado *= 1.21;
        }
        if (tieneTope) {
            resultadoCalculado -= cobertura * personas;
        }
        setResultado(resultadoCalculado);
    }


    return (
        <div className='d-flex flex-column calculadora'>
            <h1>Calculadora de Viajero</h1>
            <select name="tipoKm" onChange={handleInputChange}>
                <option value="lineales">Kilómetros Lineales</option>
                <option value="totales">Kilómetros Totales</option>
            </select>
            <input type="number" name="km" value={km} onChange={handleInputChange} placeholder="Cargar kilómetros" />

            <input type="text" name="precio" value={precio} onChange={handleInputChange} placeholder="Cargar precio en $" />

            <input type="checkbox" name="tieneIVA" checked={tieneIVA} onChange={(e) => setTieneIVA(e.target.checked)} />
            <label htmlFor="tieneIVA">Agregar IVA</label>

            <input type="number" name="personas" value={personas} onChange={handleInputChange} placeholder="Cantidad de personas" />

            <input
                type='checkbox'
                name='tieneTope'
                checked={tieneTope}
                onChange={(e) => {
                    setTieneTope(e.target.checked);
                    if (!e.target.checked) {
                        setCobertura('');
                    }
                }}
            />
            <label htmlFor='tieneTope'>Tiene Tope de Cobertura</label>
            {tieneTope ? (
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

            <Button onClick={calcularResultado} color="primary" variant="ghost">Calcular</Button>
            <div>El valor del viajero es: $ {resultado}</div>
        </div>
    );
}

