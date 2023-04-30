import React from 'react'
import { useEffect, useState } from 'react';
import './Navbar.css'

export const Navbar = (props) => {
  const [moblieMenu, setMoblieMenu] = useState(false);
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
    if(moblieMenu){
      setMoblieMenu(false)
    }
    else{
      setMoblieMenu(true)
    }
    const navItem = document.querySelector(".nav-items");
    navItem.classList.toggle("active");
  }
  return (
    <nav>
        <p onClick={homePage} className='logo'>AIELLO</p>
        <div onClick={menuItem} className='hamburger'>
          {moblieMenu ? <i class="fa-solid fa-arrow-up"></i> : <i class="fa-solid fa-arrow-down"></i> }
        </div>
        <ul className='nav-items'>
            <li onClick={homePage}>Home</li>
            <li onClick={ChatPage}>Chat assistance</li>
            <li onClick={ImagePage}>Generate images</li>
        </ul>
    </nav>
  )
}
