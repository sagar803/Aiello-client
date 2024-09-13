import logo from '../asset/download.png'
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import CardsContainer from './widgets/card';
import Card from './widgets/card';



export const Home = () => {
    const navigate = useNavigate();
    const cardData = [
        {
            bgColor: 'bg-query-card-bg',
            title: 'Chat Assistance',
            description: 'Providing intelligent assistance for various tasks, topics.',
            buttonText: 'Launch',
            buttonAction: () => navigate('/query'),
            isDisabled: false,
        },
        {
            bgColor: 'bg-image-card-bg',
            title: 'Image Generation',
            description: 'AI generates stunning images with ease and efficiency.',
            buttonText: 'Launch',
            buttonAction: () => navigate('/image'),
            isDisabled: false,
        },
        {
            bgColor: 'bg-code-card-bg',
            title: 'Music Generation',
            description: 'AI generates music using machine learning to compose melodies and harmonies.',
            buttonText: 'Launch',
            buttonAction: () => navigate('/music'),
            isDisabled: false,
        },
        {
            bgColor: 'bg-audio-mimic-card-bg',
            title: 'Code Assistance',
            description: 'AI-powered code completion, debugging, suggestions.',
            buttonText: 'Soon...',
            buttonAction: () => {},
            isDisabled: true,
        },
        {
            bgColor: 'bg-music-card-bg',
            title: 'Audio Mimicking',
            description: 'AI can mimic audio to replicate sounds or voices.',
            buttonText: 'Soon...',
            buttonAction: () => {},
            isDisabled: true,
        },
    ];


    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <main className="w-full flex items-center justify-center p-4 lg:my-10 md:p-0">
                <div className="w-full md:w-11/12 mt-10 bg-gradient-to-br from-slate-300 to-white rounded-2xl">
                    <div className="flex flex-col md:flex-row items-center p-6 md:p-18">
                        <img className="w-48 h-48 lg:w-80 lg:h-80 mb-6 md:mb-0" src={logo} alt="logo" />
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
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        bgColor={card.bgColor}
                        title={card.title}
                        description={card.description}
                        buttonText='Launch'
                        buttonAction={card.buttonAction}
                        isDisabled={card.isDisabled}
                    />
                ))}
            </div>

        </motion.div>
    )
}
