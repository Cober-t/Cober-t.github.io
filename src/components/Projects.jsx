import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import MotionTranstion from "./MotionTransition.jsx"

import { createContext, useState } from "react"
import { BsGithub } from "react-icons/bs"
import ProjectSlideButtons from "./ProjectSlideButtons.jsx"
import { Link } from "react-router-dom"
import "swiper/css"

export const ProjectContext = createContext()

const projects = [
    [
        {
            num: '01',
            category: 'UNITY',
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
            category: 'frontend',
            title: "project 3",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            category: 'frontend',
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
            category: 'GAME ENGINE',
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
            category: 'frontend',
            title: "project 3",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            category: 'frontend',
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
            category: 'PYTHON',
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
            category: 'frontend',
            title: "project 3",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            category: 'frontend',
            title: "project 4",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
    ],
]
const projectsName = ["Unity", "Game Engine", "Python"]


const Projects = () => {

    const [project, setProject] = useState(projects[0][0])
    const [progress, setProgress] = useState(100/projects[0].length)
    const [lastProgressValue, setLastProgressValue] = useState(100/projects[0].length)
    const [currentProject, setCurrentProject] = useState(0)
    const [swiper, setSwiper] = useState(null)


    const slideTo = (index) => swiper.slideTo(index)

    const handleSlideChange = (swiper) => {

        const currentIndex = swiper.activeIndex;
        setProject(projects[currentProject][currentIndex])
    }

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
                            <div className="w-full items-center justify-center select-none"
                            onClick={() => {slideTo(0); setProgress(100/projects[index].length)}}>
                                <p className={`border-white/20 uppercase pt-2.5 pb-2.5 justify-center flex transition-all
                                ${currentProject === index ? "bg-pink-20 border-l-2 border-t-2 border-b-0 border-r-2" : 
                                    "border-l-0 border-t-0 border-b-2 border-r-0 hover:bg-white/5"}`}
                                onClick={()=> {setCurrentProject(index); setProject(projects[index][0])}}>
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
                                <div className="text-8xl leading-none font-bold relative text-backgroundColor
                                text-stroke transition-all duration-300 w-fit">
                                    {project.num}
                                    <span aria-hidden="true" 
                                    className="text-outline left-0 absolute">
                                        {project.num}
                                    </span>
                                </div>

                                {/* project category */}
                                <h2 className="text-[42px] font-bold leading-none text-white
                                hover:text-accent transition-all duration-300 capitalize">
                                    {project.category} project
                                </h2>
                                {/* project description */}
                                <p className="text-white/60">{project.description}</p>
                                {/* stack */}
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1&& " ,"}
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
                            <Swiper spaceBetween={10} loop={true} navigation={true} slidesPerView={1} onSlideChange={handleSlideChange}
                            onSwiper={setSwiper} 
                            className="xl:h-[400px]">
                                {projects[currentProject].map((project, index)=> {
                                    return (
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-full relative flex justify-center
                                            items-center bg-pink-50/20">
                                                <div className="relative flex w-full h-full">
                                                    <img src={project.image} alt=""
                                                    className="object-cover"/>


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
                            className={`bg-orange h-[5px] mb-8`}>
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