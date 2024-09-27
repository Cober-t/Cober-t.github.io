import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import MotionTranstion from "../MotionTransition.jsx"

import { useEffect, useState } from "react"
import { BsGithub, BsSteam } from "react-icons/bs"
import ProjectSlideButtons from "./ProjectSlideButtons.jsx"
import { Link } from "react-router-dom"
import "swiper/css"
import { projects, projectsName } from "../../constants.jsx"



const Projects = () => {

    const [project, setProject] = useState(projects[0][0])
    const [progress, setProgress] = useState(100/projects[0].length)
    const [lastProgressValue, setLastProgressValue] = useState(100/projects[0].length)
    const [currentProject, setCurrentProject] = useState(0)
    const [swiper, setSwiper] = useState(null)


    const slideTo = (index) => swiper.slideTo(index)

    const handleSlideChange = (swiper) => {

        const projectSize = projects[currentProject].length
   
        setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
        setProject(projects[currentProject][swiper.activeIndex])
    }

    useEffect(function() {

        setProject(projects[currentProject][0])
        setProgress(100/projects[currentProject].length)

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
                                <p className={`border-white/20 font-tags tracking-wider text-[32px] font-light
                                uppercase pt-2.5 pb-2.5 justify-center flex transition-all
                                ${currentProject === index ? "bg-pink-20 border-l-2 border-t-2 border-b-0 border-r-2" : 
                                    "border-l-0 border-t-0 border-b-2 border-r-0 text-accent hover:bg-white/5"}`}
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
                                <div className="text-8xl relative w-fit font-['Ignite']
                                text-stroke transition-all duration-300">
                                    {project.num}
                                    <span aria-hidden="true" 
                                    className="text-outline left-0 absolute text-backgroundColor font-['Ignite']">
                                        {project.num}
                                    </span>
                                </div>

                                {/* project category */}
                                <h2 className="text-[62px] font-tags font-bold leading-none text-white
                                hover:text-accent transition-all duration-300">
                                    {project.title}
                                </h2>
                                {/* project description */}
                                <p className="text-white/60 font-semibold text-left font-nodeDescription
                                whitespace-pre-line">
                                    {project.description}
                                </p>
                                {/* stack */}
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-3xl font-regular tracking-wider font-tags text-accent italic">
                                                #{item.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                                {/* border */}
                                <div className="border border-white/20"></div>
                                {/* buttons */}
                                <div className=" flex items-start gap-4 mb-[20px]">
                                    <Link href={project.github}>
                                        {
                                        project.github !== undefined &&
                                        <div className="w-[50px] h-[50px] rounded-full bg-white/5 flex
                                        justify-center items-center hover:text-accent text-white">
                                            <BsGithub className="text-3xl"/>
                                        </div>
                                        }
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full xl:w-[50%] mt-10">
                            <Swiper spaceBetween={10} slidesPerView={1} onSlideChange={handleSlideChange}
                            onSwiper={setSwiper} 
                            className="xl:h-[400px]">
                                {projects[currentProject].map((project, index)=> {
                                    return (
                                        <SwiperSlide key={index} className="w-full">
                                            { project.image !== undefined &&
                                                <div style={{'--image-url': `url(${project.image})`}}
                                                className={`xl:h-full md:h-[50vh] sm:h-[30vh] h-[25vh] 
                                                    bg-[image:var(--image-url)] bg-center bg-no-repeat bg-contain`}/>
                                                ||
                                                project.icon
                                            }
                                        </SwiperSlide>
                                    )
                                })}
                                <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                                xl:w-max xl:justify-none"
                                projectSize={projects[currentProject].length}
                                btnStyles="bg-accent hover:bg-accent-hover text-primary
                                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                />
                            </Swiper>
                            <motion.div 
                            key={progress}
                            initial={{width: `${lastProgressValue}%`}}
                            animate={{width: `${progress}%`}}
                            onAnimationStart={()=> {setLastProgressValue(progress)}}
                            transition={{duration:0.75, ease:"easeInOut"}}
                            className={`bg-accent h-[7px] mb-8`}>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Projects