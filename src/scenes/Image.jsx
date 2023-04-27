import React from 'react'
import { useState } from 'react'
import { ImageWidget } from '../components/widgets/ImageWidget.jsx';
import { ImageLoading } from '../components/widgets/ImageLoading.jsx';
import './Image.css'
//import { apiUrl } from '../api.js';

export const Image = () => {
    const [query, setQuery] = useState({prompt: "", n: 1});
    const [promptResult, setPromptResult] = useState([]);
    const [loading, setLoading] = useState(false);
//    const endpoint = "generateImage"
//    const url = apiUrl(endpoint);
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setPromptResult([]);
      console.log(query.prompt);
      const response = await fetch(
        "https://aiello-backend.up.railway.app/generateImage",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(query)
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
        setQuery({...query, prompt: event.target.value});
    }
    const handleCountChange = (event) => {
        const value = parseInt(event.target.value);
        setQuery({...query, n: value});
    }
  
    return (
      <main className='image-main' style={{  padding : promptResult.length ? '0.5rem 15px' : '8rem 15px' }}>
        <h1>Generate Creative Images</h1>
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
      </main>
    )
  }
