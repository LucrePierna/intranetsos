import { Routes, Route } from "react-router-dom";
import Menu from './Components/Logistica/Menu/Menu';
import NavBarHome from "./Components/Logistica/Home/NavBar/NavBarHome";
import NavBarDerivacion from "./Components/Logistica/Tareas/Derivacion/Navbar/NavBarDerivacion";
import NavBarTrafico from "./Components/Logistica/Tareas/TraficoNacional/NavBar/NavBarTrafico";
import NavBarTransportin from "./Components/Logistica/Tareas/Transportin/NavBar/NavBarTransportin";
import NavBarAtp from "./Components/Logistica/Tareas/Atp/NavBar/NavBarAtp";
import NavBarTdc from "./Components/Logistica/Tareas/TDC/NavBar/NavBarTdc";
import NavBarViajero from "./Components/Logistica/Tareas/Viajeros/NavBar/NavBarViajero";
import NavBarTP from "./Components/Logistica/Tareas/TerminalesYPesados/NavBar/NavBarTP";
import NavBarExtranjero from "./Components/Logistica/Tareas/Extranjero/NavBar/NavBarExtranjero";
import Landing from "./Components/Landing/Landing"; 


function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/landing' element={<Landing />} /> 
        <Route path='/' element={<NavBarHome />} />
        <Route path='/derivacion' element={<NavBarDerivacion />} />
        <Route path='/trafico' element={<NavBarTrafico />} />
        <Route path='/transportin' element={<NavBarTransportin />} />
        <Route path='/atp' element={<NavBarAtp />} />
        <Route path='/tdc' element={<NavBarTdc />} />
        <Route path='/viajeros' element={<NavBarViajero />} />
        <Route path='/terminalypesado' element={<NavBarTP />} />
        <Route path='/extranjero' element={<NavBarExtranjero />} />

      </Routes>

    </div>
  );
}

export default App;

