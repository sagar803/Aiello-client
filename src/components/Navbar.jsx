import React from 'react'
import './Navbar.css'
export const Navbar = (props) => {
  const homePage = () => {
    props.setPage('home')
  }
  const ChatPage = () => {
    props.setPage('query')
  }
  const ImagePage = () => {
    props.setPage('image')
  }

  return (
    <nav>
        <p onClick={homePage} className='logo'>AIELLO</p>
        <ul>
            <li onClick={homePage}>Home</li>
            <li onClick={ChatPage}>Chat assistance</li>
            <li onClick={ImagePage}>Generate images</li>
        </ul>
    </nav>
  )
}
