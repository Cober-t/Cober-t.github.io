import { Leva } from 'leva'       
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { SectionWrapper } from '../hoc';
import '../style.css'
import { motion } from 'framer-motion'
import { art3dDictPath, illustrationDictPath, musicDictPath, otherDictPath, videogameDictPath } from '../constants';

// const Home = React.lazy(() => import('./Home'));
// const Illustration = React.lazy(() => import('./Illustration'));
// const Music = React.lazy(() => import('./Music'));
// const Other = React.lazy(() => import('./Other'));
// const Videogames = React.lazy(() => import('./Videogames'));
// const Art3D = React.lazy(() => import('./Art3D'));

import {Home, Illustration, Music, Other, Videogames, Art3D} from "./index"


function HomeWrapper(Component) {

    const [opacityBackground, setOpacityBackground] = useState("opacity-100")
    
    return (
        <>
            <div className={`w-full h-full bg-black-100 fixed top-0 left-0 z-20 ${opacityBackground}`}/>
            <motion.div
                key="slide-out"
                className="w-full h-full bg-black-100 fixed top-0 left-0 origin-bottom z-20"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                onAnimationStart={()=> setOpacityBackground("hidden")}
                transition={{ duration: 1, ease: 'easeIn' }}
                />
            <Component/>
        </>
    )
}

function App() {

    return (
        // <Leva collapsed/>
        <AnimatePresence mode="wait">
    
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={ HomeWrapper(Home) }/>
                    <Route path="/illustration" element={ SectionWrapper(Illustration, illustrationDictPath) }/>
                    <Route path="/videogames" element={ SectionWrapper(Videogames, videogameDictPath) }/>
                    <Route path="/music" element={ SectionWrapper(Music, musicDictPath) }/>
                    <Route path="/other" element={ SectionWrapper(Other, otherDictPath) }/>
                    <Route path="/art3D" element={ SectionWrapper(Art3D, art3dDictPath) }/>
                </Routes>

            </BrowserRouter>
    
        </AnimatePresence>
    )
}

export default App