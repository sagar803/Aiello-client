import React from 'react'
import './Navbar.css'
export const Navbar = (props) => {
  const homePage = () => {
    props.setPage('home')
  }
  return (
    <nav>
        <p className='logo'>AIELLO</p>
        <ul>
            <li onClick={homePage}>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Report Bug</li>
        </ul>
    </nav>
  )
}
