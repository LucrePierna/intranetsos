/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'


export default function Organigrama() {
  return (
    <div className='conteiner-flujograma'>
      <h1>Flujograma</h1>
      <iframe src="https://redsos-my.sharepoint.com/personal/fnpenaloza_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={8590df75-ba36-46f5-8859-015c92573dc0}&amp;action=embedview" width="1280px" height="700px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/personal/fnpenaloza_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={8590df75-ba36-46f5-8859-015c92573dc0}&amp;action=embedview">
        <button type='button' class="btn btn-danger mt-3"> Vista</button></a>
      </div>
    </div>
  )
}
