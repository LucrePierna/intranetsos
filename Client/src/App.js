import { Routes, Route } from "react-router-dom";
import NavBar from './componentes/navbar/navbar';
import './App.css';
import Noticias from "./componentes/Noticias/Noticias";

function App() {
  return (
     <div>
      <h1>Bienvenidos al Intranet de Logistica</h1>
      <NavBar />
      <Routes>
      <Route path='/noticias' component={<Noticias />}/>
      

      </Routes>
      
     </div>
  );
}

export default App;
