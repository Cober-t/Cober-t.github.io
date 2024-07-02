import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion'
import '../style.css'
import { motion } from 'framer-motion'
import { Home } from './';


function App() {

    const [opacityBackground, setOpacityBackground] = useState("opacity-100")

    return (
        // <AnimatePresence id="home" mode="wait">

        //     <div className={`w-full h-full bg-black-100 fixed top-0 left-0 z-20 ${opacityBackground}`}/>
        //     <motion.div
        //         key="slide-out"
        //         className="w-full h-full bg-black-100 fixed top-0 left-0 origin-bottom z-20"
        //         initial={{ scaleY: 1 }}
        //         animate={{ scaleY: 0 }}
        //         onAnimationStart={()=> setOpacityBackground("hidden")}
        //         transition={{ duration: 1, ease: 'easeIn' }}
        //         />
        //     <Home/>
    
        // </AnimatePresence>

        <Home/>
    )
}

export default App