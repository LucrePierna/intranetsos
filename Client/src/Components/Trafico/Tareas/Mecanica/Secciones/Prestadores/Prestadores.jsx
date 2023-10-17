import React from 'react'
import excelMeca from '../../../../Image/excelMeca.JPG'

export default function Prestadores() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
      {<img className='responsiveImg' src={excelMeca} alt="excelMeca" />}
      <div className='d-grid g-col-2 gap-1 col-2 '>
        <a href="https://redsos-my.sharepoint.com/:x:/r/personal/gcordeiro_redsos_com_ar/Documents/MECANICA/CRONOGRAMA%20PROY%20MECANICA.xlsx?d=wac6355a9311c48dcbc83ec1cb48311f1&csf=1&web=1&e=3YxSiW" target="_blank" rel="noopener noreferrer">
          <button button type='button' class="btn btn-danger mt-3">Acceso a planilla de móviles</button>
        </a>
      </div>
    </div>
  )
}








