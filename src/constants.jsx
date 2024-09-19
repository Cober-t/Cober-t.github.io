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
        name:"experience",
        path: "/experience",
    },
    {
        name:"projects",
        path: "/projects",
    },
    {
        name:"contact",
        path: "/contact",
    }
]


export {
    logo,
    menu,
    close,
    downloadCV,
    links,
    pathGameEngine,
    pathPython,
    pathUnity
}