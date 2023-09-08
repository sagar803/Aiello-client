import React, { useState } from 'react'
import { BrowserRouter, Routes, Route , useNavigate} from "react-router-dom";
import { Home } from './scenes/Home.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Query } from './scenes/Query.jsx'
import { Image } from './scenes/Image.jsx'
import { Music } from './scenes/music/music.jsx';

import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
            <Route
              path="*"
              element={ <p>Invalid Url</p>}
            />

            <Route
              path="/"
              element={ <Home />}
            />
            <Route
              path="/query"
              element={ <Query /> }
            />
            <Route
              path="/image"
              element={ <Image /> }
            />
            <Route
              path="/music"
              element={ <Music /> }
            />
        </Routes>
      </ BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
