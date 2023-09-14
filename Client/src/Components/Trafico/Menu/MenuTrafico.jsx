import React, { useState, useEffect } from 'react';
import './Menu.css';

const MenuTrafico = () => {
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
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list mx-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </label>

        <ul className="menu-options">
          <li>
            <a
              href="/trafico"
              className={selectedRoute === '/trafico' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico')}
            >
              Menu Principal
            </a>
          </li>
          <li>
            <a
              href="/trafico/herramientas"
              className={selectedRoute === '/trafico/herramientas' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/herramientas')}
            >
              Herramientas
            </a>
          </li>
          <li>
            <a
              href="/trafico/bsas"
              className={selectedRoute === '/trafico/bsas' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/bsas')}
            >
              6001
            </a>
          </li>
          <li>
            <a
              href="/trafico/mecanica"
              className={selectedRoute === '/trafico/mecanica' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/mecanica')}
            >
              Mecanica
            </a>
          </li>
          <li>
            <a
              href="/trafico/cordoba"
              className={selectedRoute === '/trafico/cordoba' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/cordoba')}
            >
              Córdoba
            </a>
          </li>
          <li>
            <a
              href="/trafico/rosario"
              className={selectedRoute === '/trafico/rosario' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/rosario')}
            >
              Rosario
            </a>
          </li>
          <li>
            <a
              href="/"
              className={selectedRoute === '/' ? 'active' : ''}
              onClick={() => handleRouteClick('/')}
            >
              Inicio
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuTrafico;
