import React from 'react'

export default function AnalisisDelServicio() {
  return (
    <div>AnalisisDelServicio
        <table className='mt-5 mb-2'>
              <tr className='border border-dark'>
                <td>Historial de servicios anteriores</td>
                <td>Titular</td>
                <td>Vehículo</td>
                <td>Dominio</td>
                <td>Color</td>
              </tr>
              <tr className='border border-dark'><td>Falla</td>
                <td>Teléfono</td>
                <td>Ubicación origen y destino</td>
                <td>Cantidad de pasajeros</td>
                <td>Requisitos para que el vehículo viaje solo en caso de solicitar</td></tr>
              <tr className='border border-dark'><td>Horarios de taller</td>
                <td>Si posee carga</td>
                <td>Dimensiones y si hay alguna otra información extra en referencias</td>
                <td>Cobertura de la asistencia</td>
                <td>Si el trayecto corresponde o no a recorrido de transportin</td></tr>
            </table>
    </div>
  )
}
