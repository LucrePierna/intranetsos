/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Organigrama() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mx-auto  mt-5'>
    <div>
      <iframe
        src="https://redsos-my.sharepoint.com/personal/fnpenaloza_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={8590df75-ba36-46f5-8859-015c92573dc0}&amp;action=embedview" width="800px" height="500px" frameborder="0">Esto es un documento de
        <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de
        <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>
    </div>
    <div className='mt-3'>
      <button> <a target='blank' href="https://redsos-my.sharepoint.com/personal/fnpenaloza_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={8590df75-ba36-46f5-8859-015c92573dc0}&amp;action=embedview">Vista</a></button>
    </div>
  </div>
  )
}
