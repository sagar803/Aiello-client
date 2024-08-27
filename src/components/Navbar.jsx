import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { LogOut, User, Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import useAuth from '../services/authContext';
import SignInGoogle from './SignInGoogle';

export const Navbar = () => {
  const { authenticated, userData, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const tab = location.pathname === '/' ? "home"
      : location.pathname === '/query' ? "query"
      : location.pathname === '/image' ? "image"
      : location.pathname === '/music' ? "music"
      : "";
    setActiveTab(tab);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Generate images', path: '/image' },
    { name: 'Chat assistance', path: '/query' },
    { name: 'Generate music', path: '/music' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      <nav className='flex justify-between items-center px-4 md:px-10 lg:px-20 py-4 relative'>
        <p onClick={() => handleNavigation('/')} className='font-thin text-3xl md:text-5xl cursor-pointer'>AIELLO</p>
        
        <ul className='hidden lg:flex items-center gap-2 border border-gray-400 rounded-full select-none'>
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`text-sm rounded-full transition-all duration-300 p-2 hover:cursor-pointer ${
                activeTab === (item.path.slice(1) || 'home') ? 'bg-black text-white' : 'text-black bg-white'
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2'>
          {authenticated ? (
            <DropdownMenu className="relative">
              <DropdownMenuTrigger asChild>
                <Button
                  className="select-none flex items-center md:border lg:border-2 border-gray-500 h-10 hover:bg-blue-300 p-2"
                  buttonVariants="default"
                >
                  <span className="hidden md:inline">{userData.username}</span>
                  <img className='h-8 w-8 md:ml-2 m-0' src={userData.picture} alt={userData.username} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-100">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>{userData.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <SignInGoogle />
          )}
          
          <Button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </Button>
        </div>
      </nav>

      {isOpen && (
        <div className="absolute left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`block w-full text-left px-4 py-2 ${
                activeTab === (item.path.slice(1) || 'home') ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      <hr className='w-full'/>
    </>
  );
};