
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import RedNacional from './Components/RedNacional/RedNacional';


function App() {
  return (
     <div>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nacional' element={<RedNacional />}/>
      </Routes>
      
     </div>
  );
}

export default App;
