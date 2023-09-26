import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe
        src="https://redsos-my.sharepoint.com/personal/lgalindez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={d3410994-8a45-467f-a83e-6ade6fbb2933}&amp;action=embedview" width="1280px" height="700px" frameborder="0">Esto es un documento de
        <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de
        <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>

      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/personal/lgalindez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={d3410994-8a45-467f-a83e-6ade6fbb2933}&action=embedview">
          <button button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  );
}

