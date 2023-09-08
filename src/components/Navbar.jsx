import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [moblieMenu, setMoblieMenu] = useState(false);
  const navigate = useNavigate();
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
        <p onClick={(() => navigate('/'))} className='logo'>AIELLO</p>
        <div onClick={menuItem} className='hamburger'>
          {moblieMenu ? <i class="fa-solid fa-arrow-up"></i> : <i class="fa-solid fa-arrow-down"></i> }
        </div>
        <ul className='nav-items'>
            <li onClick={(() => navigate('/'))}>Home</li>
            <li onClick={(() => navigate('/query'))}>Chat assistance</li>
            <li onClick={(() => navigate('/image'))}>Generate images</li>
            <li onClick={(() => navigate('/music'))}>Generate music</li>
        </ul>
    </nav>
  )
}
