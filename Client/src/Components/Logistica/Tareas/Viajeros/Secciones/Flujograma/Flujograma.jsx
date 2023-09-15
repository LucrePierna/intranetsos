/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Flujograma() {
  return (
    <div className='conteiner-flujograma'>
      <iframe
        src="https://redsos-my.sharepoint.com/:u:/r/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7Bc3ef6e1d-bb25-4c3e-96c4-d26e38228643%7D&amp=&action=embedview" width="1280px" height="700px" frameborder="0">Esto es un documento de
        <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de
        <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>

      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/:u:/r/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7Bc3ef6e1d-bb25-4c3e-96c4-d26e38228643%7D&amp=&action=embedview">
          <button button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  )
}
