import React from 'react'
import { useState } from 'react'
import './Query.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../../components/Navbar';
//import { apiUrl } from '../api';

export const Query = () => {
  const [prompt, setPrompt] = useState("");
  const [promptResult, setPromptResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_LIVE}/query`, {
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
      <Navbar />
      <main className='chat-main' style={{  padding : promptResult.length ? '8% 15px' : '15% 15px' }}>
        <h1 style={{ fontSize : promptResult.length ? '2rem' : '3rem' }} >Chat Assistance</h1>
        <form onSubmit={prompt ? handleSubmit : nullInputHandler}>
          <input placeholder='Hi! Prompt Me...' type="text" value={prompt} onChange={handleChange} onSubmit={handleSubmit}/>
          <button className={loading ? 'loader' : ''}></button>
        </form>
        <div className='query-result-container' style={{ display: promptResult.length ? 'block' : 'none' }}>
          {promptResult && promptResult.map((item, index) => <p key={index}>{item}</p> )}
        </div>
        <ToastContainer />
      </main>
    </>
  );
};
