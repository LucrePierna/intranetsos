/* import './App.css'
import { ClerkProvider } from '@clerk/clerk-react'
import Login from './Components/Login/Login'

const REACT_APP_CLERK_PUBLISHABLE_KEY= 'pk_test_dW5pdGVkLWNveW90ZS03Ni5jbGVyay5hY2NvdW50cy5kZXYk'

function App () {
 const clerKey = REACT_APP_CLERK_PUBLISHABLE_KEY 

  return (
    <div className='App'>
      <ClerkProvider publishableKey={clerKey}>
        <Login />
      </ClerkProvider>
    </div>
  )
}

export default App */

import './App.css'
import { Routes, Route, useLocation} from 'react-router-dom'
import MenuLogistica from './Components/Logistica/Menu/MenuLogistica'
import MenuTrafico from './Components/Trafico/Menu/MenuTrafico'
import NavBarHome from './Components/Logistica/Home/NavBar/NavBarHome'
import NavBarDerivacion from './Components/Logistica/Tareas/Derivacion/Navbar/NavBarDerivacion'
import NavBarTrafico from './Components/Logistica/Tareas/TraficoNacional/NavBar/NavBarTrafico'
import NavBarTransportin from './Components/Logistica/Tareas/Transportin/NavBar/NavBarTransportin'
import NavBarAtp from './Components/Logistica/Tareas/Atp/NavBar/NavBarAtp'
import NavBarTdc from './Components/Logistica/Tareas/TDC/NavBar/NavBarTdc'
import NavBarViajero from './Components/Logistica/Tareas/Viajeros/NavBar/NavBarViajero'
import NavBarTP from './Components/Logistica/Tareas/TerminalesYPesados/NavBar/NavBarTP'
import NavBarExtranjero from './Components/Logistica/Tareas/Extranjero/NavBar/NavBarExtranjero'
import NavBarContencion from './Components/Logistica/Tareas/Contencion/NavBar/NavBarContencion'
import NavBarHerramientasRN from './Components/Logistica/Tareas/Herramientas/NavBar/NavBarHerramientas'
import NavBarHTrafico from './Components/Trafico/Home/NavBar/NavBarHTrafico'
import NavBarHerramientas from './Components/Trafico/Tareas/Herramientas/NavBar/NavBarHerramientas'
import NavBarBsAs from './Components/Trafico/Tareas/BsAs/NavBar/NavBarBsAs'
import NavBarMecanica from './Components/Trafico/Tareas/Mecanica/NavBar/NavBarMecanica'
import NavBarCordoba from './Components/Trafico/Tareas/Cordoba/NavBar/NavBarCordoba'
import NavBarRosario from './Components/Trafico/Tareas/Rosario/NavBar/NavBarRosario'
import Landing from './Components/Landing/Landing' 

function App () {
  const location = useLocation()
  const isLogisticaRoute = location.pathname.includes('/logistica')
  const isTraficoRoute = location.pathname.includes('/trafico') 

  return (
    <div className='App'>
      {isLogisticaRoute && <MenuLogistica />}
      {isTraficoRoute && <MenuTrafico />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/logistica' element={<NavBarHome />} />
        <Route path='/logistica/derivacion' element={<NavBarDerivacion />} />
        <Route path='/logistica/trafico' element={<NavBarTrafico />} />
        <Route path='/logistica/transportin' element={<NavBarTransportin />} />
        <Route path='/logistica/atp' element={<NavBarAtp />} />
        <Route path='/logistica/tdc' element={<NavBarTdc />} />
        <Route path='/logistica/viajeros' element={<NavBarViajero />} />
        <Route path='/logistica/terminalypesado' element={<NavBarTP />} />
        <Route path='/logistica/extranjero' element={<NavBarExtranjero />} />
        <Route path='/logistica/contencion' element={<NavBarContencion />} />
        <Route path='/logistica/herramientas' element={<NavBarHerramientasRN />} />
        <Route path='/trafico' element={<NavBarHTrafico />} />
        <Route path='/trafico/herramientas' element={<NavBarHerramientas />} />
        <Route path='/trafico/bsas' element={<NavBarBsAs />} />
        <Route path='/trafico/mecanica' element={<NavBarMecanica />} />
        <Route path='/trafico/cordoba' element={<NavBarCordoba />} />
        <Route path='/trafico/rosario' element={<NavBarRosario />} />
      </Routes>
    </div>
  )
}

export default App