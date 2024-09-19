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
            num: '00',
            title: "Core",
            description: "A la hora de comenzar un proyecto como el de un motor de videojuegos \
            existen una serie de características fundamentales que beneficia la creción de cualquier videojuego.\
            A continuación explico el desarrollo de dichas características a través de proyectos terminados.",
            stack: [{name: "C++"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '01',
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
            num: '02',
            title: "Sistema de 'logging'",
            description: "Imprescindible para comprobar si el funcionamiento es correcto \
            y poder ver la respuesta de eventos y de nuestras interacciones con el motor. \
            Los mensajes se almacenan y se eliminan de manera eficiente en memoria.",
            stack: [{name: "Debug"}, {name: "spdlog"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '03',
            title: "Editor",
            description: "Un editor visual para el motor supone una drástica mejora, permitiendo \
            la creación de herramientas que aceleran y facilitan el de desarrollo de videjuegos.",
            stack: [{name: "ImGui"}, {name: "Immediate Mode"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '04',
            title: "API para los gráficos",
            description: "Al igual que sucede con la ventana, es importante crear una capa que nos permita \
            mostrar gráficos en ella. Cada sistema operativo gestiona los graficos de diferente forma, pero el motor \
            debe estar preparado para que no sea dificil añadir más capacidades gráficas en un futuro. \
            El motor usa OpenGL porque funciona en un gran número de plataformas diferentes.",
            stack: [{name: "OpenGL"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '05',
            title: "Escena de juego y Sistema de Entidades",
            description: "A la hora de diseñar la manera en la que el motor va a gestionar los elementos del juego \
            se ha optado por un sistema de entidades. Todo elemento en el juego (entidad) va a tener una lista \
            de componentes: posición, físicas, texturas, etc. que a su vez forman sistemas propios. \
            Una escena del juego recorre estos sistermas y a su vez todas las entidades que pertencen a estos, \
            haciendo que el procesamiento sea muy rápido al evitar repeticiones innecesarias y busquedas en memoria muy largas",
            stack: [{name: "entt"}, {name: "Gestión de memoria"}, {name: "Estructuras de datos"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '06',
            title: "Scripting nativo",
            description: "Gracias a una correcta configuración del proyecto y a las librerías dinámicas, con este sistema \
            podremos programar la lógica del videojuego sin tener que recompilar todo el motor, pudiendo hacer \
            cambios y desarrollar el juego mientras el motor está en ejecución. Aunque no es una característica imprescindible \
            si que facilita enormenente el desarrollo, y es sistema que podemos encontrar en todos los motores populares",
            stack: [{name: "C++"}, {name: "Dll"}, {name: "Scripting Nativo"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '07',
            title: "Launcher para el motor y proyectos",
            description: "Al igual que otros populares motores de videojuegos, un launcher visual facilita la interacción \
            con el motor, sus posibles versiones y la creación y edición de proyectos en desarrollo",
            stack: [{name: "Qt"}, {name: "Python"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '1',
            title: "Pong",
            description: "Para poder desarrollar este primer proyecto era necesario implementar nuevas funcionalidades en el motor \
            que usaran como base para los siguientes, estas son: simulación de físicas en 2D para la colisión de \
            la pelota con las palas de los jugadores, un sistema de audio que permita reproducir diferentes sonidos cuando \
            ciertos eventos ocurran y un sistema de cámaras que permita modificar facilmente aspectos como la resolución, el zoom, \
            la posición y ángulo de la cámara o la relación de aspecto",
            stack: [{name: "box2d"}, {name: "miniaudio"}, {name: "Cámara virtual"}],
            image: "./myGameEngine/Pong.png",
            github: "",
        },
        {
            num: '2',
            title: "Flappy Bird",
            description: "En este proyecto se implementa la carga de texturas, con las que a su vez \
            podremos dibujar texto en pantalla. La serialización de datos, que permite guardar y cargar escenas, \
            imprescindible para la persistencia de datos en un videojuego y para evitar empezar desde una escena vacía \
            en el desarrollo de un proyecto. Otra sustancial mejora que nos permite la serialización de datos es \
            la creción de 'prefabs', entidades completas que podremos guardar \
            editar, duplicar, siempre atendiendo al uso de memoria y las estructuras de datos.",
            stack: [{name: "Texturas y texto"}, {name: "Serialización de datos"}, {name: "Prefabs"}],
            image: "./myGameEngine/FlappyBird.png",
            github: "",
        },
        {
            num: '3',
            title: "Breakout",
            description: "Este proyecto hace un uso intensivo de las texturas, y para gestionarlas de manera correcta existen técnicas \
            muy utilizadas como la del 'atlas de textura': una única textura agrupará todas las que se usen en el juego, \
            disponiendo de ellas a través de índices o coordenadas. Todas se dibujan a la vez, ahorrando procesamiento \
            y memoria gráfica, lo que nos permite desarrollar herramientas como el sistema de partículas, \
            con el que podremos editar los atributos de las miles de texturas que se van a dibujar",
            stack: [{name: "Atlas de texturas"}, {name: "Sistema de partículas"}, {name: "Flujo jugable"}],
            image: "./myGameEngine/Breakout.png",
            github: "",
        },
    ],
    [
        {
            num: '01',
            title: "Generador de terreno aleatorio",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '02',
            title: "Sistema de diálogo",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "React"}, {name: "C++"}, {name: "Particle System"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
    ],
    [
        {
            num: '01',
            title: "Validador de modelos y animaciones para importar a Unreal Engine",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "Qt"}, {name: "Pyside"}, {name: "Maya"}, {name: "Blender"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '02',
            title: "Servidor para validar nomenclaturas de archivos",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "Redes"}, {name: "Expresiones regulares (regex)"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '03',
            title: "Gestión de Apps a través de Telegram",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "RaspberryPi"}, {name: "Todoist"}, {name: "Notion"}, {name: "Obsidian"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            title: "Launcher para proyectos del motor de videojuegos",
            description: "asdassaddd asda dasda adas asd asd",
            stack: [{name: "Qt"}, {name: "UI"}],
            image: "./unity/parallaxImage.jpg",
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

        if (swiper.activeIndex === 0)
            setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
        else if (swiper.activeIndex === projectSize - 1)
            setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
        else
            setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)

        setSlideIndex(swiper.activeIndex);
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
                                <p className="text-white/60 font-semibold text-left font-nodeDescription">
                                    {project.description}
                                </p>
                                {/* stack */}
                                <ul className="flex gap-4">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-2xl font-regular tracking-wider font-tags text-accent">
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
                            className={`bg-accent h-[7px] mb-8`}>
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