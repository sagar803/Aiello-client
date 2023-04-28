import React from 'react'
import { useState } from 'react'
import './Query.css'
//import { apiUrl } from '../api';

export const Query = () => {
    const [prompt, setPrompt] = useState("");
    const [promptResult, setPromptResult] = useState([]);
    const [loading , setLoading] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const endpoint = "query"
      //const url = apiUrl(endpoint);
      setLoading(true);
      setPromptResult("");
      console.log(prompt);
      const response = await fetch(
      //"https://aiello-backend.up.railway.app/query"
      //"http://localhost:6001/query",  
      "https://aiello-backend.onrender.com/query",
      {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({prompt})
        }
      );
      setLoading(false);
      const data = await response.json();
      setPromptResult(data.result);
    }

    const nullInputHandler = (event) => {
      event.preventDefault();
    }

    const handleChange = (event) => {
      setPrompt(event.target.value);
    }

    //<i class="fa-regular fa-arrow-right-to-arc"></i>
    return (
      <main className='chat-main' style={{  padding : promptResult.length ? '2rem 15px' : '8rem 15px' }}>
        <h1 style={{ fontSize : promptResult.length ? '2rem' : '3rem' }} >Chat Assistance</h1>
        <form onSubmit={prompt ? handleSubmit : nullInputHandler}>
          <input placeholder='Hi! Prompt Me...' type="text" value={prompt} onChange={handleChange} onSubmit={handleSubmit}/>
          <button className={loading ? 'loader' : ''}></button>
        </form>
        <div className='query-result-container' style={{ display: promptResult.length ? 'block' : 'none' }}>
          {promptResult && promptResult.map((item, index) => <p key={index}>{item}</p> )}
        </div>
      </main>
    )
}  