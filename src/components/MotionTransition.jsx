import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"


const MotionTransition = () => {

    const location = useLocation()

    return (
        <div key={location.pathname}>
            <motion.div
            className="fixed z-[100] top-0 left-0 w-full h-[100vh] outline-none bg-orange origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: [ 0.22, 1, 0.36, 1 ] }}
            />

            <motion.div
            className="fixed z-[100] top-0 left-0 w-full h-[100vh] outline-none bg-orange origin-right"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1.5, ease: [ 0.22, 1, 0.36, 1 ] }}
            />
        </div>
    )
}

export default MotionTransition
