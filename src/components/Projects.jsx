import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import MotionTranstion from "./MotionTransition.jsx"

import { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import ProjectSlideButtons from "./ProjectSlideButtons.jsx"
import { Link } from "react-router-dom"
import "swiper/css"

const projects = [
    {
        num: '01',
        category: 'frontend',
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
]

const Projects = () => {

    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {

        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
    }

    return (
        <>
            <MotionTranstion />

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease:"easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 px-12 xl:px-24 z-50">

                <div className="container mx-auto select-none">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                        xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px] h-[50%]"> 
                                {/* outline num */}
                                <div className="text-8xl leading-none font-extrabold relative text-stroke text-backgroundColor">
                                    {project.num}
                                    <span aria-hidden="true" className="text-outline left-0 absolute">{project.num}</span>
                                </div>

                                {/* project category */}
                                <h2 className="text-[42px] font-bold leading-none text-white
                                hover:text-accent transition-all duration-500 capitalize">
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
                                <div className=" flex items-center gap-4">
                                    <Link href={project.github}>
                                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                        justify-center items-center">
                                            <BsGithub className="text-white text-3xl hover:text-accent"/>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="w-full xl:w-[50%]">
                            <Swiper spaceBetween={10} slidesPerView={1} onSlideChange={handleSlideChange}
                            className="xl:h-[400px] mb-12">
                                {projects.map((project, index)=> {
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
                                <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                                xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary 
                                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Projects