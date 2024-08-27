import logo from '../asset/download.png'
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
            <main className="w-full flex items-center justify-center p-4 lg:my-10 md:p-0">
                <div className="w-full md:w-11/12 mt-10 bg-gradient-to-br from-slate-300 to-white rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center p-6 md:p-18">
                        <img className="w-32 h-32 md:w-48 md:h-48 lg:w-80 lg:h-80 mb-6 md:mb-0" src={logo} alt="logo" />
                        <p className="text-4xl md:text-6xl lg:text-8xl font-mono text-center md:text-left">
                            <span> AIELLO, </span>
                            <br />
                            <span> All-in-One </span>
                            <br />
                            <span> Creative Hub </span>
                        </p>
                    </div>
                    <p className="px-4 md:px-16 pb-6 md:pb-10 text-center md:text-left text-sm md:text-base lg:text-lg">
                        AIello is a versatile app that leverages AI technology to generate high-quality images and provide chat assistance for a wide range of tasks and topics, making it an essential tool for many industries.
                    </p>
                </div>
            </main>
            <div className="flex flex-col items-center my-24 lg:my-48 w-full">
                <h1 className="text-center text-2xl font-bold mb-8">Our So-Called Offerings</h1>
                <div className="flex flex-col sm:flex-row justify-between items-center w-3/5 h-30 my-6 rounded-lg p-5 bg-gray-200 shadow-lg">
                    <p className="text-lg font-semibold flex-1">Chat Assistance</p>
                    <hr className="hidden sm:block w-12 transform rotate-90 border-t-2 border-gray-400 mx-4" />
                    <p className="text-sm flex-1">Providing intelligent assistance for various tasks, topics.</p>
                    <button 
                        className="bg-gray-500 text-white rounded-lg h-12 px-6 transition-shadow duration-400 hover:shadow-md"
                        onClick={() => navigate('/query')}>
                        Launch
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center w-3/5 h-30 my-6 rounded-lg p-5 bg-gray-200 shadow-lg">
                    <p className="text-lg font-semibold flex-1">Image Generation</p>
                    <hr className="hidden sm:block w-12 transform rotate-90 border-t-2 border-gray-400 mx-4" />
                    <p className="text-sm flex-1">AI generates stunning images with ease and efficiency.</p>
                    <button 
                        className="bg-gray-500 text-white rounded-lg h-12 px-6 transition-shadow duration-400 hover:shadow-md"
                        onClick={() => navigate('/image')}>
                        Launch
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center w-3/5 h-30 my-6 rounded-lg p-5 bg-gray-200 shadow-lg">
                    <p className="text-lg font-semibold flex-1">Music Generation</p>
                    <hr className="hidden sm:block w-12 transform rotate-90 border-t-2 border-gray-400 mx-4" />
                    <p className="text-sm flex-1">AI generates music using machine learning to compose melodies and harmonies.</p>
                    <button 
                        className="bg-gray-500 text-white rounded-lg h-12 px-6 transition-shadow duration-400 hover:shadow-md"
                        onClick={() => navigate('/music')}>
                        Launch
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center w-3/5 h-30 my-6 rounded-lg p-5 bg-gray-200 shadow-lg">
                    <p className="text-lg font-semibold flex-1">Code Assistance</p>
                    <hr className="hidden sm:block w-12 transform rotate-90 border-t-2 border-gray-400 mx-4" />
                    <p className="text-sm flex-1">AI-powered code completion, debugging, suggestions.</p>
                    <button 
                        className="bg-gray-300 text-gray-500 rounded-lg h-12 px-6 cursor-not-allowed">
                        Soon...
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center w-3/5 h-30 my-6 rounded-lg p-5 bg-gray-200 shadow-lg">
                    <p className="text-lg font-semibold flex-1">Audio Mimicking</p>
                    <hr className="hidden sm:block w-12 transform rotate-90 border-t-2 border-gray-400 mx-4" />
                    <p className="text-sm flex-1">AI can mimic audio to replicate sounds or voices.</p>
                    <button 
                        className="bg-gray-300 text-gray-500 rounded-lg h-12 px-6 cursor-not-allowed">
                        Soon...
                    </button>
                </div>
            </div>

        </motion.div>
    )
}
