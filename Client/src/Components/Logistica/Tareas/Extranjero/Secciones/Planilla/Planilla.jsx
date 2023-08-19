import React from 'react'
import ImgPlanilla from '../../../../Image/planillaExtranjero.jpg'
import './Planilla.css'

export default function Planilla() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      <h1>Planilla Extranjero</h1>
     {/*  <img className='img' src={ImgPlanilla} alt="planilla" /> */}
     <iframe src="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7B865D5B4F-42CC-47FF-9C63-9815123182A0%7D&file=Extranjeros.xlsx&action=default&mobileredirect=true" 
      width="640" height="480"></iframe>
      <a href="https://redsos-my.sharepoint.com/:x:/r/personal/lpierna_redsos_com_ar/Documents/Extranjeros.xlsx?d=w865d5b4f42cc47ff9c639815123182a0&csf=1&web=1&e=IyKZWu" target="_blank" rel="noopener noreferrer">
        <button type="button" class="btn btn-outline-light">Planilla Extranjero</button>
        </a>
    </div>
  )
}
