import React, { useState } from 'react';
import { Spinner } from "@nextui-org/react";

export default function Flujograma() {
  const [flujogramaCargado, setFlujogramaCargado] = useState(false);

  const handleIframeLoad = () => {
    setFlujogramaCargado(true)
  }

  return (
    <div className='conteinerFlujograma'>
      <div className='loading'> 
      {!flujogramaCargado && <Spinner label="Cargando..." color="danger" />}
      </div>
      {flujogramaCargado && (
        <iframe 
        src="https://redsos.sharepoint.com/_layouts/15/Doc.aspx?sourcedoc={2bf5ff8c-0f15-4093-85a2-25a70faa5db4}&amp;action=embedview" 
        width="1200px" 
        height="700px" 
        frameborder="0"
        onLoad={handleIframeLoad}
        >This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> diagram, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      )}
      <div className='mt-3'>
        <a target='blank' href="https://redsos.sharepoint.com/:u:/r/_layouts/15/doc2.aspx?sourcedoc=%7B2bf5ff8c-0f15-4093-85a2-25a70faa5db4%7D&action=embedview&CID=7677f945-4eba-de08-ce68-cea750573be7">
          <button type='button' class="btn btn-danger mt-3"> Acceso</button></a>
      </div>
    </div>
  );
}
