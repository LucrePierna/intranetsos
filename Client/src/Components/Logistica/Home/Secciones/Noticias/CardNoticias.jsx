import React from 'react';
import DataNoticias from './Noticias';
import noticias from './data';

export default function CardNoticias() {
  return (
    <div>
      <h1>Ultimas Noticias</h1>
      {noticias.map(noticia => (
        <DataNoticias
          key={noticia.id}
          descripcion={noticia.descripcion}
          imagen={noticia.imagen}
          id={noticia.id}
        />
      ))}
    </div>
  );
}