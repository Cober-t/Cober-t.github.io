import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useState } from "react"

const MotionTransition = () => {

    const location = useLocation()
    const [animationComplete, setAnimationComplete] = useState(false)

    return (
        <>
        <div key={location.pathname}>
            <motion.div
            className="fixed z-50 top-0 left-0 w-full h-full outline-none bg-orange origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [ 0.22, 1, 0.36, 1 ] }}
            />

            <motion.div
            className="fixed z-50 top-0 left-0 w-full h-full outline-none bg-orange origin-right"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.5, ease: [ 0.22, 1, 0.36, 1 ] }}
            />
            <motion.div
            initial={{ opacity: 1}}
            exit={{ scaleX:0, visibility: "hidden" }}
            onAnimationComplete={()=> {setAnimationComplete(true)}}
            animate={{
                opacity: 0,
                transition: { delay: 0.6, duration: 0.4, ease: "easeInOut"}
            }}
            className={`h-full w-full fixed bg-black top-0 left-0 z-40 
                ${animationComplete === false ? "display":"hidden"}`}
                />
        </div>
{/* 
        <div className="fixed top-0 w-full h-screen z-[-100] pattern">
        </div> */}
        </>
    )
}

export default MotionTransition
