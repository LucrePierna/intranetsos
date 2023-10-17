import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculadoras from '../Secciones/Calculadoras/Calculadoras';
import Formatos from '../Secciones/Formatos/Formatos';
import Mapas from '../Secciones/Mapas/Mapas';
import Links from '../Secciones/Links/Links';

export default function NavBarHerramientas() {
    const [selectedComponent, setSelectedComponent] = useState('calculadoras');

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-center ">
                <h1 className='titleNav'>Herramientas</h1>
                <ul className="nav nav-tabs just">
                    <li className="nav-item">
                        <button
                            className={`nav-link btn ${selectedComponent === 'calculadoras' ? 'active' : ''}`}
                            onClick={() => handleComponentClick('calculadoras')}
                            style={{
                                color: selectedComponent === 'calculadoras' ? 'black' : 'red',
                                backgroundColor: selectedComponent === 'calculadoras' ? 'white' : 'initial'
                            }}
                        >
                            Calculadoras
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn ${selectedComponent === 'formatos' ? 'active' : ''}`}
                            onClick={() => handleComponentClick('formatos')}
                            style={{
                                color: selectedComponent === 'formatos' ? 'black' : 'red',
                                backgroundColor: selectedComponent === 'formatos' ? 'white' : 'initial'
                            }}
                        >
                            Formatos
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn ${selectedComponent === 'mapas' ? 'active' : ''}`}
                            onClick={() => handleComponentClick('mapas')}
                            style={{
                                color: selectedComponent === 'mapas' ? 'black' : 'red',
                                backgroundColor: selectedComponent === 'mapas' ? 'white' : 'initial'
                            }}
                        >
                            Mapas
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn ${selectedComponent === 'planillas' ? 'active' : ''}`}
                            onClick={() => handleComponentClick('planillas')}
                            style={{
                                color: selectedComponent === 'planillas' ? 'black' : 'red',
                                backgroundColor: selectedComponent === 'planillas' ? 'white' : 'initial'
                            }}
                        >
                            Planillas
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link btn ${selectedComponent === 'links' ? 'active' : ''}`}
                            onClick={() => handleComponentClick('links')}
                            style={{
                                color: selectedComponent === 'links' ? 'black' : 'red',
                                backgroundColor: selectedComponent === 'links' ? 'white' : 'initial'
                            }}
                        >
                            Links
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid">
                {selectedComponent === 'calculadoras' && <Calculadoras />}
                {selectedComponent === 'formatos' && <Formatos />}
                {selectedComponent === 'mapas' && <Mapas />}
                {selectedComponent === 'planillas' && <Planillas />}
                {selectedComponent === 'links' && <Links />}
            </div>
        </div>
    );
}
