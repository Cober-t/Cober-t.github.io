import React, { useState } from "react"
import { menu, close } from "../constants.jsx"
import { motion } from "framer-motion"
import { links } from "../constants.jsx"
import IconSVG from "./IconSVG.jsx"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);


  return (
    <>
    <div className='xl:hidden fixed h-screen flex justify-end items-start z-40'>


        <IconSVG path={toggle ? close : menu} fill="red" 
        class='w-[28px] h-[28px] object-contain z-50'
        onClick={() => setToggle(!toggle)}
        />

        { toggle && 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.2, ease:"easeIn"}}
        className={`bg-backgroundColor h-[100vh] w-[60vw] flex fixed right-0 top-0 z-40 text-white`}
        >
          HOLA
        {/* <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {links.map((nav, index) => (
            <li
                key={index}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-black" : "text-secondary"
                }`}
                onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
                }}
            >
                <a href={`#${index}`}>{nav.title}</a>
            </li>
            ))}
        </ul> */}
        </motion.div>}

    </div>

    {toggle && 
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:0.75}}
    transition={{duration:0.2, delay:0.15}}
    className="flex h-screen w-full bg-black fixed top-0 left-0 z-20">
    </motion.div>}np

    </>

  );
};

export default Navbar;