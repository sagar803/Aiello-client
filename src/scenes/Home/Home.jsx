import logo from '../../asset/download.png'
import './Home.css'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

export const Home = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <main className="w-full flex items-center justify-center">
               <div className='w-11/12 bg-gradient-to-br from-slate-300 to-white rounded-2xl'>
                    <div className='logo-and-des'>
                        <img  className='main-logo' src={logo} alt="logo" />
                        <p className='des'>AIello is a versatile app that leverages AI technology to generate high-quality images and provide chat assistance for a wide range of tasks and topics, making it an essential tool for many industries.</p>
                    </div>
                    <p className='main-heading'>
                        AIELLO, All-in-One Creative Hub
                    </p>

                </div>
            </main>
            <div className="card-container">
                <h1 className='text-align'>Our So-Called Offerings</h1>
                <div className='card query-card'>
                    <p className='card-heading'>Chat Assistance</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">Providing intelligent assistance for various tasks, topics.</p>
                    <button onClick={() => navigate('/query')} >Launch</button>
                </div>
                <div className='card image-card'>
                    <p className='card-heading'>Image Generation</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI generates stunning images with ease and efficiency.</p>
                    <button onClick={() => navigate('/image')}>Launch</button>
                </div>
                <div className='card music-card'>
                    <p className='card-heading'>Music Generation</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI generates music using machine learning to compose melodies and harmonies.</p>
                    <button onClick={() => navigate('/music')}>Launch</button>
                </div>
                <div className='card code-card'>
                    <p className='card-heading'>Code Assistance</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI-powered code completion, debugging, suggestions.</p>
                    <button className='disabled'>Soon...</button>
                </div>
                <div className='card audio-mimic-card'>
                    <p className='card-heading'>Audio Mimicking</p>
                    <hr className='hr-vertical'/>
                    <p className="card-des">AI can mimic audio to replicate sounds or voices.</p>
                    <button className='disabled'>Soon...</button>
                </div>
            </div>
        </motion.div>
    )
}
