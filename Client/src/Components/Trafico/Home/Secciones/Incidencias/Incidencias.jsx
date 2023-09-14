import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Incidencias() {
  const [fileContent, setFileContent] = useState('');
  const fileUrl = 'https://redsos.sharepoint.com/sites/Incidencias2'; 

  useEffect(() => {
    axios.get(fileUrl)
      .then(response => {
        setFileContent(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el archivo de SharePoint:', error);
      });
  }, []);

  return (
    <div>
      <iframe
        title="Incidencias"
        srcDoc={fileContent}
        width="100%"
        height="500px"
      ></iframe>
    </div>
  );
}

export default Incidencias;
