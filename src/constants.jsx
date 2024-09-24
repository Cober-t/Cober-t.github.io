// # CONSTANTS
const pathGameEngine = "src/assets/toolGameEngine.json"
const pathPython = "src/assets/toolPython.json"
const pathUnity = "src/assets/toolUnity.json"


// # ICONS
import logo from "./assets/icons/logo.svg"
import menu from "./assets/icons/menu.svg"
import close from "./assets/icons/close.svg"
import downloadCV from "./assets/alicia.pdf"

const links = [
    {
        name:"home",
        path: "/",
    },
    {
        name:"Experiencia",
        path: "/experience",
    },
    {
        name:"Proyectos",
        path: "/projects",
    },
    {
        name:"Contacto",
        path: "/contact",
    }
]

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
            description: "Haciendo uso del algoritmo 'Perlin Noise' se desarrolló este generador de terreno para juegos \
            del tipo RTS (Real-Time Strategy). A través de la interfáz de Unity se pueden modificar todas las variables \
            de este algoritmo y generar un terreno con un solo click pudiendo ver el resultado rápidamente en tiempo real. \
            También se pretendía que, una vez generado este terreno, fuese totalmente personalizable, tanto en el arte como en \
            cuanto a la lógica del videojuego, pudiendo añadir tipos de terreno, asignar imagenes a estos o incluso \
            añadir atributos como vida si se tratase de un enemigo, dificultad de terreno para relantizar al jugador, etc. ",
            stack: [{name: "C#"}, {name: "Perlin Noise"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '02',
            title: "Sistema de diálogo",
            description: "Para este proyecto en Unity se desarrolló de una herramienta que permitiese añadir \
            texto de manera fácil y rápida. Haciendo uso de la interfaz de Unity y al patron de diseño conocido domo 'Observer' \
            se consiguió generar un objeto que funcionase como gestor de texto, que permite manejar y añadir fácilmente diálogos al juego \
            y modificar las condiciones que deben cumplirse para que ese texto aparezca.",
            stack: [{name: "C#"}, {name: "Patrones de diseño"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
    ],
    [
        {
            num: '01',
            title: "Validador de modelos y animaciones para importar a Unreal Engine",
            description: "Durante mi estancia en Pendulo Studios trabajé en herramientas encargadas de comprobar \
            que los modelos y animaciones provenientes del equipo de arte cumplieran los requisitos necesarios para su correcta \
            exportación al motor Unreal Engine. Con el desarrollo de plugins internos se consigue validar todo tipo condiciones que deben \
            cumplir los atributos de los modelos, animaciones y camaras, comprobando que se ajusten a nuestras necesidades. \
            Gracias al framework Qt dotamos a estas herramientas de apartado gráfico, permitiendo que todo el mundo \
            pueda entender y usar estas herramientas.",
            stack: [{name: "Qt"}, {name: "Pyside"}, {name: "Maya"}, {name: "Blender"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '02',
            title: "Validador de nomenclaturas",
            description: "En grandes proyectos donde los archivos y las carpetas se cuentan por miles, es importante mantenerlos organizados \
            y con una nomenclatura clara. Esta herramienta comprueba muy rápidamente y con una respuesta clara los posibles archivos \
            que no cumplan con la nomenclatura exigida y su ruta. Esta guía de nomenclatura es fácilmente modificable a través de un json, \
            lo que permite introducir estas reglas, diferenciandolas para cada nivel de subcarpeta e incluso para cada tipo de archivo dentro de estas.",
            stack: [{name: "Expresiones regulares (regex)"}, {name: "Json"}],
            image: "./myGameEngine/parallaxImage.png",
            github: "",
        },
        {
            num: '03',
            title: "Gestión de Apps a través de Telegram",
            description: "Herramienta que gestiona todas las aplicaciones que uso en mi vida diaria. Haciendo uso de una Raspberri Pi y un bot de telegram \
            se ejecuta todo el tiempo un código que recibe e interpreta los mensajes que mandemos a este bot. A través de comandos determinados \
            se crean, modifican o eliminan tareas en Todoist. En Notion podemos gestionar bases de datos como listas de la compra, gastos o multimedia, \
            ya que esta herramienta interpreta video, imágen y convierte archivos de voz en texto. También es capaz de crear notas de texto en formato \
            'Markdown' que usará la base de datos de Obsidian para crear una nueva nota con el estilo y texto que le indiquemos. Por útlimo encender \
            o apagar un ordenador desde cualquier lugar, muy útil para conexiones a traves de una VPN que también gestiona esta Raspberry Pi. \
            Esta herramienta puede expandirse a cualquier aplicación que tenga API con python.",
            stack: [{name: "RaspberryPi"}, {name: "Todoist"}, {name: "Notion"}, {name: "Obsidian"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
        {
            num: '04',
            title: "Launcher para proyectos del motor de videojuegos",
            description: "Herramienta de gestion de los proyectos y versiones de mi propio motor de videojuegos. Con la ayuda de un archivo json fácilmente editable \
            el launcher lee toda la carpeta de proyectos con miniaturas incluidas y, gracias a Qt, nos lo muestra todo visualmente. Al crear un nuevo proyecto no solo \
            actualiza el json si no que también prepara todo el entorno de desarrollo, crea las carpetas y archivos con el código necesario poder trabajar con el motor \
            nada más se haya abierto, al igual que funcionan otros populares motores como Unreal Engine, Unity o Godot.",
            stack: [{name: "Qt"}, {name: "UI"}],
            image: "./unity/parallaxImage.jpg",
            github: "",
        },
    ],
]
const projectsName = ["Game Engine", "Unity", "Python"]

const tabs = [ "Experiencia", "Estudios", "Habilidades", "Sobre mi"]

const experience = {
    icon: "",
    title: "Mi Experiencia",
    description: "asdasdad ada da asdad asdasd daa",
    items: [
    {
        company: "La Tribuna de Toledo",
        position: "Maquetación",
        duration: "June 2018 - September 2018",
        image: undefined,
        link: "",
    },
    {
        company: "FIRESCALE Studios",
        position: "VFX & UI designer internship",
        duration: "February 2022 - April 2022",
        image: "./riseOfTheOverlords.jpg",
        link: "https://store.steampowered.com/app/1162140/Rise_Of_The_Overlords/",
    },
    {
        company: "Pendulo Studios",
        position: "Tools & IT",
        duration: "March 2023 - April 2024",
        image: "./tintin.jpg",
        link: "https://store.steampowered.com/app/2125090/Tintin_Reporter__Los_Cigarros_del_Faraon/?l=spanish",
    },
    ],
}

const education = {

    icon: "",
    title: "Mis Estudios",
    description: "asdasdad ada da asdad asdasd daa",
    items: [
    {
        institution: "María Zambrano I.E.S.",
        degree: "Bachillerato de Ciencias y Tecnologías",
        duration: "2014-2016"
    },
    {
        institution: "Escuela de artes de Toledo",
        degree: "Ilustración",
        duration: "2016-2018"
    },
    {
        institution: "Universitat Jaume I",
        degree: "Diseño y desarrollo de videojuegos",
        duration: "2018-222"
    },
    ],
}

import { FaReact, FaPython } from "react-icons/fa"
import { BsUnity } from "react-icons/bs"
import { SiAndroidstudio, SiAutodeskmaya, SiCsharp, SiCplusplus, SiDotnet,
    SiGodotengine, SiKotlin, SiQt, SiUnrealengine } from "react-icons/si"
import { DiIllustrator, DiJavascript, DiPhotoshop } from "react-icons/di"
import { BiLogoBlender } from "react-icons/bi"

const skills = {
    icon: "",
    title: "Mis Habilidades",
    description: "",
    languages: [
        {
            icon: <FaPython />,
            name: "Python",
            level: "Avanzado",
        },
        {
            icon: <SiCplusplus  />,
            name: "C++",
            level: "Avanzado",
        },
        {
            icon: <SiCsharp />,
            name: "C#",
            level: "Intermedio",
        },
        {
            icon: <DiJavascript />,
            name: "JavaScript",
            level: "Princiante",
        },
        {
            icon: <SiKotlin />,
            name: "Kotlin",
            level: "Princiante",
        }
    ],
    frameworks: [
        {
            icon: <FaReact />,
            name: "React Native",
            level: "Advanced",
        },
        {
            icon: <SiQt />,
            name: "Qt",
            level: "Intermedio",
        },
        {
            icon: <SiDotnet />,
            name: ".Net",
            level: "Intermedio",
        }
    ],
    softwares: [
        {
            icon: <SiUnrealengine />,
            name: "Unreal Engine",
            level: "Avanzado",
        },
        {
            icon: <SiGodotengine />,
            name: "Unreal Engine",
            level: "Intermedio",
        },
        {
            icon: <BsUnity />,
            name: "Unity",
            level: "Avanzado",
        },
        {
            icon: <DiPhotoshop />,
            name: "Photoshop",
            level: "Intermedio",
        },
        {
            icon: <DiIllustrator />,
            name: "Illustrator",
            level: "Intermedio",
        },
        {
            icon: <SiAndroidstudio />,
            name: "Android Studio",
            level: "Intermedio",
        },
        {
            icon: <SiAutodeskmaya />,
            name: "Maya",
            level: "Intermedio",
        },
        {
            icon: <BiLogoBlender />,
            name: "Blender",
            level: "Avanzado",
        },
    ]
}

const about = {
    icon: "",
    title: "Sobre mi",
    description: "Me considero una persona apasionada, perfeccionista y que \
    busco siempre la crítica, la cual considero es la mejor forma de mejorar.\
    Me encantan los nuevos retos, y los afronto siempre con ganas de aprender y \
    de hacerlo lo mejor posible.",
    items: [
        // {
        //     fieldName: "Linkedin",
        //     fieldValue: "www.linkedin.com/in/jorge-tejado-lópez",
        // },
        {
            fieldName: "Nombre",
            fieldValue: "Jorge Tejado López",
        },
        {
            fieldName: "Idiomas",
            fieldValue: "Español, Ingles",
        },
        {
            fieldName: "Email",
            fieldValue: "jorgetejadolopez@gmail.com",
        },
    ]
}


export {
    logo,
    menu,
    close,
    downloadCV,

    about, experience, education, skills, tabs,

    projects,
    projectsName,

    links,
    pathGameEngine,
    pathPython,
    pathUnity
}