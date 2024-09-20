import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Account from './pages/Account';

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/account" element={<Account />} /> 
      </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
