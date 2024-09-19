import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { links } from "../constants.jsx"


const Nav = () => {

    function NavColor(path) {
      let color = "text-white hover:text-red-500"
    
      if (window.location.pathname === path)
        color = "text-orange hover:text-red-500 text-accent border-b-2 border-accent"
      
      return `${color} capitalize font-medium text-xl hover:text-accent transition-all`
	  }

    const [scrolled, setScrolled] = useState(false);
  
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

    
    return <nav className={`flex gap-8 flex-row ${scrolled ? "bg-primary" : "bg-transparent"}`}>
        {links.map((link, index)=> {
            return (
            <Link to={link.path} key={index} className={`${NavColor(link.path)}`}>
                <h1>{link.name}</h1>
            </Link>
            )
        })}
    </nav>
}

export default Nav