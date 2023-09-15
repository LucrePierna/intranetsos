import React from 'react';

export default function Mapas() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mx-auto mt-5">
      <h1>Mapa</h1>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="https://www.google.com/maps/d/embed?mid=1fvBNJlPnYFfKVW3SWlN7WtMdNqqI8R8&ehbc=2E312F"
          title="Mapa"
        ></iframe>
      </div>
    </div>
  );
}
