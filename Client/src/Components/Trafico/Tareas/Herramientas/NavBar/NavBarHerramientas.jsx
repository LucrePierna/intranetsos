import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatEvoltis from '../Secciones/Chat/ChatEvoltis';
import MobilFinder from '../Secciones/Finder/MobilFinder';

export default function NavBarHerramientas() {
  const [selectedComponent, setSelectedComponent] = useState('chat');

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center ">
        <ul className="nav nav-tabs just">
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'chat' ? 'active' : ''}`}
              onClick={() => handleComponentClick('chat')}
              style={{
                color: selectedComponent === 'chat' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'chat' ? 'white' : 'initial'
              }}
            >
              Chat Evoltis
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link btn ${selectedComponent === 'finder' ? 'active' : ''}`}
              onClick={() => handleComponentClick('finder')}
              style={{
                color: selectedComponent === 'finder' ? 'black' : 'red',
                backgroundColor: selectedComponent === 'finder' ? 'white' : 'initial'
              }}
            >
              Mobil Finder
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        {selectedComponent === 'chat' && <ChatEvoltis />}
        {selectedComponent === 'finder' && <MobilFinder />}

      </div>
    </div>
  );
}
