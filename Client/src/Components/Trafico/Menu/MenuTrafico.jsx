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
          <span className="burger1"></span>
          <span className="burger2"></span>
          <span className="burger3"></span>
        </label>

        <ul className="menu-options">
          <li>
            <a
              href="/trafico"
              className={selectedRoute === '/trafico' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico')}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/trafico/bsaslogistica/derivacion"
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
              Exit
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuTrafico;
