import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos-my.sharepoint.com/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={401c6b80-9661-4f3a-b881-20a823da02f7}&amp;action=embedview" width="1200px" height="700px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={401c6b80-9661-4f3a-b881-20a823da02f7}&amp;action=embedview"> <button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  );
}

