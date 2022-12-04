import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Clientes} from '../pages/Clientes';

function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>

        <Route path= '/' element={ < Clientes />} /> 
      </Routes>
      

    </BrowserRouter>  
    

  );
}

export default App;
