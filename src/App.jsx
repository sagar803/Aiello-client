import React, { useState } from 'react'
import { Query } from './components/Query.jsx'
import { Image } from './components/Image.jsx'
import './App.css'

function App() {
  const [page, setPage] = useState("Query")
  return (
    <>
    <Query/>
    <Image/>
    </>
  )
}

export default App
