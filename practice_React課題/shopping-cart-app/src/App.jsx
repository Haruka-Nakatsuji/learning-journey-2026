import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Header } from './components/Header';
import { ProductListPage } from './components/ProductListPage';
import { CartPage } from './components/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route index path='/' element={<ProductListPage cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path='/cart' element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
