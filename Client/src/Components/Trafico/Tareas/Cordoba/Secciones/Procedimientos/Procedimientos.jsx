import React from 'react'

export default function Procedimientos() {
  return (
    <div className='d-flex flex-column h-50 w-50 mt-5 bg-light-subtle text-black rounded p-5 justify-content-center m-auto'>
      <h4 className='text-bold'>TOMAR SVC EN GRAN CORDOBA Y ALDAÑOS</h4>
      <ol className='text-start mt-3'>
        <li>Solo buscar svc de veh en transito/ruta.</li>
        <li>Tener en cuenta de no quedarse sin movil al momento de seleccionar el svc.</li>
        <li>Todo servicio con origen en Cba, es nuestro sin importar el destino.</li>
        <li>Evitar ruta Au. 9 y la zona de MonteCristo, salvo si es un caso del punto 6.</li>
        <li>Debe haber 50kms como máximo desde la ubicación del móvil/prestador hasta el origen o destino del svc.</li>
        <li>Si desde Red Nacional nos piden ayuda con un svc que no cumple con algunos de los puntos anteriores, consultar con el supervisor para evaluar la posibilidad de tomar el svc.</li>
      </ol>
    </div>
  )
}
