import React, { useState } from 'react'

export default function CalculadoraPasajes() {
    const [valor, setValor] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [resultado, setResultado] = useState('');
    const [resultadoIva, setResultadoIva] = useState('');
    const [limpiar, setLimpiar] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'valor') {
            setValor(value);
        } else if (name === 'cantidad') {
            setCantidad(value);
        }
    }

    const calcularResultado = () => {
        setLimpiar(true);
        const resultadoCalculado = valor * cantidad;
        setResultado((resultadoCalculado.toFixed(2)));
        const resultadoCalculadoIva = resultadoCalculado / 1.105;
        setResultadoIva(resultadoCalculadoIva.toFixed(2));
    }

    const limpiarCampos = () => {
        setValor('');
        setCantidad('');
        setResultado('');
        setResultadoIva('');
        setLimpiar(false);
    }


    return (
        <div className="container text-center mt-2 py-3">
            <div className="row-md-8">
                <div className="bg-secondary rounded-5 p-4">
                    <h1 className='text-center my-2'>Calculadora para Pasajes</h1>
                    <div className="bg-danger text-white text-center p-2 border border-danger label-style p-2">
                        <p>Carga de productos a prestadores</p>
                        <ul className='list-group list-group-numbered text-start'>
                            <li>El producto a cargar es "PASAJE P/PRESTADOR 10,5"</li>
                            <li>CANTIDAD DE PRODUCTO 1</li>
                        </ul>
                    </div>
                    <div className='d-flex flex-column text-center justify-content-center'>
                        <>
                            <label className='mx-4 mt-3 fw-bold'>Valor de Pasaje:</label>
                            <input className='inputCustom' value={valor} name='valor' onChange={handleInputChange} type="text" />
                        </>
                        <>
                            <label className='mx-4 mt-3 fw-bold'>Cantidad de pasajes:</label>
                            <input className='inputCustom' value={cantidad} name='cantidad' onChange={handleInputChange} type="text" />
                        </>
                    </div>
                    <div>
                        <button className='btn btn-danger mt-3 mx-4' onClick={calcularResultado}>Calcular</button>
                        <button className='btn btn-danger mt-3 mx-4' onClick={limpiarCampos}>Limpiar</button>
                    </div>
                    <div>
                        {resultado && (
                            <div>
                                <div className='my-3 text-bg-danger'>El valor total de pasaje: $ {resultado}, corresponde a ${valor} * {cantidad} pasajes </div>
                                <div className='my-3 text-bg-danger'>Carga de Producto: $ {resultadoIva}</div>
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
