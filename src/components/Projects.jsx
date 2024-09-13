import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import MotionTranstion from "./MotionTransition.jsx"

import { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"

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
    }
]

const Projects = () => {

    const [project, setProject] = useState(projects[0])

    return (
        <>
            <MotionTranstion />

            <motion.div initial={{opacity:0}} animate={{opacity:1}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 z-50">


                <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
                        xl:justify-between order-2 xl:order-none">
                            <div>
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
                                <p className="text-white/60">{project.description}</p>
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1&& ","}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="border border-white/20"></div>

                                <div className=" flex items-center gap-4">
                                    <Link href={project.live}>
                                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                        justify-center items-center">
                                            <BsArrowUpRight className="text-white text-3xl hover:text-accent" />
                                        </div>
                                    </Link>
                                    <Link href={project.github}>
                                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                                        justify-center items-center">
                                            <BsGithub className="text-white text-3xl hover:text-accent"/>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-full xl:w-[50%]">slider</div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Projects