import React, { useState } from 'react'
import { Query } from './components/query.jsx'
import { Image } from './components/image.jsx'
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
