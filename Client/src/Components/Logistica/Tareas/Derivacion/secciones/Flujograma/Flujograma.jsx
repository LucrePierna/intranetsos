import React from 'react';

export default function Flujograma() {
  return (
    <div className='conteinerFlujograma'>
      <iframe src="https://redsos-my.sharepoint.com/personal/lugomez_redsos_com_ar/_layouts/15/embed.aspx?UniqueId=9dc53577-0c0b-4934-82ec-e456dd3b9d52" width="1200" height="700" frameborder="0" scrolling="no" allowfullscreen title="Derivacion Red Nacional (1).pdf"></iframe>
      <div className='mt-3'>
        <a target='blank' href="https://redsos-my.sharepoint.com/personal/lugomez_redsos_com_ar/_layouts/15/Doc.aspx?sourcedoc={ff1eeebd-75aa-4be0-bcc6-46f1396f6769}&action=embedview">
          <button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  );
}
