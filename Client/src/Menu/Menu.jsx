import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
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
              href="/"
              className={selectedRoute === '/' ? 'active' : ''}
              onClick={() => handleRouteClick('/')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/derivacion"
              className={selectedRoute === '/derivacion' ? 'active' : ''}
              onClick={() => handleRouteClick('/derivacion')}
            >
              Derivacion Local
            </a>
            </li>
            <li>
              <a
                href="/trafico"
                className={selectedRoute === '/trafico' ? 'active' : ''}
                onClick={() => handleRouteClick('/trafico')}
              >
                Tráfico Nacional
              </a>
            </li>
            <li>
              <a
                href="/tdc"
                className={selectedRoute === '/tdc' ? 'active' : ''}
                onClick={() => handleRouteClick('/tdc')}
              >
                Torre de Conexión
              </a>
            </li>
            <li>
              <a
                href="/extranjero"
                className={selectedRoute === '/extranjero' ? 'active' : ''}
                onClick={() => handleRouteClick('/extranjero')}
              >
                Extranjero
              </a>
            </li>
            <li>
              <a
                href="/atp"
                className={selectedRoute === '/atp' ? 'active' : ''}
                onClick={() => handleRouteClick('/atp')}
              >
                Atp
              </a>
            </li>
            <li>
              <a
                href="/transportin"
                className={selectedRoute === '/transportin' ? 'active' : ''}
                onClick={() => handleRouteClick('/transportin')}
              >
                Transportin
              </a>
            </li>
            <li>
              <a
                href="/viajeros"
                className={selectedRoute === '/viajeros' ? 'active' : ''}
                onClick={() => handleRouteClick('/viajeros')}
              >
                Viajeros
              </a>
            </li>
            <li>
              <a
                href="/terminalypesado"
                className={selectedRoute === '/terminalypesado' ? 'active' : ''}
                onClick={() => handleRouteClick('/terminalypesado')}
              >
                Terminales y Pesados
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Menu;
