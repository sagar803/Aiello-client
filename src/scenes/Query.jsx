import React from 'react'
import { useState } from 'react'
//import { apiUrl } from '../api';

export const Query = () => {
    const [prompt, setPrompt] = useState("");
    const [promptResult, setPromptResult] = useState("");
    const [loading , setLoading] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const endpoint = "query"
      //const url = apiUrl(endpoint);
      setLoading(true);
      setPromptResult("");
      console.log(prompt);
      const response = await fetch(
        "https://aiello-backend.up.railway.app/query",
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
    const handleChange = (event) => {
      setPrompt(event.target.value);
    }
  
    return (
      <main>
        <form onSubmit={handleSubmit}>
          <input placeholder='Hi! Prompt Me...' type="text" value={prompt} onChange={handleChange} onSubmit={handleSubmit}/>
          <button>Submit</button>
          {loading && (<div className='query-loading'></div>)}
        </form>
        <p>{promptResult}</p>
      </main>
    )
}  