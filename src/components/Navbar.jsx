import React from 'react'
import { useEffect, useState } from 'react';
import './Navbar.css'

export const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const homePage = () => {
    props.setPage('home')
  }
  const ChatPage = () => {
    props.setPage('query')
  }
  const ImagePage = () => {
    props.setPage('image')
  }

  const menuItem = () => {
    console.log("hir")
    const navItem = document.querySelector(".nav-items");
    navItem.classList.toggle("active");
  }
  /*
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize(); // call the function once to set the initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  */

  return (
    <nav>
        <p onClick={homePage} className='logo'>AIELLO</p>
        <div onClick={menuItem} className='hamburger'>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className='nav-items'>
            <li onClick={homePage}>Home</li>
            <li onClick={ChatPage}>Chat assistance</li>
            <li onClick={ImagePage}>Generate images</li>
        </ul>
    </nav>
  )
}
