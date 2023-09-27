import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos.sharepoint.com/sites/intranet.rednacional/_layouts/15/Doc.aspx?sourcedoc={118683ff-d97d-4f0b-9f65-83b403e280a5}&amp;action=embedview" width="1200px" height="700px" frameborder="0">Esto es un documento de <a target="_blank" href="https://office.com">Microsoft Office</a> incrustado con tecnología de <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      <div className='mt-3'>
        <a target='blank' href="https://redsos.sharepoint.com/sites/intranet.rednacional/_layouts/15/Doc.aspx?sourcedoc={118683ff-d97d-4f0b-9f65-83b403e280a5}&amp;action=embedview">
          <button type='button' class="btn btn-danger mt-3">Acceso</button></a>
      </div>
    </div>
  );
}



