
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';


function App() {
  return (
     <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        
      </Routes>
      
     </div>
  );
}

export default App;

