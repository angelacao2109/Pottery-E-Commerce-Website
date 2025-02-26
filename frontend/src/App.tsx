import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Account from './pages/Account';
import ErrorPage404 from './pages/ErrorPage404';
import { Route,createBrowserRouter,createRoutesFromElements,Router, RouterProvider,BrowserRouter,Routes} from 'react-router-dom'


function App() {

  
  return (
    <>
  
  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<ErrorPage404 />} />
        </Routes>
   
   </>
  );
}

export default App;
