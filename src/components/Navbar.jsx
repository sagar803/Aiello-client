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
import useAuth from '../services/authContext';
import { googleLoginUrl } from '../services/authService';
import googleIcon from '../asset/google.png'

export const Navbar = () => {
  const {authenticated, userData, logout} = useAuth();
  const [activeTab, setActiveTab] = useState('home');
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
                    className="select-none flex items-center border-2 border-gray-500 h-12 hover:bg-blue-300 rounded-lg"
                    buttonVariants="default"
                  >
                    <span>{userData.username}</span>
                    <img className='h-8 w-8 m-0 ml-2' src={userData.picture} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" bg-gray-100">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" >
                    <User className="mr-2 h-4 w-4" />
                    <span>{userData.email}</span>
                  </DropdownMenuItem >
                  <DropdownMenuItem className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span onClick={() => logout()}>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div
                className="flex items-center justify-center cursor-pointer rounded px-3 py-2 h-10 border border-gray-500"
              >
                <a className='m-0' href={googleLoginUrl}>{"Sign in with "}</a><img className='m-0 w-16 object-contain' src={googleIcon} />

              </div>
            )}
      </nav>
      <hr className='w-full'/>
    </>
  )
}



// d4b8bf
// 85bea4 
// 2e313e  
// 988dce 
// 8a7577
// 5b514c
// 5d7182
// 4e785d 
// ac482c
