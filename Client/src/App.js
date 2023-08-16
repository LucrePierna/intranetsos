import { Routes, Route } from "react-router-dom";
import Menu from './Menu/Menu';
import NavBarHome from "./Components/Home/NavBar/NavBarHome";
import NavBarDerivacion from "./Components/Tareas/Derivacion/Navbar/NavBarDerivacion";
import NavBarTrafico from "./Components/Tareas/TraficoNacional/NavBar/NavBarTrafico";
import NavBarTransportin from "./Components/Tareas/Transportin/NavBar/NavBarTransportin";
import NavBarAtp from "./Components/Tareas/Atp/NavBar/NavBarAtp";
import NavBarTdc from "./Components/Tareas/TDC/NavBar/NavBarTdc";
import NavBarViajero from "./Components/Tareas/Viajeros/NavBar/NavBarViajero";
import NavBarTP from "./Components/Tareas/TerminalesYPesados/NavBar/NavBarTP";
import NavBarExtranjero from "./Components/Tareas/Extranjero/NavBar/NavBarExtranjero";
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

