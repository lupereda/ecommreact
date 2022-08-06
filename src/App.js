import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Products from './pages/products';
import checkout from './pages/checkout';
import CartProvider from './context/CartContext';
import DetalleProducto from './pages/detalleProducto';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/contacto" element={<Contact></Contact>}/>
          <Route path="/productos/:id" element={<DetalleProducto></DetalleProducto>}/>
          <Route path="/productos" element={<Products></Products>}/>
          <Route path='/cart' element={<checkout/>}/>
          <Route path='*' element={<h1>Error 404 - ruta not encontrada</h1>} />
        </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
 