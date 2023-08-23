<<<<<<< HEAD
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

=======
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
import Landing from "./Components/Landing/Landing";
>>>>>>> 9721044ca6fada14e7d42ab96b94bbc460c19c5a

function App() {
  const location = useLocation();
  const isLogisticaRoute = location.pathname.includes('/logistica');
  return (
<<<<<<< HEAD
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

=======
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

        </Routes>
      
>>>>>>> 9721044ca6fada14e7d42ab96b94bbc460c19c5a
    </div>
  );
}

export default App;
