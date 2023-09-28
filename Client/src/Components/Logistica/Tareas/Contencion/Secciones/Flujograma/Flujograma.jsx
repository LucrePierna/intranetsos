import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={f13258b8-4a0e-4c91-a246-81161311a936}&amp;action=embedview" width="1200px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe> 
      <div className='mt-3'>
        <a target='blank' href="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={f13258b8-4a0e-4c91-a246-81161311a936}&action=embedview">
          <button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  );
}