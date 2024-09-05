import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles"
import { ToolContext } from "./ToolBranch";


export default function SplashScreen({ splashImage, name, reference }) {

	const { loadData } = useContext(ToolContext)
	const location = useLocation()
	const [titleFontSize, setTitleFontSize] = useState(`text-[30vw]`)

	useEffect(function() {
		if (location.pathname === '/')
			setTitleFontSize('xs:text-[40vw] sm:text-[40vw] md:text-[36vw] xl:text-[32vw]')
		else if (location.pathname === '/unity')
			setTitleFontSize('text-[65vw]')
		else if (location.pathname === '/python')
			setTitleFontSize('text-[55vw]')
	},[location])

	function NavColor(path) {
		let color = "bg-white hover:bg-gray-700"
		let currentPath = window.location.href
		let lastSlashIndex = currentPath.lastIndexOf("/")

		if (currentPath.substring(lastSlashIndex, currentPath.length) === path)
			color = "bg-orange hover:bg-red-700"
		
		return color
	}

	function SplashTitle({ prop }) {
		return (
			<div style={{'--image-url': `url(${splashImage})`}}
			className={
				`absolute bg-[image:var(--image-url)] text-transparent
				${styles.splashScreenBackgroundStyle}`
			}>
				<p className={`${prop}`}>
					{`${name}`}
				</p>
			</div>
		)
	}

	return (
	<>
		<div className={`${styles.coreSplashScreen}`}
			ref={reference}>
			<SplashTitle prop={`${styles.splashScreenText} ${titleFontSize}`}/>
			{/* <SplashTitle prop={`text-stroke ${styles.splashScreenText} ${titleFontSize}`}/> */}
		</div>	

		
		{/* NAV BAR */}
		<div className={`${styles.navBar}`}>
			<Link onClick={loadData} to="/" className={`${NavColor("/")} ${styles.navCircle}`}/>
			<Link onClick={loadData} to="/unity" className={`${NavColor("/unity")} ${styles.navCircle}`}/>
			<Link onClick={loadData} to="/python" className={`${NavColor("/python")} ${styles.navCircle}`}/>
		</div>
		
		{/* Tranparent background Image / Gif */}
		<div className='z-40 relative flex flex-row h-screen w-full top-1/2 bg-black'>

			<div style={{'--image-url': `url(${splashImage})`}}
			className={`absolute bg-[image:var(--image-url)]
			h-screen w-full flex bg-center bg-cover bg-no-repeat`}>
				<div className='flex flex-row w-full h-screen bg-toolBGColor opacity-90'/>
			</div>
		</div>
	</>
	)
}