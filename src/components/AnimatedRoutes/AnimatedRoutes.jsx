import React from 'react'
import { Routes, Route , useLocation} from "react-router-dom";
import { Home } from '../../scenes/Home.jsx';
import { Query } from '../../scenes/Query.jsx';
import { Image } from '../../scenes/Image.jsx';
import { Music } from '../../scenes/Music.jsx';
import Auth from '../../scenes/Auth.jsx';

export const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <div>
            <Routes location={location} key={location}>
                <Route path="*" element={ <p>Invalid Url</p>}/>
                <Route path="auth" element={<Auth />} />
                <Route path="/" element={ <Home />}/>
                <Route path="/query" element={ <Query /> }/>
                <Route path="/image" element={ <Image /> }/>
                <Route path="/music" element={ <Music /> }/>
            </Routes>
        </div>
    )
}
