
export function ChangeBranch({ to, uniqueKey, children, ...props }) {
    
    // const resolvedPath = useResolvedPath(to)
    // const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li key={uniqueKey} className={true ? "active list-none" : "list-none"}>
        </li>
    )
}


const style= "select-none xs:pl-6 md:pl-[50px] xs:text-[48px] md:text-[62px] uppercase text-black-100"
export const toolsContentBranchesPath = [
    {
        id: "/GameEngine",
        title: "Game Engine",
        icon: "iconConstant",
        color: "text-musicColor",
        style: style + " hover:text-musicColor",
    },
];

// # CONSTANTS
// export const animationFilter = "animation"
const pathGameEngine = "src/assets/toolGameEngine.json"
const pathPython = "src/assets/toolPython.json"
const pathUnity = "src/assets/toolUnity.json"


// # ICONS
import logo from "./assets/icons/logo.svg";


export {
    logo,
    pathGameEngine,
    pathPython,
    pathUnity
}