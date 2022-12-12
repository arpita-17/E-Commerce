
import './App.css';
import Signup from './Component/Signup';
import Login from "./Component/Login"
import Navbar from './Component/Navbar';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    
    <>
     <Navbar/>
      <Routes>
     <Route path='/' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     

    
     </Routes>
    </>
  );
}

export default App;
