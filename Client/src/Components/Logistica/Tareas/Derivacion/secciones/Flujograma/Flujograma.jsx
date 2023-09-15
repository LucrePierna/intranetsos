import React from 'react';

export default function Flujograma() {
  return (
    <div className='container-flujograma'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src="https://redsos-my.sharepoint.com/personal/framirez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={a9380e98-7c70-4f26-a08f-43d8ae3ccd5a}&amp;action=embedview"
          className="embed-responsive-item"
          frameborder="0"
          title="Flujograma"
        >
          Esto es un documento de{' '}
          <a target="_blank" href="https://office.com" rel="noreferrer">
            Microsoft Office
          </a>{' '}
          incrustado con tecnología de{' '}
          <a target="_blank" href="https://office.com/webapps" rel="noreferrer">
            Office
          </a>
          .
        </iframe>
      </div>
      <div className='mt-3'>
        <a
          target='blank'
          href="https://redsos-my.sharepoint.com/personal/framirez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={a9380e98-7c70-4f26-a08f-43d8ae3ccd5a}&amp;action=embedview"
        >
          <button type='button' className="btn btn-danger mt-3">
            Vista
          </button>
        </a>
      </div>
    </div>
  );
}
