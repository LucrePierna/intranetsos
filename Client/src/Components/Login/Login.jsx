import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MenuLogistica from '../Logistica/Menu/MenuLogistica'
import MenuTrafico from '../Trafico/Menu/MenuTrafico'
import NavBarHome from '../Logistica/Home/NavBar/NavBarHome'
import NavBarDerivacion from '../Logistica/Tareas/Derivacion/Navbar/NavBarDerivacion'
import NavBarTrafico from '../Logistica/Tareas/TraficoNacional/NavBar/NavBarTrafico'
import NavBarTransportin from '../Logistica/Tareas/Transportin/NavBar/NavBarTransportin'
import NavBarAtp from '../Logistica/Tareas/Atp/NavBar/NavBarAtp'
import NavBarTdc from '../Logistica/Tareas/TDC/NavBar/NavBarTdc'
import NavBarViajero from '../Logistica/Tareas/Viajeros/NavBar/NavBarViajero'
import NavBarTP from '../Logistica/Tareas/TerminalesYPesados/NavBar/NavBarTP'
import NavBarExtranjero from '../Logistica/Tareas/Extranjero/NavBar/NavBarExtranjero'
import NavBarContencion from '../Logistica/Tareas/Contencion/NavBar/NavBarContencion'
import NavBarHTrafico from '../Trafico/Home/NavBar/NavBarHTrafico'
import NavBarHerramientas from '../Trafico/Tareas/Herramientas/NavBar/NavBarHerramientas'
import NavBarBsAs from '../Trafico/Tareas/BsAs/NavBar/NavBarBsAs'
import NavBarMecanica from '../Trafico/Tareas/Mecanica/NavBar/NavBarMecanica'
import NavBarCordoba from '../Trafico/Tareas/Cordoba/NavBar/NavBarCordoba'
import NavBarRosario from '../Trafico/Tareas/Rosario/NavBar/NavBarRosario'
import Landing from '../Landing/Landing'
import { SignedIn, SignedOut, SignIn } from '@clerk/clerk-react'

export default function Login() {
    const location = useLocation()
    const isLogisticaRoute = location.pathname.includes('/logistica')
    const isTraficoRoute = location.pathname.includes('/trafico')

    return (
        <div className='justify-content-center'>
            <SignedIn>
                {isLogisticaRoute && <MenuLogistica />}
                {isTraficoRoute && <MenuTrafico />}
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/logistica' element={<NavBarHome />} />
                    <Route
                        path='/logistica/derivacion'
                        element={<NavBarDerivacion />}
                    />
                    <Route path='/logistica/trafico' element={<NavBarTrafico />} />
                    <Route
                        path='/logistica/transportin'
                        element={<NavBarTransportin />}
                    />
                    <Route path='/logistica/atp' element={<NavBarAtp />} />
                    <Route path='/logistica/tdc' element={<NavBarTdc />} />
                    <Route path='/logistica/viajeros' element={<NavBarViajero />} />
                    <Route path='/logistica/terminalypesado' element={<NavBarTP />} />
                    <Route
                        path='/logistica/extranjero'
                        element={<NavBarExtranjero />}
                    />
                    <Route
                        path='/logistica/contencion'
                        element={<NavBarContencion />}
                    />
                    <Route path='/trafico' element={<NavBarHTrafico />} />
                    <Route
                        path='/trafico/herramientas'
                        element={<NavBarHerramientas />}
                    />
                    <Route path='/trafico/bsas' element={<NavBarBsAs />} />
                    <Route path='/trafico/mecanica' element={<NavBarMecanica />} />
                    <Route path='/trafico/cordoba' element={<NavBarCordoba />} />
                    <Route path='/trafico/rosario' element={<NavBarRosario />} />
                </Routes>
                {/* <Footer/> */}
            </SignedIn>
            <>
                <SignedOut>
                    <SignIn />
                </SignedOut>
            </>
        </div>
    )
}
