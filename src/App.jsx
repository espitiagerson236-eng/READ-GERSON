import './App.css';
// import Tarjeta from './components/tarjeta';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Servicios from './pages/Servicios';
import DashboardLayout from './layouts/DashboardLayout';
import { Routes, Route } from 'react-router-dom';
import PanelGeneral from './pages/PanelGeneral';
import Productos from './pages/Productos';
import NotFound from './pages/NotFound';
import Usuarios from './pages/Usuarios';
import UsuarioDetalle from './pages/UsuariosDetalle';


function App (){
  return(
    <Routes>
      <Route path='/' element={<DashboardLayout/>}>
        <Route index element={<PanelGeneral />}/>
        <Route path='productos' element={<Productos />}/>
        <Route path='usuarios' element={<Usuarios />}/>
        <Route path='usuarios/:id' element={<UsuarioDetalle />}/>
      </Route>

      <Route path='*' element={<NotFound/>}/>
    </Routes>
  ); 
};

export default App; 