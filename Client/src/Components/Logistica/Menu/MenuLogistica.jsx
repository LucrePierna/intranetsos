import React, { useState, useEffect } from 'react';
import './Menu.css';

const MenuLogistica = () => {
  const [selectedRoute, setSelectedRoute] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    setSelectedRoute(currentPath);
  }, []);

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
  };


  return (
    <div className="menu">
      <nav className="burger-menu">
        <input className="menu-check" type="checkbox" id="menu-check" />
        <label className="menu-open" htmlFor="menu-check">
          <span className="burger1"></span>
          <span className="burger2"></span>
          <span className="burger3"></span>
        </label>

        <ul className="menu-options">
          <li>
            <a
              href="/logistica"
              className={selectedRoute === '/logistica' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house mx-2" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/logistica/derivacion"
              className={selectedRoute === '/logistica/derivacion' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/derivacion')}
            >
              Derivacion Local
            </a>
          </li>
          <li>
            <a
              href="/logistica/trafico"
              className={selectedRoute === '/logistica/trafico' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/trafico')}
            >
              Tráfico Nacional
            </a>
          </li>
          <li>
            <a
              href="/logistica/tdc"
              className={selectedRoute === '/logistica/tdc' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/tdc')}
            >
              Torre de Conexión
            </a>
          </li>
          <li>
            <a
              href="/logistica/extranjero"
              className={selectedRoute === '/logistica/extranjero' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/extranjero')}
            >
              Extranjero
            </a>
          </li>
          <li>
            <a
              href="/logistica/atp"
              className={selectedRoute === '/logistica/atp' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/atp')}
            >
              Atp
            </a>
          </li>
          <li>
            <a
              href="/logistica/transportin"
              className={selectedRoute === '/logistica/transportin' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/transportin')}
            >
              Transportin
            </a>
          </li>
          <li>
            <a
              href="/logistica/viajeros"
              className={selectedRoute === '/logistica/viajeros' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/viajeros')}
            >
              Viajeros
            </a>
          </li>
          <li>
            <a
              href="/logistica/terminalypesado"
              className={selectedRoute === '/logistica/terminalypesado' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/terminalypesado')}
            >
              Terminales y Pesados
            </a>
          </li>
          <li>
            <a
              href="/logistica/Contencion"
              className={selectedRoute === '/logistica/Contencion' ? 'active' : ''}
              onClick={() => handleRouteClick('/logistica/Contencion')}
            >
              Contención
            </a>
          </li>
          <li>
            <a
              href="/"
              className={selectedRoute === '/' ? 'active' : ''}
              onClick={() => handleRouteClick('/')}
            >
              Exit
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuLogistica;
