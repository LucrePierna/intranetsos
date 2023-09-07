/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

export default function MicroStrategy() {
  return (
    <div className='d-flex flex-column justify-contente-center mt-5'>
      <h3 className='text-center'>A MicroStrategy lo utilizamos para acceder a la planilla con los traslados que han sido derivados, en esta se podrá observar origen y destino de los servicios como también demora aproximada de finalización de los mismos, con sus respectivos códigos y base asignada.
      Para poder visualizarla y manipular de una mejor manera debemos descarga la planilla a Excel.</h3>
      <a href="http://cba-mstr02:8080/MicroStrategy/servlet/mstrWeb?evt=3186&src=mstrWeb.3186&subscriptionID=8C6D331949623CB6CE573F818C42E8E6&Server=CBA-MSTR02&Project=SOS%20BI&Port=0&share=1" target='_blank'><button type='button' class="btn btn-danger mt-3">MICROSTRATEGY</button></a>
      <h3>Ubicación del tablero: SOS BI/Mis informes/Torre de Conexiones </h3>
    </div>
  )
}
