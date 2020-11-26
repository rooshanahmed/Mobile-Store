import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
