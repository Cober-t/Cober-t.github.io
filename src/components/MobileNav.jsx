import React, { useEffect, useState } from "react"
import { menu, close } from "../assets"
import { motion } from "framer-motion";


const links = [
    {
        name:"home",
        path: "/",
    },
    {
        name:"experience",
        path: "/python",
    },
    {
        name:"projects",
        path: "/unity",
    },
    {
        name:"contact",
        path: "/unity",
    }
]

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className='xl:hidden fixed h-screen flex justify-end items-start z-40'>
        <img
        src={toggle ? close : menu}
        alt='menu' className='w-[28px] h-[28px] object-contain z-40' onClick={() => setToggle(!toggle)}/>

        { toggle && 
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:0.5}}
        transition={{duration:0.2, ease:"easeIn"}}
        className={`bg-pink-50 h-[100vh] w-[60vw] flex fixed right-0 top-0`}
        >
        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
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
        </ul>
        </motion.div>}
    </div>

    {toggle && 
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:0.75}}
    transition={{duration:0.2}}
    className="flex h-screen w-full bg-black fixed top-0 left-0 z-30">
    </motion.div>}
    </>

  );
};

export default Navbar;