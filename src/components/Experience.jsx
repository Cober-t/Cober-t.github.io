import MotionTranstion from "./MotionTransition.jsx"
import {motion} from "framer-motion"
import { useState } from "react"
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"

const tabs = [ "Experience", "Education", "Skills", "About Me"]

const experience = {

    icon: "",
    title: "My experience",
    description: "asdasdad ada da asdad asdasd daa",
    items: [
    {
        company: "La Tribuna de Toledo",
        position: "Maquetación",
        duration: "June 2018 - September 2018"
    },
    {
        company: "PenduloStudios2",
        position: "Tools & IT",
        duration: "March 2023 - April 2024"
    },
    {
        company: "La Tribuna de Toledo",
        position: "Maquetación",
        duration: "June 2018 - September 2018"
    },
    {
        company: "PenduloStudios2",
        position: "Tools & IT",
        duration: "March 2023 - April 2024"
    },
    {
        company: "La Tribuna de Toledo",
        position: "Maquetación",
        duration: "June 2018 - September 2018"
    },
    {
        company: "PenduloStudios2",
        position: "Tools & IT",
        duration: "March 2023 - April 2024"
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
                    <div className="flex flex-col w-full max-w-[380px] mx-auto gap-6">
                        {tabs.map((tab, index) => {
                            return <button key={index}
                            className={`rounded-xl p-3 justify-center items-center transition-all
                            inline-flex w-full text-base whitespace-nowrap font-medium
                            ${index === currentTab ? 
                            "bg-accent text-backgroundColor font-bold shadow-sm" : 
                            "opacity-50 text-white bg-[#27272c]"}`}
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
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <div className="h-[400px] xl:overflow-y-scroll scroll">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1">
                                                   <span className="text-accent">{item.duration}</span> 
                                                   <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                   text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                   <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                    <p className="text-white/60">{item.company}</p>
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
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <div className="h-[400px] xl:overflow-y-scroll scroll">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                                flex flex-col justify-center items-center lg:items-start gap-1">
                                                   <span className="text-accent">{item.duration}</span> 
                                                   <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                   text-center lg:text-left">
                                                        {item.degree}
                                                    </h3>
                                                   <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                    <p className="text-white/60">{item.institution}</p>
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
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>

                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                                items-center justify-center text-center">
                                    {skills.items.map((skill, index) => {
                                        return <li key={index}>
                                            <div className="w-full h-[150px] bg-[#232329] rounded-xl flex
                                            items-center justify-end pb-5 flex-col gap-[12px]">
                                                <div className="text-6xl hover:text-accent
                                                transition-all duration-300"> 
                                                    {skill.icon} 
                                                </div>
                                                <p className="capitalize">{skill.name}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>}

                        {/* about me */}
                        {currentTab === 3 && <div className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px] select-none">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                                mx-auto xl:mx-0">
                                    {about.items.map((item, index) => {
                                        return <li key={index} className="flex items-center justify-center
                                        xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
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