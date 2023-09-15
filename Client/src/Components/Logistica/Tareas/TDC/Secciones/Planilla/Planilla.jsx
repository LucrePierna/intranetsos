import React from 'react'
import ImgPlanillatdc from '../../../../Image/planilla-tdc.png'


export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
    <h1>Torre de Conexion</h1>
    <img className='responsiveImg' src={ImgPlanillatdc} alt="planilla" /> 
    <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7B5421D102-2397-4907-B6DB-5BD402591161%7D&file=REDUCCI%25u00d3N%20DE%20COSTOS%202023.xlsx&action=default&mobileredirect=true" target="_blank" rel="noopener noreferrer">
      <button type="button" class="btn btn-danger mt-3">Planilla Torre de conexion</button>
      </a>
    </div>
  )
}
