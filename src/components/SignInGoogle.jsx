import React from 'react'
import { googleLoginUrl } from '../services/authService';
import googleIcon from '../asset/google.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import gIcon from '../asset/g.jpg'

const SignInGoogle = () => {
  
  return (
    <a
      href={googleLoginUrl}
      className="flex items-center justify-center cursor-pointer rounded px-3 py-2 h-10 border border-gray-500 m-0"
    >
      <img className='m-0 w-6 object-contain mr-2' src={gIcon} />
      <p className='m-0' href={googleLoginUrl}>Sign&nbsp;in</p>
    </a>
  )
}

export default SignInGoogle