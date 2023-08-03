import React, { useState } from 'react'

export default function Calculadora() {
  const [form, setForm] = useState({
     personas: "",
     viajero: "",
     destino: "",
     tipo: "",
     tope: "",
     observacion: ""
  })
  function calulo() {

  }
  return (
    <div>
      <div>
        <h1>Calculo de Viajero</h1>
        
      </div>
      <div>
        <h1>Resumen de personas</h1>

        <h3>Cantidad de Personas:
        <input type="Number" placeholder='Cantidad de personas'/>
        </h3>

        <h3>Cantidad por viajero: 
        <input type="Number" placeholder='Cantidad por viajero'/>
        </h3>

        <label>Tipo de Servicio</label>
        <label>
          <input type="checkbox" />Doble cabina
          <input type="checkbox" />Colectivo
          <input type="checkbox" />Taxi/Remis
          <input type="checkbox" />Reintegro
        </label>

        <h3>Destino:
        <input type="text" placeholder='Destino'/>
        </h3>

        <h3>Observacion:
        <textarea type="text" placeholder='Observación'/>
        </h3>
      </div>
    </div>
  )
}
