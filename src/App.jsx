import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer.jsx'
import { Navbar } from './components/Navbar.jsx'

import './App.css'
import { AnimatedRoutes } from './components/AnimatedRoutes/AnimatedRoutes.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar positionValue='absolute'/>
        <AnimatedRoutes />
        <Footer/>
      </ BrowserRouter>
    </div>
  )
}

export default App
