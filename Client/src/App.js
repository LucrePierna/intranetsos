import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import MenuLogistica from './Components/Logistica/Menu/MenuLogistica';
import NavBarHome from "./Components/Logistica/Home/NavBar/NavBarHome";
import NavBarDerivacion from "./Components/Logistica/Tareas/Derivacion/Navbar/NavBarDerivacion";
import NavBarTrafico from "./Components/Logistica/Tareas/TraficoNacional/NavBar/NavBarTrafico";
import NavBarTransportin from "./Components/Logistica/Tareas/Transportin/NavBar/NavBarTransportin";
import NavBarAtp from "./Components/Logistica/Tareas/Atp/NavBar/NavBarAtp";
import NavBarTdc from "./Components/Logistica/Tareas/TDC/NavBar/NavBarTdc";
import NavBarViajero from "./Components/Logistica/Tareas/Viajeros/NavBar/NavBarViajero";
import NavBarTP from "./Components/Logistica/Tareas/TerminalesYPesados/NavBar/NavBarTP";
import NavBarExtranjero from "./Components/Logistica/Tareas/Extranjero/NavBar/NavBarExtranjero";
import NavBarContencion from "./Components/Logistica/Tareas/Contencion/NavBar/NavBarContencion"
import Landing from "./Components/Landing/Landing";
import Footer from './Components/Footer/Footer';

function App() {
  const location = useLocation();
  const isLogisticaRoute = location.pathname.includes('/logistica');
  return (
    <div className="App">
      
        {isLogisticaRoute && <MenuLogistica />}
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
        </Routes>
        {/* <Footer/> */}
      
    </div>
  );
}

export default App;
