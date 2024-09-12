import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "react-router-dom"


const PageTransition = () => {

    const location = useLocation()

    return (
        <div key={location.pathname}>
            <motion.div
            initial={{ opacity: 1}}
            animate={{
                opacity: 0,
                transition: { delay: 0.6, duration: 0.4, ease: "easeInOut"}
            }}
            className="h-screen w-screen z-[100] fixed bg-black top-0 pointer-events-none"
            />
        </div>
    )
}

export default PageTransition

