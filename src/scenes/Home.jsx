import React, { useState } from 'react'
import logo from '../asset/logo.png'
import './Home.css'
import { useNavigate } from "react-router-dom";
import { Navbar } from '../components/Navbar';
export const Home = (Props) => {
    const [page, setPage] = useState("home");
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main className='landing-page-main'>
                <div className='overlay'>
                    <div className='logo-and-des'>
                        <img  className='main-logo' src={logo} alt="logo" />
                        <p className='des'>AIello is a versatile app that leverages AI technology to generate high-quality images and provide chat assistance for a wide range of tasks and topics, making it an essential tool for many industries.</p>
                    </div>
                    <p className='main-heading'>
                        Introducing <em>Aiello</em>, All-in-One Creative Hub
                    </p>
                </div>
            </main>
            
            <div className="card-container">
                <div className='card query-card'>
                    <p className='card-heading'>Chat Assistance</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">Providing intelligent assistance for various tasks and topics.</p>
                    <button onClick={() => navigate('/query')} >Launch</button>
                </div>
                <div className='card image-card'>
                    <p className='card-heading'>Image Generation</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI generates stunning images with ease and efficiency.</p>
                    <button onClick={() => navigate('/image')}>Launch</button>
                </div>
                <div className='card code-card'>
                    <p className='card-heading'>Code Assistance</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI-powered code completion, debugging, and suggestions.</p>
                    <button className='disabled'>Soon...</button>
                </div>
                <div className='card audio-mimic-card'>
                    <p className='card-heading'>Audio Mimicking</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI can mimic audio to replicate sounds or voices.</p>
                    <button className='disabled'>Soon...</button>
                </div>
                <div className='card music-card'>
                    <p className='card-heading'>Music Generation</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI generates music using machine learning to compose melodies and harmonies.</p>
                    <button className='disabled'>Soon...</button>
                </div>
            </div>
        </>
    )
}
