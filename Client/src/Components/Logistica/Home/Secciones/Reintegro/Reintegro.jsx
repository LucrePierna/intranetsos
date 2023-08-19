import React, { useState } from 'react'

export default function Reintegro() {
  const [vehicleType, setVehicleType] = useState('liviano');
  const [assistanceType, setAssistanceType] = useState('mecanica');
  const [company, setCompany] = useState('otras');
  const [zone, setZone] = useState('Patagonia');
  const [kms, setKms] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    //funcion de calculo
    const baseRate = 100;
    const kmRate = 2;
    const calculatedResult = baseRate + (parseFloat(kms) * kmRate);

    setResult(calculatedResult);
  };
  return (
    <div className='d-flex flex-column justify-content-center h-70 w-50 m-auto mt-5 border border-2 rounded border-dark p-3 bg-secondary-subtle text-black'>
      <h2>Calculo de Reintegro</h2>
      <div className='d-flex flex-row '>
        <label>Tipo de asistencia:</label>
        <div className=''>
          <input
            type="checkbox"
            value="traslado"
            checked={assistanceType === 'traslado'}
            onChange={() => setAssistanceType('traslado')}
          />{' '}
          Traslado
        </div>
        <div>
          <input
            type="checkbox"
            value="mecanica"
            checked={assistanceType === 'mecanica'}
            onChange={() => setAssistanceType('mecanica')}
          />{' '}
          Mecánica
        </div>
      </div>
      <div>
        <label>Zona:</label>
        <select value={zone} onChange={(e) => setZone(e.target.value)}>
          <option value="patagonia">Patagonia</option>
          <option value="resto">Resto del país</option>
        </select>
      </div>
      <div>
        <label>Compañía:</label>
        <select value={company} onChange={(e) => setCompany(e.target.value)}>
          <option value="FP">Fed. Patronal</option>
          <option value="otras">Otras</option>
        </select>
      </div>
      <div className='d-flex mb-2'>
        <label>Tipo de vehículo:</label>
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="autoMoto">Auto/Moto</option>
          <option value="livianoExcedido">Liviano Excedido</option>
          <option value="camion">Camión</option>
        </select>
      </div>
      
      <div>
        <label>Kilómetros Lineales:</label>
        <input
          type="number"
          value={kms}
          onChange={(e) => setKms(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      {result !== null && (
        <div>
          <h3>Resultado del Cálculo:</h3>
          <p>SPEECH: Sr/a. Le informamos que se le va a cubrir el monto de ${result.toFixed(2)} correspondiente a un traslado de </p>
        </div>
      )}
    </div>
  );
};
