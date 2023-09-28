import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={7d6b5515-b96a-4f17-b426-1a8f2be57ba7}&amp;action=embedview" width="1200px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

      <div className='mt-3'>
        <a target='blank' href="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={7d6b5515-b96a-4f17-b426-1a8f2be57ba7}&action=embedview">
          <button button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  );
}

