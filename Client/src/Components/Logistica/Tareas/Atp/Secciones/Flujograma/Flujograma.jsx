import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={305484b8-3e9c-437c-9246-c4406c837fa2}&amp;action=embedview" width="1200px" height="700px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe> 
      <div className='mt-3'>
        <a target='blank' href="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={305484b8-3e9c-437c-9246-c4406c837fa2}&action=embedview">
          <button type='button' class="btn btn-danger mt-3" > Acceso</button ></a>
      </div>
    </div>
  );
}
