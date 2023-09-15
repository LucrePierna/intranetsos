import React from 'react';

export default function Flujograma() {
  return (
    <div className='container-flujograma'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src="https://redsos-my.sharepoint.com/:u:/r/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7Bc3ef6e1d-bb25-4c3e-96c4-d26e38228643%7D&amp=&action=embedview"
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
          href="https://redsos-my.sharepoint.com/:u:/r/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc=%7Bc3ef6e1d-bb25-4c3e-96c4-d26e38228643%7D&amp=&action=embedview"
        >
          <button type='button' className="btn btn-danger mt-3">
            Vista
          </button>
        </a>
      </div>
    </div>
  );
}


