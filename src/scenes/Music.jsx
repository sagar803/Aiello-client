import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"
import useAuth from '../services/authContext.jsx';
import { useNavigate } from 'react-router-dom';
import SigninAlertContent from '../components/signin-alert-content.jsx';


export const Music = () => {
  const {authenticated} =  useAuth();
  const navigate = useNavigate()
  const [prompt, setPrompt] = useState("");
  const [promptResult, setPromptResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_LIVE}/music`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
    
      if (response.ok) {
        const data = await response.json();
        setPromptResult(data.result);
        toast.success("API call successful!");
      } else {
        // Handle different error scenarios
        if (response.status === 429) {
          toast.error("Too Many Requests. Please try again later.");
        } else if (response.status === 404) {
          toast.error("Resource not found.");
        } else {
          toast.error("An error occurred. Please try again.");
        }
        console.error("Error occurred during API call:", response.status);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error occurred during API call:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const nullInputHandler = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };
  return (
    <>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`music-main flex flex-col min-h-[90vh] text-center items-center transition-opacity duration-300 ${promptResult.length ? 'pt-[15vh]' : 'pt-[30vh]'}`}
      >
        <h1 className={`font-light ${promptResult.length ? 'text-2xl' : 'text-3xl'}`}>Generate Music</h1>
        <form onSubmit={prompt ? handleSubmit : nullInputHandler} className='flex items-center'>
          <input 
            placeholder='What kind of music you would love....' 
            type="text" 
            value={prompt} 
            onChange={handleChange} 
            className='bg-[#2e313e44] text-gray-400 m-1 w-[400px] min-w-[200px] h-[50px] rounded-full border border-gray-400 pl-5'
          />
          {authenticated ? (
            <button className={`h-[50px] w-[50px] rounded-full ${loading ? 'loader' : 'bg-[#2e313e44] border-[4px] border-double border-gray-400'}`}></button>
          ) : (
            <SigninAlertContent>
              <button className={`h-[50px] w-[50px] rounded-full ${loading ? 'loader' : 'bg-[#2e313e44] border-[4px] border-double border-gray-400'}`}></button>
            </SigninAlertContent>
          )}
        </form>
        <p className={`helper-text ${loading ? 'block' : 'hidden'}`}>It usually takes 3 to 5 minutes*</p>
        <div className={`music-result-container ${promptResult.length ? 'block' : 'hidden'}`}>
          {promptResult.length !== 0 && (
            <audio controls>
              <source src={promptResult} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <ToastContainer />
      </motion.main>

    </>
  );
};

