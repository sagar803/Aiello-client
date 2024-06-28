import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { LogOut, User, User2 } from "lucide-react";
import { Button } from "../components/ui/button";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [authenticated, setAuthenticated] = useState(true)
  const [moblieMenu, setMoblieMenu] = useState(false);
  const navigate = useNavigate();
  
  const handleNavigation = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <>
      <nav className='flex justify-between h-28 items-center px-20'>
          <p onClick={(() => navigate('/'))} className='font-thin text-5xl'>AIELLO</p>
          <ul className='flex items-center gap-2 border border-gray-400 rounded-full select-none'>
            <li className={`text-sm rounded-full transition-all duration-300 p-2 hover:cursor-pointer ${activeTab === 'home' ? 'bg-black text-white' : 'text-black bg-white'}`} onClick={() => handleNavigation('home', '/')}> Home </li>
            <li className={`text-sm rounded-full transition-all duration-300 p-2 hover:cursor-pointer ${activeTab === 'image' ? 'bg-black text-white' : 'text-black bg-white'}`} onClick={() => handleNavigation('image', '/image')}>Generate images</li>
            <li className={`text-sm rounded-full transition-all duration-300 p-2 hover:cursor-pointer ${activeTab === 'query' ? 'bg-black text-white' : 'text-black bg-white'}`} onClick={() => handleNavigation('query', '/query')}>Chat assistance</li>
            <li className={`text-sm rounded-full transition-all duration-300 p-2 hover:cursor-pointer ${activeTab === 'music' ? 'bg-black text-white' : 'text-black bg-white'}`} onClick={() => handleNavigation('music', '/music')}>Generate music</li>
          </ul>
          {authenticated ? (
              <DropdownMenu className="relative">
                <DropdownMenuTrigger asChild>
                  <Button
                    className="select-none flex items-center bg-black text-white border-2 border-gray-500 h-12 hover:bg-blue-600"
                    buttonVariants="default"
                  >
                    <span>{"randomuser"}</span>
                    <User2 className="h-8 w-8 m-2 border-2 border-black p-1 rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 bg-black text-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>{"randomuser"}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div
                className="bg-black flex items-center justify-center cursor-pointer rounded w-[100px] px-5 py-2 h-10 text-white"
                onClick={handleAuth}
              >
                {authenticated ? <>Sign&nbsp;Out</> : <>Sign&nbsp;In</>}
              </div>
            )}
      </nav>
      <hr className='w-full'/>
    </>
  )
}


// nav {
//   width: 100%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   height: 80px;
//   background-color: transparent;
//   box-sizing: border-box;
  
// }
// /*
// d4b8bf
// 85bea4 
// 2e313e  
// 988dce 
// 8a7577
// 5b514c
// 5d7182
// 4e785d 
// ac482c
// */
// nav .logo{
//   width: 150px;
//   cursor: cell;
//   text-align: center;
//   font-size: 2rem;
//   font-weight: bold;
//   font-family: 'Poppins' ,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   font-weight: 500;
//   letter-spacing: 10px;
//   animation: colorChange infinite;    
//   transition: letter-spacing 0.1s linear;

// }

// nav .logo:hover{
//   letter-spacing: 12px;
// }

// nav ul{
//   display: flex;
//   flex-direction: row;
//   list-style-type: none;
// }
// nav ul li{
//   border-radius: 20px;
//   font-size: 15px;
//   padding: 10px 15px;
//   margin: 10px;
//   font-weight: 300;
//   transition: 0.2s;
//   cursor: pointer;
// }
// nav ul li:hover {
//   background-color: rgb(212, 100, 59);
// }

// .hamburger{
//   display: none;
// }


// @media (max-width: 900px) {
//   nav {
//       padding: 20px;
//       justify-content: space-between;
//   }
//   .hamburger{
//       user-select: none;
//       cursor: pointer;
//       display: block;
//   }
//   nav ul{
//       padding: 3px 15px;
//       position: absolute;
//       display: none;
//       top: 60px;
//       right: 2%;
//       border-radius: 5px;
//   }
//   .active{
//       display: block;
//   }
//   nav ul li{
//       background-color: #2e313ef4;
//       margin: 5px 0px;
//   }
// }