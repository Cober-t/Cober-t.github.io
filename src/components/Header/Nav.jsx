import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { links } from "../../constants.jsx"


const Nav = () => {

    function NavColor(path) {
      let color = "text-white hover:accent"
    
      if (window.location.pathname === path)
        color = "hover:text-darkOrange text-accent border-b-2 border-accent hover:border-darkOrange"
      
      return `${color} capitalize text-xl hover:text-accent transition-all`
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

    
    return <nav className={`flex gap-16 flex-row select-none ${scrolled ? "bg-primary" : "bg-transparent"}`}>
        {links.map((link, index)=> {
            return (
            <Link to={link.path} key={index} className={`${NavColor(link.path)}`}>
                <h1 className="text-4xl font-thin font-tags uppercase">{link.name}</h1>
            </Link>
            )
        })}
    </nav>
}

export default Nav