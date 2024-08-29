import { createRef, useMemo, useRef, useState } from "react"
import '../style.css'
import Index from './Index.jsx';
import { motion, useInView, useScroll, useTransform } from "framer-motion";

function Node({ name, animation, description }) {
    return (
    <div className="z-40">
        <p className={`flex flex-row flex-nowrap items-center text-center justify-center w-full pl-[50px] pr-[50px] mb-[50px]`}>
            {name}
        </p>

        <div className='flex flex-row w-full items-center justify-center gap-5'>
            <img src={animation} alt="React Logo" className='w-[200px] h-[200px]'/>
            <p className='flex flex-row max-w-[750px] tracking-wider h-full text-[24px] font-regular items-center'>
                {description}
            </p>
        </div>
    </div>
    )
}

export default function ToolNodes({ commits, indexShow }) {

    const [currentBackground, setCurrentBackground] = useState(commits[0].backgroundImage)
    const [previousBackground, setPreviousBackground] = useState(commits[0].backgroundImage)

    // const backgroundRef = useRef(null)
    // const { scrollYProgress, scrollY } = useScroll({
    //     target: backgroundRef,
    //     axis: "x",
    //     offset: ["start end", "center center"],
    // })

    // const backgroundMovement = useTransform(scrollYProgress,
    //     [0, 1], ["100%", "0%"], {clamp: false})
        
    const nodeRefs = useMemo(() =>
        Array(commits.length)
        .fill(0)
        .map(i=> createRef())
    )

    const isInViewArray = Array(nodeRefs.length)
        .fill(0)
        .map((i) => useInView(nodeRefs[i], { amout:"all" }))

    const ChangBackgroundFn =({ main, newBackground, commitIndex }) => {

        const isInView = useInView(nodeRefs[commitIndex], {
            amount: "all"
        })

        
        if (isInView && main && newBackground !== previousBackground)
        {
            setPreviousBackground(currentBackground)
            setCurrentBackground(newBackground)
        }
    }

    const variants = {
        visible: { width: "100%" },
        hidden: { width: 0 },
    }

    return (
        <>
            
            {
                nodeRefs && 
                <Index commits={commits} refs={nodeRefs} show={indexShow}/>
            }

            <div style={{ '--image-url': `url(${currentBackground})` }}
            className={`fixed bg-[image:var(--image-url)]
                flex flex-row h-screen w-full bg-center bg-cover bg-no-repeat`}/>

          
            {/* NODES */}
            <div className='relative z-30 flex flex-col items-center justify-end select-none'>
            {
                commits.map((commit, index) =>
                    
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[index]}
                    >
                        {
                        commit.main && 
                        <motion.div
                            key={isInViewArray[index]}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            transition={{
                                duration: 2
                            }}
                            style={{ '--image-url': `url(${previousBackground})` }}
                            className={`absolute z-20 flex flex-row bg-[image:var(--image-url)]
                                h-screen w-full bg-center bg-cover bg-no-repeat`}
                            />
                        }
                                    
                        {/* BACKGROUND TINT*/}
                        <div style={{ position: "fixed",  zIndex:"30",
                            height: "100vh", width: "100vw",
                            backgroundColor: "#000000", opacity: "0.5" }}/>


                        <Node name={commit.name} animation={commit.animation} description={commit.description}/>

                        <ChangBackgroundFn main={commit.main} 
                            newBackground={commit.backgroundImage} 
                            commitIndex={index}
                            /> 
                    </div>
                )
            }

            </div>

        </>
    )
}