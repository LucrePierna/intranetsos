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
