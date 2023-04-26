import React, { useState } from 'react'
import { Home } from './scenes/Home.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Query } from './components/Query.jsx'
import { Image } from './components/Image.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage}/>
      {(page==="home") && <Home setPage={setPage}/>}
      {(page==="query") && <Query/> }
      {(page==="image") && <Image/> }
      <Footer/>
    </>
  )
}

export default App
