import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './scenes/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Query } from './scenes/Query/Query.jsx'
import { Image } from './scenes/Image/Image.jsx'
import { Music } from './scenes/music/Music.jsx';

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
