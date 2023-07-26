import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Derivacion from './Components/Tareas/Derivacion/Derivacion'
import TraficoNacional from './Components/Tareas/TraficoNacional/TraficoNacional'
import Transportin from './Components/Tareas/Transportin/Transportin'
import Atp from './Components/Tareas/Atp/Atp'
import Tdc from './Components/Tareas/TDC/Tdc'
import Viajeros from './Components/Tareas/Viajeros/Viajero'
import TerminalesyPesados from './Components/Tareas/TerminalesYPesados/TerminalesyPesados'
import Extranjeros from './Components/Tareas/Extranjero/Extranjero'


function App() {
  return (
     <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/derivacion' element={<Derivacion />} />
        <Route path='/trafico' element={<TraficoNacional />}/>
        <Route path='/transportin' element={<Transportin />}/>
        <Route path='/atp' element={<Atp />}/>
        <Route path='/tdc' element={<Tdc />}/>
        <Route path='/viajeros' element={<Viajeros />}/>
        <Route path='/terminalypesado' element={<TerminalesyPesados />}/>
        <Route path='/extranjero' element={<Extranjeros />}/>
        
      </Routes>
      
     </div>
  );
}

export default App;

