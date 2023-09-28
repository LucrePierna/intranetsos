import React, { useState, useEffect } from 'react';
import './Menu.css';
import bsas from '../Image/Menu Trafico/Iconos/ico_6001.svg'
import cba from '../Image/Menu Trafico/Iconos/ico_CBA.svg'
import ros from '../Image/Menu Trafico/Iconos/ico_ROS.svg'
import home from '../Image/Menu Trafico/Iconos/house-fill.svg'
import herramientas from '../Image/Menu Trafico/Iconos/nut-fill.svg'
import mec from '../Image/Menu Trafico/Iconos/tools.svg'
/* import {
  UserButton
} from '@clerk/clerk-react' */

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

        <ul className="menu-options px-1">
          <li>
            <a
              href="/trafico"
              className={selectedRoute === '/trafico' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico')}
            >
              <img src={home} alt="homeIcon" width={18} height={18} style={{
                marginLeft: '4px',
                marginRight: '4px',
                filter: selectedRoute === '/trafico' ? 'brightness(0) invert(1)' : 'none',
                color: selectedRoute === '/trafico' ? 'red' : 'white',
              }}
              />
              Inicio
            </a>
          </li>
          <li>
            <a
              href="/trafico/herramientas"
              className={selectedRoute === '/trafico/herramientas' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/herramientas')}
            >
              <img src={herramientas} alt="herramientasIcon" width={18} height={18} style={{
                marginLeft: '4px',
                marginRight: '4px',
                filter: selectedRoute === '/trafico/herramientas' ? 'brightness(0) invert(1)' : 'none',
                color: selectedRoute === '/trafico/herramientas' ? 'red' : 'white',
              }}
              />
              Herramientas
            </a>
          </li>
          <li>
            <a
              href="/trafico/bsas"
              className={selectedRoute === '/trafico/bsas' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/bsas')}
            >
              <img src={bsas} alt="bsasIcon" width={18} height={18} style={{
                marginLeft: '4px',
                marginRight: '4px',
                filter: selectedRoute === '/trafico/bsas' ? 'brightness(0) invert(1)' : 'none',
                color: selectedRoute === '/trafico/bsas' ? 'red' : 'white',
              }}
              />
              6001
            </a>
          </li>
          <li>
            <a
              href="/trafico/mecanica"
              className={selectedRoute === '/trafico/mecanica' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/mecanica')}
            >
              <img src={mec} alt="mecIcon" width={18} height={18} style={{
                marginLeft: '4px',
                marginRight: '4px',
                filter: selectedRoute === '/trafico/mecanica' ? 'brightness(0) invert(1)' : 'none',
                color: selectedRoute === '/trafico/mecanica' ? 'red' : 'white',
              }}
              />
              Mecánica
            </a>
          </li>
          <li>
            <a
              href="/trafico/cordoba"
              className={selectedRoute === '/trafico/cordoba' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/cordoba')}
            >
              <img src={cba} alt="cbaIcon" width={18} height={18} style={{
                marginLeft: '4px',
                marginRight: '4px',
                filter: selectedRoute === '/trafico/cordoba' ? 'brightness(0) invert(1)' : 'none',
                color: selectedRoute === '/trafico/cordoba' ? 'red' : 'white',
              }}
              />
              Córdoba
            </a>
          </li>
          <li>
            <a
              href="/trafico/rosario"
              className={selectedRoute === '/trafico/rosario' ? 'active' : ''}
              onClick={() => handleRouteClick('/trafico/rosario')}
            >
              <img src={ros} alt="rosarioIcon" width={18} height={18} style={{
                marginLeft: '4px',
                marginRight: '4px',
                filter: selectedRoute === '/trafico/rosario' ? 'brightness(0) invert(1)' : 'none',
                color: selectedRoute === '/trafico/rosario' ? 'red' : 'white',
              }}
              />
              Rosario
            </a>
          </li>
          <li>
            <a
              href="/"
              /* className={selectedRoute === '/' ? 'active' : ''} */
              onClick={() => handleRouteClick('/')}
              className='fst-italic separateLine'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-arrow-left-circle-fill mx-2" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
              Volver a Operaciones
            </a>
          </li>
          <li className='p-2 '>
            <UserButton className='bg-white' />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuTrafico;
