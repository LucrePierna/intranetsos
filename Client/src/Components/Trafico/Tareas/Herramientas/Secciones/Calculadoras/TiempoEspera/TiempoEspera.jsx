import React, { useState } from 'react';

function TiempoEspera() {
  const [time, setTime] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularTiempo = () => {
    if (time !== '') {
      const minutos = parseFloat(time) / 60;
      setResultado(`INGRESÁ SÓLO EN CANTIDAD DE PRODUCTO: ${minutos.toFixed(2)}`);
    } else {
      setResultado('');
    }
  };

  return (
    <div className='container text-center mt-2 h-100 w-100 bg-secondary rounded-5 p-5'>
      <h1 className='text-center mt-3'>CALCULADORA DE TIEMPO DE ESPERA</h1>
      <div className='bg-dark border border-black rounded-2 '>
        <h1 className='text-center'>En tipo de producto seleccionar: </h1>
        <ul className='mt-2 list-unstyled text-center fs-bold'>
          <li>HORA DE ESPERA</li>
          <li>HORA DE TRABAJO</li>
        </ul>
      </div>
      <div className='mt-4'>
        <label className='px-2'>
          Ingrese la cantidad de productos:
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            style={{
              border: '1px solid black',
              boxShadow: '0 0 5px black',
              padding: '2px',
              marginTop: '10px',
              marginLeft: '5px',
            }}

          />
        </label>
      </div>
      <button className="btn btn-danger mt-4" onClick={calcularTiempo}>Calcular</button>
      {resultado && (
        <div className="mt-3 py-3 fw-bold" id="resultado" style={{ color: 'white' }}>
          {resultado}
        </div>
      )}
    </div>
  );
}

export default TiempoEspera;
