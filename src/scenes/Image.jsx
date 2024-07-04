import React from 'react'
import { useState } from 'react'
import { ImageWidget } from '../components/widgets/ImageWidget.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"
import useAuth from '../services/authContext.jsx';
import SigninAlertContent from '../components/signin-alert-content.jsx';


export const Image = () => {
    const {authenticated} =  useAuth();
    const [query, setQuery] = useState({prompt: "", n: 1});
    const [promptResult, setPromptResult] = useState([]);
    const [loading, setLoading] = useState(false);



    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);

      try {
          const response = await fetch( `${import.meta.env.VITE_API_LIVE}/generateImage`,
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
          }
        );
        if(response.ok){
          const data = await response.json();
          setPromptResult(data.result);
          toast.success("API call successful!");
        }
        else {
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
        } 
        catch (error) {
          toast.error("An error occurred. Please try again.");
          console.error("Error occurred during API call:", error.message);
        }
        finally{
          setLoading(false);
        }
      }
        const nullInputHandler = (event) => {
          event.preventDefault();
        }
        const handleChange = (event) => {
            setQuery({...query, prompt: event.target.value});
        }
        const handleCountChange = (event) => {
            const value = parseInt(event.target.value);
            setQuery({...query, n: value});
        }
  
    return (
      <>
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`image-main flex flex-col min-h-[90vh] text-center items-center transition-opacity duration-300 ${promptResult.length ? 'pt-[15vh]' : 'pt-[30vh]'}`}
      >
        <h1 className={`font-light ${promptResult[0] ? 'text-2xl' : 'text-3xl'}`}>Generate Creative Images</h1>
        <form className='image-form flex items-center' onSubmit={query.prompt ? handleSubmit : nullInputHandler}>
          <input 
            type="text" 
            placeholder='Image Description' 
            value={query.prompt} 
            onChange={handleChange} 
            className='text-lg bg-[#2e313e44] text-gray-400 w-[400px] min-w-[200px] h-[50px] rounded-full border border-gray-400 pl-5 md:w-[200px]'
          />
          <select 
            onChange={handleCountChange} 
            className='cursor-pointer bg-[#2e313e44] m-1 text-gray-400 h-[50px] w-[80px] rounded-full border border-gray-400 text-center'
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          {authenticated ? (
            <button className={`h-[50px] w-[50px] rounded-full ${loading ? 'loader' : 'bg-[#2e313e44] border-[4px] border-double border-gray-400'}`}></button>
          ) : (
            <SigninAlertContent>
              <button className={`h-[50px] w-[50px] rounded-full ${loading ? 'loader' : 'bg-[#2e313e44] border-[4px] border-double border-gray-400'}`}></button>
            </SigninAlertContent>
          )}
        </form>
        <p className={`helper-text font-light text-sm text-gray-400 ${loading ? 'block' : 'hidden'}`}>Reload page if it's taking too long to respond*</p>
        <div className={`image-container p-7 flex items-center ${promptResult.length ? 'block' : 'hidden'} md:flex-col`}>
          {promptResult.map((image) => <ImageWidget key={image.id} url={image.url} />)}
        </div>
        <ToastContainer />
      </motion.main>

      </>
    )
  }
