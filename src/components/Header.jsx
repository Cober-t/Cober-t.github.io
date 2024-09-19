import { Link } from "react-router-dom"
import Nav from "./Nav.jsx"
import MobileNav from "./MobileNav.jsx"

const Header = () => {

    return <header className="py-8 xl:py-12 text-white overflow-hidden z-50">
		<div className="px-[5vw] flex justify-between items-center
		font-['Tahoma'] xs:text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.75vw]">
			<Link to="/">
			<h1 className="text-6xl font-semibold font-tags">
				Portfolio <span className="text-accent text-xl">■</span>
			</h1>
			</Link>

			<div className="hidden xl:flex items-center">
				<Nav />
			</div>

			<div className="xl:hidden">
				<MobileNav />
			</div>
		</div>
    </header>
}

export default Header