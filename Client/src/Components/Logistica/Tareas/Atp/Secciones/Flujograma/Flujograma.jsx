import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos-my.sharepoint.com/personal/apra_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={6009fc7d-0f11-4fb9-8211-cd8d280f4bf6}&amp;action=embedview"
        width="1280px" height="700px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com" rel="noreferrer">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iframe>
      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/personal/apra_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={6009fc7d-0f11-4fb9-8211-cd8d280f4bf6}&action=embedview">
          <button type='button' class="btn btn-danger mt-3" > Acceso</button ></a>
      </div>
    </div>
  );
}
