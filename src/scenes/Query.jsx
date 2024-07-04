import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import useAuth from '../services/authContext.jsx';
import { useNavigate } from 'react-router-dom';
import SigninAlertContent from '../components/signin-alert-content.jsx';

export const Query = () => {
  const {authenticated} =  useAuth();
  const navigate = useNavigate()
  const [prompt, setPrompt] = useState("");
  const [promptResult, setPromptResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isStreamed, setIsStreamed] = useState(true);
  const [model , setModel ] = useState("gemini")

  // useEffect(() => {
  //   if(!authenticated) alert("You need to login first");
  //   navigate('/');    
  // }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!prompt) return;
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_LIVE}/query/${isStreamed ? "geministream" : "gemini" }`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      });
    

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
      if(isStreamed){
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let content = '';
      
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          content += decoder.decode(value, { stream: true });
          setPromptResult(content)
          console.log(content); // Process the chunk (e.g., update the UI)
        }
      } else {
        const data = await response.json();
        setPromptResult(data.result);
      }
  
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error occurred during API call:", error.message);
    } finally {
      setLoading(false);
    }
    
  };


  /*
    console.log(chatHistory)
  const [chatHistory, setChatHistory] = useState([])
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({ 
          history: chatHistory,
          message: prompt
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      }
      const response = await fetch(`${import.meta.env.VITE_API_LIVE}/query/gemini`, options);

      const data = await response.text();
      setChatHistory(oldChatHistory => [...oldChatHistory , { role: "user", parts: [prompt]},{ role: "model", parts: [data]}])
      setPrompt('')
      
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error occurred during API call:", error.message);
    } finally {
      setLoading(false);
    }
    
  };
  */


  return (
    <>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`flex flex-col min-h-[90vh] items-center transition-opacity duration-300 ${promptResult.length > 0 ? 'pt-[15vh]' : 'pt-[30vh]'}`}

      >
        <p 
          className='text-gray-500 cursor-pointer border border-gray-200 hover:bg-blue-100 transition duration-200 p-2 rounded-md shadow select-none'
          onClick={() => setIsStreamed(!isStreamed)}
        >
          {model.toUpperCase()} / {"isStreamed : " + isStreamed}
        </p>
        <h1 className={`font-light ${promptResult.length ? 'text-2xl' : 'text-3xl'}`}>Chat Assistance</h1>
        <form onSubmit={handleSubmit} className='flex items-center'>
          <input 
            placeholder='Hi! Prompt Me...' 
            type="text" 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
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
        <div className={`query-result-container ${promptResult.length ? 'block' : 'hidden'}`}>
          {promptResult && <Markdown remarkPlugins={[remarkGfm, remarkMath]}>{promptResult}</Markdown>}
        </div>
        <ToastContainer />
      </motion.main>
    </>
  );
};
