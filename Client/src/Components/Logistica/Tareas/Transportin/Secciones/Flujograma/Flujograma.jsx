/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export default function Flujograma() {
  return (
    <div className='conteiner-flujograma'>
      <h1>Flujograma</h1>
      <iframe
        src="https://redsos-my.sharepoint.com/:u:/r/personal/lgalindez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7Bd3410994-8a45-467f-a83e-6ade6fbb2933%7D&amp=&action=embedview" width="1280px" height="700px" frameborder="0">Esto es un documento de
        <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de
        <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>

      <div className='mt-3'>
        <button> <a target='blank' href="https://redsos-my.sharepoint.com/:u:/r/personal/lgalindez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7Bd3410994-8a45-467f-a83e-6ade6fbb2933%7D&amp=&action=embedview">Vista</a></button>
      </div>
    </div>
  )
}
