import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './componentes/Login';
import Acercade from './paginas/Acercade';
import Consultar from './paginas/Consultar';
import Inicio from './paginas/Inicio';
import Encabezado from './componentes/Encabezado'

function App() {
  return (
    < BrowserRouter>
        <Encabezado />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/inicio' element={<Inicio/>} />
          <Route path='/acercade' element={<Acercade/>}/>
          <Route path='/consultar' element={<Consultar/>}/>

        </Routes>
    </BrowserRouter>



  );
}

export default App;
