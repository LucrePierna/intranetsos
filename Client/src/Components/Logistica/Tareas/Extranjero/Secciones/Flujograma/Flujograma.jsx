/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos-my.sharepoint.com/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={c9f803dc-1971-4ca1-936a-f8b7ba27cc84}&amp;action=embedview" width="1200px" height="700px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      <div className='mt-3'>
      <a target='blank' href="https://redsos-my.sharepoint.com/personal/pvivas_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={62bf8183-24d5-4395-847e-56b0caaa2879}&action=embedview"> <button type='button' class="btn btn-danger mt-3">Acceso</button></a>
      </div>
    </div>
  );
}


