import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from './components/Footer.jsx'
import { Navbar } from './components/Navbar.jsx'

import './App.css'
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/auth';
  
  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
        {children}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};


function App() {
  return (
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </ BrowserRouter>
  )
}

export default App
