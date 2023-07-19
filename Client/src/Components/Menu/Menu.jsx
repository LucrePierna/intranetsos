import React, { useState, useEffect } from 'react';
import './Menu.css';
import NavBarDerivacion from '../Tareas/Derivación/Navbar/NavBarDerivacion';
import NavBarHome from '../Home/NavBar/NavBarHome';
import NavBarAtp from '../Tareas/Atp/NavBar/NavBarAtp';
import NavBarTdc from '../Tareas/TDC/NavBar/NavBarTdc';
import NavBarExtranjero from '../Tareas/Extranjero/NavBar/NavBarExtranjero';
import NavBarTP from '../Tareas/TerminalesYPesados/NavBar/NavBarTP';
import NavBarTrafico from '../Tareas/TraficoNacional/NavBar/NavBarTrafico';
import NavBarTransportin from '../Tareas/Transportin/NavBar/NavBarTransportin';
import NavBarViajero from '../Tareas/Viajeros/NavBar/NavBarViajero';

const Menu = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setSelectedRoute(currentPath);
  }, []);

  const handleRouteClick = (route) => {
    setSelectedRoute(route);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {selectedRoute === '/derivacion' ? (
        <NavBarDerivacion />
      ) : selectedRoute === '/atp' ? (
        <NavBarAtp /> 
      ) : selectedRoute === '/tdc' ? (
        <NavBarTdc />
      ) : selectedRoute === '/extranjero' ? (
        <NavBarExtranjero /> 
      ) : selectedRoute === '/terminalypesado' ? (
        <NavBarTP /> 
      ) : selectedRoute === '/trafico' ? (
        <NavBarTrafico />
      ) : selectedRoute === '/transportin' ? (
        <NavBarTransportin />
      ) : selectedRoute === '/viajeros' ? (
        <NavBarViajero />
      ) : (
        <NavBarHome /> 
      )}

      <div className="menu">
        <nav className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
          <input
            className="menu-check"
            type="checkbox"
            name="menu-check"
            value=""
            id="menu-check"
            checked={isMenuOpen}
            onChange={handleMenuToggle}
          />
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
    </div>
  );
};

export default Menu;
