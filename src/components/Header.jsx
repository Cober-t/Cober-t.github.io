import { Link } from "react-router-dom"
import Nav from "./Nav.jsx"
import MobileNav from "./MobileNav.jsx"

const Header = () => {

    return <header className="py-8 xl:py-12 text-white bg-pink-20 overflow-hidden">
		<div className="container mx-auto flex justify-between items-center
		font-['Tahoma'] xs:text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.75vw]">
			<Link to="/">
			<h1 className="text-4xl font-semibold">
					Jorge <span className="text-accent">Portfolio</span>
				</h1>
			</Link>

			<div className="hidden xl:flex items-center gap-8">
				<Nav />
			</div>

			<div className="xl:hidden">
				<MobileNav />
			</div>
		</div>
    </header>
}

export default Header