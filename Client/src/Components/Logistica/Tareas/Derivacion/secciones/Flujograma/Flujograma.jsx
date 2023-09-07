/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Flujograma() {
  return (
    <div className='conteiner-flujograma'>
      <h1>Flujograma</h1>
      <iframe src="https://redsos-my.sharepoint.com/personal/framirez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={a9380e98-7c70-4f26-a08f-43d8ae3ccd5a}&amp;action=embedview"
        width="1280px" height="700px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>
      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/personal/framirez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={a9380e98-7c70-4f26-a08f-43d8ae3ccd5a}&amp;action=embedview">
        <button type='button' class="btn btn-danger mt-3"> Vista</button></a>
      </div>
    </div>
  )
}
