import React from 'react'
import { useState } from 'react'
import './Music.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"

export const Music = () => {
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
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        
        className='music-main' 
        style={{  paddingTop: promptResult.length ? '15vh' : 'undefined' }}
      >
        <h1 className='font-weight-100' style={{ fontSize : promptResult.length ? '2rem' : '3rem' }} >Generate Music</h1>
        <form onSubmit={prompt ? handleSubmit : nullInputHandler}>
          <input placeholder='What kind of music you would love....' type="text" value={prompt} onChange={handleChange} onSubmit={handleSubmit}/>
          <button className={loading ? 'loader' : ''}></button>
        </form>
        <p className="helper-text" style={{display : loading ? 'block' : 'none' }}>It usually takes 3 to 5 minutes*</p>
        <div className='music-result-container' style={{ display: promptResult.length ? 'block' : 'none' }}>
          {
            promptResult.length !== 0 &&  (
              <audio controls>
                <source src={promptResult} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            )
          }
        </div>
        <ToastContainer />
      </motion.main>
    </>
  );
};

