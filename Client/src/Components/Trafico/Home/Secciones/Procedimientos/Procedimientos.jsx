import React, { useState, useEffect } from 'react';
import ReactImageZoom from 'react-image-zoom';
import * as bootstrap from 'bootstrap';
import productos from '../../../Image/procedimientos/PRODUCTOS_PRESTADOR.png';
import cargaProducto from '../../../Image/procedimientos/cargaproducto.jpg';
import prestadorEventual from '../../../Image/procedimientos/Prestador eventual no puede hacer la asistencia.jpg';
import movilGeo from '../../../Image/procedimientos/Movil geo no puede hacer la asistencia.jpg';
import movilDestino from '../../../Image/procedimientos/Móvil en destino.jpg';
import nsVhc from '../../../Image/procedimientos/No encuentra vhc - vhc solo.jpg';
import hsEspera from '../../../Image/procedimientos/Hora de espera.jpg';
import altayBaja from '../../../Image/procedimientos/Alta-Baja de movil.jpg';
import tomaPascua from '../../../Image/procedimientos/toma posterior a pascua.jpg';
import anulacion from '../../../Image/procedimientos/Anulación-Modificación svc en curso.jpg';

export default function Procedimientos() {
    const imagePaths = {
        productoPrestador: productos,
        cargaProducto: cargaProducto,
        prestadorEventual: prestadorEventual,
        movilGeo: movilGeo,
        movilDestino: movilDestino,
        noVHC: nsVhc,
        hsEspera: hsEspera,
        altayBaja: altayBaja,
        tomaPascua: tomaPascua,
        anulacion: anulacion,
    };

    const [activeTab, setActiveTab] = useState('productoPrestador');
    const [selectedImage, setSelectedImage] = useState(imagePaths[activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const triggerTabList = document.querySelectorAll('#nav-tab button');
        triggerTabList.forEach((triggerEl) => {
            const tabTrigger = new bootstrap.Tab(triggerEl);

            triggerEl.addEventListener('click', (event) => {
                event.preventDefault();
                tabTrigger.show();
                handleTabClick(event.target.id.replace('-tab', ''));
            });
        });
    }, []);


    return (
        <div className='d-flex flex-column align-items-center justify-content-center mx-auto mt-4'>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className={`nav-link custom ${activeTab === 'productoPrestador' ? 'active' : ''}`} id="nav-productoPrestador-tab" data-bs-toggle="tab" data-bs-target="#nav-productoPrestador" type="button" role="tab" aria-controls="nav-productoPrestador" aria-selected={activeTab === 'productoPrestador'} onClick={() => handleTabClick('productoPrestador')}>Productos Prestador</button>

                    <button className={`nav-link custom ${activeTab === 'cargaProducto' ? 'active' : ''}`} id="nav-cargaProducto-tab" data-bs-toggle="tab" data-bs-target="#nav-cargaProducto" type="button" role="tab" aria-controls="nav-cargaProducto" aria-selected={activeTab === 'cargaProducto'} onClick={() => handleTabClick('cargaProducto')}>Carga de Productos</button>

                    <button className={`nav-link custom ${activeTab === 'prestadorEventual' ? 'active' : ''}`} id="nav-prestadorEventual-tab" data-bs-toggle="tab" data-bs-target="#nav-prestadorEventual" type="button" role="tab" aria-controls="nav-prestadorEventual" aria-selected={activeTab === 'prestadorEventual'} onClick={() => handleTabClick('prestadorEventual')}>Prestador Eventual</button>

                    <button className={`nav-link custom ${activeTab === 'movilGeo' ? 'active' : ''}`} id="nav-movilGeo-tab" data-bs-toggle="tab" data-bs-target="#nav-movilGeo" type="button" role="tab" aria-controls="nav-movilGeo" aria-selected={activeTab === 'movilGeo'} onClick={() => handleTabClick('movilGeo')}>Móvil Geo</button>

                    <button className={`nav-link custom ${activeTab === 'movilDestino' ? 'active' : ''}`} id="nav-movilDestino-tab" data-bs-toggle="tab" data-bs-target="#nav-movilDestino" type="button" role="tab" aria-controls="nav-movilDestino" aria-selected={activeTab === 'movilDestino'} onClick={() => handleTabClick('movilDestino')}>Móvil en destino</button>

                    <button className={`nav-link custom ${activeTab === 'nsVhc' ? 'active' : ''}`} id="nav-nsVhc-tab" data-bs-toggle="tab" data-bs-target="#nav-nsVhc" type="button" role="tab" aria-controls="nav-nsVhc" aria-selected={activeTab === 'nsVhc'} onClick={() => handleTabClick('nsVhc')}>No se encontro vehículo</button>

                    <button className={`nav-link custom ${activeTab === 'hsEspera' ? 'active' : ''}`} id="nav-hsEspera-tab" data-bs-toggle="tab" data-bs-target="#nav-hsEspera" type="button" role="tab" aria-controls="nav-hsEspera" aria-selected={activeTab === 'hsEspera'} onClick={() => handleTabClick('hsEspera')}>Hora de espera</button>

                    <button className={`nav-link custom ${activeTab === 'altayBaja' ? 'active' : ''}`} id="nav-altayBaja-tab" data-bs-toggle="tab" data-bs-target="#nav-altayBaja" type="button" role="tab" aria-controls="nav-altayBaja" aria-selected={activeTab === 'altayBaja'} onClick={() => handleTabClick('altayBaja')}>Alta y baja de móviles</button>

                    <button className={`nav-link custom ${activeTab === 'tomaPascua' ? 'active' : ''}`} id="nav-tomaPascua-tab" data-bs-toggle="tab" data-bs-target="#nav-tomaPascua" type="button" role="tab" aria-controls="nav-tomaPascua" aria-selected={activeTab === 'tomaPascua'} onClick={() => handleTabClick('tomaPascua')}>Toma en pascua</button>

                    <button className={`nav-link custom ${activeTab === 'anulacion' ? 'active' : ''}`} id="nav-anulacion-tab" data-bs-toggle="tab" data-bs-target="#nav-anulacion" type="button" role="tab" aria-controls="nav-anulacion" aria-selected={activeTab === 'anulacion'} onClick={() => handleTabClick('anulacion')}>Anulación</button>
                </div>
            </nav>
            <div className="h-100 w-50 tab-content mt-1" id="nav-tabContent">
                <div className="tab-pane fade" id={`nav-productoPrestador`} role="tabpanel" aria-labelledby={`nav-productoPrestador-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.productoPrestador}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-cargaProducto`} role="tabpanel" aria-labelledby={`nav-cargaProducto-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.cargaProducto}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-prestadorEventual`} role="tabpanel" aria-labelledby={`nav-prestadorEventual-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.prestadorEventual}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-movilGeo`} role="tabpanel" aria-labelledby={`nav-movilGeo-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.movilGeo}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-movilDestino`} role="tabpanel" aria-labelledby={`nav-movilDestino-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.movilDestino}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-noVHC`} role="tabpanel" aria-labelledby={`nav-noVHC-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.noVHC}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-hsEspera`} role="tabpanel" aria-labelledby={`nav-hsEspera-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.hsEspera}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-altayBaja`} role="tabpanel" aria-labelledby={`nav-altayBaja-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.altayBaja}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-tomaPascua`} role="tabpanel" aria-labelledby={`nav-tomaPascua-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.tomaPascua}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
                <div className="tab-pane fade" id={`nav-anulacion`} role="tabpanel" aria-labelledby={`nav-anulacion-tab`} tabIndex="0">
                    <ReactImageZoom
                        className="responsiveImgSaludos"
                        img={imagePaths.anulacion}
                        width={600}
                        height={400}
                        zoomWidth={600}
                        onChange={({ zoomImg }) => setSelectedImage(zoomImg)}
                    />
                </div>
            </div>
        </div>
    );
}
