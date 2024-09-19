import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import MotionTranstion from "./MotionTransition.jsx"

import { createContext, useEffect, useState } from "react"
import { BsGithub } from "react-icons/bs"
import ProjectSlideButtons from "./ProjectSlideButtons.jsx"
import { Link } from "react-router-dom"
import "swiper/css"

export const ProjectContext = createContext()

const projects = [
    [
        {
            num: '0.0',
            title: "Core",
            description: "A la hora de comenzar un proyecto como el de un motor de videojuegos \
            existen una serie de características fundamentales que beneficia la creción de cualquier juego.\
            A continuación explico el desarrollo de dichas características a través de proyectos terminados.",
            stack: [{name: "C++"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '0.1',
            title: "Configuración del proyecto y API para la ventana",
            description: "Un conocimiento solico en configuración de proyectos \
            facilitará enormemente añadir librerias y la correcta compilación en \
            diferentes entornos. Es importante también la programación de una capa \
            que permita hacer funcionar la ventana y nuestras interacción con ella \
            a través de nuestros periféricos en cualquier Sistema Operativo.",
            stack: [{name: "CMake"}, {name: "glfw"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '0.2',
            title: "Sistema de 'logging'",
            description: "Imprescindible para comprobar si el funcionamiento es correcto \
            y poder ver la respuesta de eventos y de nuestras interacciones con el motor. \
            Los mensajes se almacenan y se eliminan de manera eficiente en memoria.",
            stack: [{name: "Debug"}, {name: "spdlog"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '0.3',
            title: "Editor",
            description: "Un editor visual para el motor supone una drástica mejora al permitir \
            la creación de herramientas que aceleran y facilitan el proceso de desarrollo de videjuegos.",
            stack: [{name: "ImGui"}, {name: "Immediate Mode"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
    ],
    [
        {
            num: '01',
            title: "project 1",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '02',
            category: 'frontend',
            title: "project 2",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '03',
            title: "project 3",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            title: "project 4",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
    ],
    [
        {
            num: '01',
            title: "project 1",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '02',
            title: "project 2",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '03',
            category: 'frontend',
            title: "project 3",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            title: "project 4",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
    ],
]
const projectsName = ["Game Engine", "Unity", "Python"]


const Projects = () => {

    const [project, setProject] = useState(projects[0][0])
    const [progress, setProgress] = useState(100/projects[0].length)
    const [lastProgressValue, setLastProgressValue] = useState(100/projects[0].length)
    const [currentProject, setCurrentProject] = useState(0)
    const [swiper, setSwiper] = useState(null)

    const [slideIndex, setSlideIndex] = useState(0);


    const slideTo = (index) => swiper.slideTo(index)

    const handleSlideChange = (swiper) => {

        const projectSize = projects[currentProject].length
        console.log(swiper.activeIndex)

        if (swiper.activeIndex === 0)
        {
            // if (slideIndex === 3)
            //     setProgress(100 / projectSize)
            // else
                setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
        }
        else if (swiper.activeIndex === projectSize - 1)
        {
            // if (slideIndex === 0)
            //     setProgress(100)
            // else
                setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
        }
        else
            setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)

        setSlideIndex(swiper.activeIndex);
        setProject(projects[currentProject][swiper.activeIndex])
    }

    useEffect(function() {

        setProject(projects[currentProject][0])

    }, [currentProject])



    return (
        <>
            <MotionTranstion />

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease:"easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center pb-12 px-12 xl:px-24 z-50">

                <div className="items-center justify-center grid-cols-3 grid
                 container mx-auto">
                    {projectsName.map((projectNode, index)=> {
                        return (
                            <div className="w-full items-center justify-center select-none text-nowrap"
                            onClick={() => {slideTo(0); setProgress(100/projects[index].length)}}>
                                <p className={`border-white/20 uppercase pt-2.5 pb-2.5 justify-center flex transition-all
                                ${currentProject === index ? "bg-pink-20 border-l-2 border-t-2 border-b-0 border-r-2" : 
                                    "border-l-0 border-t-0 border-b-2 border-r-0 hover:bg-white/5"}`}
                                onClick={()=> {setCurrentProject(index)}}>
                                    {projectNode}
                                </p>
                            </div> 
                        )
                    })}
                </div>

                <div className="container mx-auto select-none pt-5 pr-5 pl-5">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                        xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[20px] h-[50%]"> 
                                {/* outline num */}
                                <div className="text-8xl relative w-fit
                                text-stroke transition-all duration-300">
                                    {project.num}
                                    <span aria-hidden="true" 
                                    className="text-outline left-0 absolute text-backgroundColor">
                                        {project.num}
                                    </span>
                                </div>

                                {/* project category */}
                                <h2 className="text-[42px] font-bold leading-none text-white
                                hover:text-accent transition-all duration-300">
                                    {project.title}
                                </h2>
                                {/* project description */}
                                <p className="text-white/60 text-left">{project.description}</p>
                                {/* stack */}
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {/* {index !== project.stack.length - 1 && " ,"} */}
                                            </li>
                                        )
                                    })}
                                </ul>
                                {/* border */}
                                <div className="border border-white/20"></div>
                                {/* buttons */}
                                <div className=" flex items-start gap-4 mb-[20px]">
                                    <Link href={project.github}>
                                        <div className="w-[50px] h-[50px] rounded-full bg-white/5 flex
                                        justify-center items-center hover:text-accent text-white">
                                            <BsGithub className="text-3xl"/>
                                        </div>
                                    </Link>
                                </div>
                            </div>


                        </div>

                        <div className="w-full xl:w-[50%]">
                            <Swiper spaceBetween={10} slidesPerView={1} onSlideChange={handleSlideChange}
                            onSwiper={setSwiper} 
                            className="xl:h-[400px]">
                                {projects[currentProject].map((project, index)=> {
                                    return (
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-full relative flex justify-center
                                            items-center bg-pink-50/20">
                                                <div className="relative flex w-full h-full">
                                                    <img src={project.image} alt=""
                                                    className="w-full bg-center bg-cover"/>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                                <ProjectContext.Provider value={{setProgress}}>
                                    <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                    bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                                    xl:w-max xl:justify-none"
                                    projectSize={projects[currentProject].length}
                                    btnStyles="bg-accent hover:bg-accent-hover text-primary
                                    text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    />
                                </ProjectContext.Provider>
                            </Swiper>

                            <motion.div 
                            key={progress}
                            initial={{width: `${lastProgressValue}%`}}
                            animate={{width: `${progress}%`}}
                            onAnimationStart={()=> {setLastProgressValue(progress)}}
                            transition={{duration:0.75, ease:"easeInOut"}}
                            className={`bg-accent h-[5px] mb-8`}>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* <motion.div 
                key={progress}
                initial={{width: `${lastProgressValue}%`}}
                animate={{width: `${progress}%`}}
                onAnimationComplete={()=> {setLastProgressValue(progress)}}
                transition={{duration:0.75, ease:"easeInOut"}}
                className={`bg-orange h-[5px] justify-self-center items-center`}>
                </motion.div> */}

            </motion.div>
        </>
    )
}

export default Projects