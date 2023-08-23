/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Flujograma() {
  return (
    <div className='conteiner-flujograma'>
      <h1>Flujograma</h1>
      <iframe
        src="https://redsos.sharepoint.com/sites/intranet.rednacional/_layouts/15/Doc.aspx?sourcedoc={1c70c4c5-7b01-4de8-93a5-03ce0ecfc6d6}&amp;action=embedview" width="1280px" height="700px" frameborder="0">Esto es un documento de
        <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de
        <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>

      <div className='mt-3'>
        <button> <a target='blank' href="https://redsos.sharepoint.com/sites/intranet.rednacional/_layouts/15/Doc.aspx?sourcedoc={1c70c4c5-7b01-4de8-93a5-03ce0ecfc6d6}&amp;action=embedview">Vista</a></button>
      </div>
    </div>
  )
}