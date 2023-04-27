import React, { useState } from 'react'
import logo from '../asset/logo.png'
import './Home.css'

export const Home = (Props) => {
    const [page, setPage] = useState("home");
    const queryPage = () => {
        Props.setPage("query");
        window.scrollTo(0, 0);
    }
    const imagePage = () => {
        Props.setPage("image");
        window.scrollTo(0, 0);
    }
    return (
        <main>
            <div className='logo-and-des'>
                <img  className='main-logo' src={logo} alt="" />
                <div className='main-des'>
                    <p className='aiello-bullet'>
                        Chat Assistance With Image Generation
                    </p>
                <p className='main-sub-des'>AIello is a versatile app that leverages AI technology to generate high-quality images and provide chat assistance for a wide range of tasks and topics, making it an essential tool for many industries.</p>
                </div>
            </div>

            <div className="card-container">
                <div className='card query-card'>
                    <p className='card-heading'>Chat Assistance</p>
                    <p className="card-des">Providing intelligent assistance for various tasks and topics.</p>
                    <button onClick={queryPage} >Launch</button>
                </div>
                <div className='card image-card'>
                    <p className='card-heading'>Image Generation</p>
                    <p className="card-des">AI generates stunning images with ease and efficiency.</p>
                    <button onClick={imagePage}>Launch</button>
                </div>
                <div className='card code-card'>
                    <p className='card-heading'>Code Assistance</p>
                    <p className="card-des">AI-powered code completion, debugging, and suggestions.</p>
                    <button >Soon...</button>
                </div>
            </div>
            {/*
            <div className='cta'>
                <Query/>
                <Image/>
            </div>
            */}
        </main>
    )
}
