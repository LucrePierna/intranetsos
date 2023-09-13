import React from 'react'

export default function Procedimientos() {
  return (
    <div className='d-flex flex-column h-50 w-50 mt-5 bg-light-subtle text-black rounded p-5 justify-content-center m-auto'>
      <h4 className='text-bold'>VENDER SVC EN BASE 6001</h4>
      <ul className='text-start mt-3'>
        <li>Debe haber, como máximo, diez (10) km de <b>Base</b> a <b>Origen</b> o desde <b>Base</b> a <b>Destino</b> del servicio.</li>
        <li>Debe haber, como mínimo, ocho (8) km lineales entre <b>Origen</b> u <b>Destino.</b></li>
        <li>Aplica para prestadores y móviles ficticios.</li>
        <li>Para motos: hagamos todo lo posible por cumplirlo. Si no tenemos opción, lo derivamos igual sin tener en cuenta estos requisitos.</li>
        <li>Pesados: no aplica. Seguimos con el mismo procedimiento de siempre para derivar Pesados.</li>
      </ul>
    </div>
  )
}
