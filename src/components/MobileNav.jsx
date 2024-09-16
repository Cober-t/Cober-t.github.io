import React, { useState } from "react"
import { menu, close } from "../constants.jsx"
import { motion } from "framer-motion"
import { links } from "../constants.jsx"
import IconSVG from "./IconSVG.jsx"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  
  const location = useLocation()
  const [toggle, setToggle] = useState(false);

  function NavColor(path) {
    let color = "text-white hover:text-red-500"
  
    if (window.location.pathname === path)
      color = "text-orange hover:text-red-500 text-accent border-b-2 border-accent"
    
    return `${color} capitalize font-medium hover:text-accent transition-all`
  }

  return (
    <>
    <div className='xl:hidden fixed h-screen flex justify-end items-start z-40 select-none'>

        <IconSVG path={toggle ? close : menu} fill="red" 
        class='w-[28px] h-[28px] justify-end object-contain mr-10 z-50 text-accent -translate-y-2.5'
        onClick={() => setToggle(!toggle)}
        />

        { toggle && 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.2, ease:"easeIn"}}
        className={`bg-backgroundColor h-[100vh] w-[60vw] flex fixed right-0 top-0 
        z-40 text-white xl:hidden`}
        >
          <div className="flex flex-col items-center justify-center gap-y-8 w-full h-full 
          uppercase list-none">
            <div>
              JORGE <span className="text-accent">PORTFOLIO</span>
            </div>
            {links.map((link, index) => (
            <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                location.pathname === link.path ? "text-black" : "text-secondary"
                }`}
                onClick={() => {
                setToggle(!toggle);
                }}
            >
                <Link to={link.path} key={index} className={`${NavColor(link.path)}`}>
                  <h1>{link.name}</h1>
                </Link>
            </li>
            ))}
          </div>
        </motion.div> || 
        !toggle && 
        <motion.div
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{duration:0.2, ease:"easeIn"}}
        className={`bg-backgroundColor h-[100vh] w-[60vw] flex fixed right-0 top-0
        z-40 text-white ${toggle === false ? "hidden" : "display"}`}
        />}

    </div>

    {toggle && 
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:0.75}}
    transition={{duration:0.2, delay:0.15}}
    className={`flex h-screen w-full bg-black fixed top-0 left-0 z-20 ${toggle === false ? "hidden" : "display"}`}
    onClick={()=> toggle === true && setToggle(false)} />
    || !toggle && 
    <motion.div
    initial={{opacity:0.75}}
    animate={{opacity:0.0}}
    transition={{duration:0.2, delay:0.15}}
    className={`flex h-screen w-full bg-black fixed top-0 left-0 z-20 ${toggle === false ? "hidden" : "display"}`}/>
    }

    </>

  );
};

export default Navbar;