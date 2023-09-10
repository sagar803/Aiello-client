import React from 'react'
import { useState } from 'react'
import { ImageWidget } from '../../components/widgets/ImageWidget.jsx';
import './Image.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"


export const Image = () => {
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
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className='image-main' style={{  paddingTop: promptResult.length ? '15vh' : 'undefined' }}
        >
            
          <h1 className='font-weight-100' style={{ fontSize : promptResult[0] ? '2rem' : '3rem' }} > Generate Creative Images</h1>
          <form className='image-form' onSubmit={query.prompt ? handleSubmit : nullInputHandler}>
            <input type="text" placeholder='Image Description' value={query.prompt} onChange={handleChange} onSubmit={handleSubmit}/>
              <select onChange={handleCountChange} onSubmit={handleSubmit}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
              </select>
            <button className={loading ? 'loader' : ''}></button>
          </form>
          <p className="helper-text" style={{display : loading ? 'block' : 'none' }}>Reload page if it's taking too long to respond*</p>
          <div className="image-container">
            {promptResult.map((image) => <ImageWidget key={image.id} url={image.url} />)}
          </div>
          <ToastContainer />
        </motion.main>
      </>
    )
  }
