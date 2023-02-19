import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartProducts from './features/cart/showCartProducts';
import ProductsList from './features/showProducts';

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<ProductsList />}/>
       <Route path='/cart' element={<CartProducts />}/>
      </Routes>
    </Router>
  );
}

export default App;
