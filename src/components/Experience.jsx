import MotionTranstion from "./MotionTransition.jsx"
import {motion} from "framer-motion"
import { useState } from "react"
import { BsSteam } from "react-icons/bs"
import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import ProjectSlideButtons from "./ProjectSlideButtons.jsx"
import { FaC } from "react-icons/fa6"

const tabs = [ "Experience", "Education", "Skills", "About Me"]

const experience = {

    icon: "",
    title: "My experience",
    description: "asdasdad ada da asdad asdasd daa",
    items: [
    {
        company: "La Tribuna de Toledo",
        position: "Maquetación",
        duration: "June 2018 - September 2018",
        image: null,
        link: "",
    },
    {
        company: "FIRESCALE Studios",
        position: "VFX & UI designer internship",
        duration: "February 2022 - April 2022",
        image: "./riseOfTheOverlords.jpg",
        link: "",
    },
    {
        company: "Pendulo Studios",
        position: "Tools & IT",
        duration: "March 2023 - April 2024",
        image: "./tintin.jpg",
        link: "",
    },
    ],
}

const education = {

    icon: "",
    title: "My experience",
    description: "asdasdad ada da asdad asdasd daa",
    items: [
    {
        institution: "María Zambrano I.E.S.",
        degree: "Bachillerato de Ciencias y Tecnologías",
        duration: "2014-2016"
    },
    {
        institution: "Escuela de artes de Toledo",
        degree: "Ilustracion",
        duration: "2016-2018"
    },
    {
        institution: "Universitat Jaume I",
        degree: "Diseño y desarrollo de videojuegos",
        duration: "2018-222"
    },
    ],
}

const skills = {
    icon: "",
    title: "My Skills",
    description: "asdas ada da asda adsd adsd asd",
    items: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <FaReact />,
            name: "javascript",
        }
    ]
}

const about = {
    icon: "",
    title: "About me",
    description: "ada ad a adada asdad ad",
    items: [
        {
            fieldName: "hola",
            fieldValue: "ada",
        },
        {
            fieldName: "hola",
            fieldValue: "ada",
        },
        {
            fieldName: "hola",
            fieldValue: "ada",
        },
        {
            fieldName: "hola",
            fieldValue: "ada",
        },
    ]
}

const Experience = () => {

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <>
			<MotionTranstion />

            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1, transition:{delay:0.4, duration:0.4, ease:"easeIn"}}}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:px-24">

                <div className="container mx-auto flex flex-col xl:flex-row gap-[60px]">
                    <div className="flex flex-col w-full max-w-[380px] mx-auto">
                        {tabs.map((tab, index) => {
                            return <button key={index}
                            className={`border-white/20 p-3 justify-center items-center transition-all
                            inline-flex w-full tracking-wider whitespace-nowrap font-tags text-2xl font-medium uppercase
                            ${index === currentTab ? "bg-pink-20 border-b-2 border-t-2 border-r-0 border-l-0 xl:border-l-2 hover:bg-black hover:opacity-60" : 
                            "border-b-0 border-t-0 border-r-2 border-l-2 text-accent xl:border-l-0 hover:bg-white/5"}`}
                            onClick={()=>{setCurrentTab(index)}}>
                                {tab}
                            </button>
                        })}
                    </div>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        {currentTab === 0 && <div className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-5xl font-bold font-nodeTitle uppercase">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-medium">
                                    {experience.description}
                                </p>
                                <div className="h-[600px] xl:overflow-y-scroll scroll">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                style={{'--image-url': `url(${item.image})`}}
                                                className={`bg-[#232329] h-fit xl:h-[220px] py-6 px-10 flex flex-col 
                                                justify-center items-center lg:items-start gap-1 xl:bg-[image:var(--image-url)] bg-bottom xl:bg-right bg-contain bg-no-repeat`}>
                                                    <div 
                                                    className="w-full flex xl:flex-row flex-col items-center justify-center sm:justify-between">
                                                        <div>
                                                            <span className="text-accent font-tags text-2xl font-medium">
                                                                    {item.duration}
                                                                </span> 
                                                            <h3 className="text-xl min-h-[60px] font-medium
                                                            text-center lg:text-left">
                                                                    {item.position}
                                                                </h3>
                                                            <div className="flex items-center gap-3 xl:mb-0 mb-5">
                                                                <span className="w-[6px] h-[6px] bg-accent" />
                                                                <p className="text-white/60 font-medium">{item.company}</p>
                                                            </div>
                                                        </div>
                                                        {
                                                            item.image !== null && 
                                                            <div>
                                                                <img src={item.image} alt="jghvu"
                                                                className="w-[300px] xl:w-0 bg-center"/>
                                                                <div className="xl:translate-y-14 -translate-y-12 xl:translate-x-0 translate-x-80 
                                                                w-[50px] h-[50px] rounded-full bg-white/5 flex items-center
                                                                justify-center hover:text-accent text-white">
                                                                    <BsSteam className="text-3xl"/>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>}

                        {/* education */}
                        {currentTab === 1 && <div className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-5xl font-bold font-nodeTitle uppercase">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-medium">
                                    {education.description}
                                </p>
                                <div className="h-fit">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10
                                                flex flex-col justify-center items-center lg:items-start gap-1">
                                                   <span className="text-accent font-tags text-2xl font-medium">{item.duration}</span> 
                                                   <h3 className="text-xl min-h-[60px] font-medium
                                                   text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                   <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] bg-accent" />
                                                    <p className="text-white/60 font-medium">{item.institution}</p>
                                                   </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>}

                        {/* skills */}
                        {currentTab === 2 && <div className="w-full h-full">
                            <div className="flex flex-col gap-[20px]">
                                {/* <div className="flex flex-col gap-[30px] text-center xl:text-left mb-8">
                                    <h3 className="text-5xl font-bold font-nodeTitle uppercase">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-medium">
                                        {skills.description}
                                    </p>
                                </div> */}

                                <p className="font-title hover:text-accent transition-all
                                flex text-4xl font-medium uppercase justify-center">
                                    Languages
                                </p>
                                <Swiper spaceBetween={10} slidesPerView={4} loop={true} navigation={true}
                                className="h-[200px] xl:w-[1000px] w-full select-none">
                                    {skills.items.map((skill, index) => {
                                        return <SwiperSlide key={index} className="w-full">
                                        <div className="w-full h-[150px] bg-[#232329] flex
                                        items-center justify-end pb-5 flex-col gap-[12px]">
                                            <div className="text-6xl hover:text-accent
                                            transition-all duration-300"> 
                                                {skill.icon}
                                            </div>
                                            <p className="font-medium uppercase">{skill.name}</p>
                                        </div>
                                        </SwiperSlide>
                                    })}
                                    <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                    bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                                    projectSize={5}
                                    btnStyles="hover:bg-accent text-primary
                                    text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    />
                                </Swiper>

                                <p className="font-title hover:text-accent transition-all
                                flex text-4xl font-medium uppercase justify-center">
                                    Frameworks
                                </p>
                                <Swiper spaceBetween={10} slidesPerView={3} loop={true} navigation={true}
                                className="h-[200px] xl:w-[1000px] w-full select-none">
                                    {skills.items.map((skill, index) => {
                                        return <SwiperSlide key={index} className="w-full">
                                        <div className="w-full h-[150px] bg-[#232329] flex
                                        items-center justify-end pb-5 flex-col gap-[12px]">
                                            <div className="text-6xl hover:text-accent
                                            transition-all duration-300"> 
                                                {skill.icon}
                                            </div>
                                            <p className="font-medium uppercase">{skill.name}</p>
                                        </div>
                                        </SwiperSlide>
                                    })}
                                    <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                    bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                                    projectSize={5}
                                    btnStyles="hover:bg-accent text-primary
                                    text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    />
                                </Swiper>

                                <p className="font-title hover:text-accent transition-all
                                flex text-4xl font-medium uppercase justify-center">
                                    Softwares
                                </p>
                                <Swiper spaceBetween={10} slidesPerView={4} loop={true} navigation={true}
                                className="h-[200px] xl:w-[1000px] w-full select-none">
                                    {skills.items.map((skill, index) => {
                                        return <SwiperSlide key={index} className="w-full">
                                        <div className="w-full h-[150px] bg-[#232329] flex
                                        items-center justify-end pb-5 flex-col gap-[12px]">
                                            <div className="text-6xl hover:text-accent
                                            transition-all duration-300"> 
                                                {skill.icon}
                                            </div>
                                            <p className="font-medium uppercase">{skill.name}</p>
                                        </div>
                                        </SwiperSlide>
                                    })}
                                    <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                                    bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                                    projectSize={5}
                                    btnStyles="hover:bg-accent text-primary
                                    text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    />
                                </Swiper>
                            </div>
                        </div>}

                        {/* about me */}
                        {currentTab === 3 && <div className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px] select-none">
                                <h3 className="text-5xl font-bold font-nodeTitle uppercase">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-medium">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                                mx-auto xl:mx-0">
                                    {about.items.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center
                                        xl:justify-start gap-4">
                                            <span className="text-white/60 font-medium font-tags text-3xl capitalize">
                                            {item.fieldName}
                                            </span>
                                            <span className="text-xl capitalize font-medium">{item.fieldValue}</span>
                                        </li>

                                    })}
                                </ul>
                            </div>
                        </div>}
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Experience