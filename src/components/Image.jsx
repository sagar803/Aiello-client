import React from 'react'
import { useState } from 'react'
import { ImageWidget } from './widgets/ImageWidget.jsx';
import { ImageLoading } from './widgets/ImageLoading.jsx';

export const Image = () => {
    const [query, setQuery] = useState({prompt: "", n: 1});
    const [promptResult, setPromptResult] = useState([]);
    const [loading, setLoading] = useState(false);
  
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
      console.log(data.result[0].url);
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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Image Description' value={query.prompt} onChange={handleChange} onSubmit={handleSubmit}/>
            <select onChange={handleCountChange} onSubmit={handleSubmit}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
          <button>Generate Image</button>
        </form>
        {loading && <ImageLoading/>}
        {promptResult.map((image) => <ImageWidget key={image.id} url={image.url} />)}
      </>
    )
}
