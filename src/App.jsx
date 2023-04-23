import React, { useState } from 'react'
import { Query } from './components/query'
import { Image } from './components/image'
import './App.css'

function App() {
  const [page, setPage] = useState("Query")
  return (
    <>
    <button></button>
    <Query/>
    <Image/>
    </>
  )
}

export default App
