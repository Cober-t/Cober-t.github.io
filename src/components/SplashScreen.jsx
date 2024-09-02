import { useContext } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles"
import { ToolContext } from "./ToolBranch";


export default function SplashScreen({ splashImage, name, reference }) {

	const { loadData } = useContext(ToolContext)

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
				`absolute bg-[image:var(--image-url)] 
				${styles.splashScreenBackgroundStyle} 
				${styles.splashScreenTitle}`
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
			<SplashTitle prop={`${styles.splashScreenText}`}/>
			<SplashTitle prop={`text-stroke ${styles.splashScreenText}`}/>
		</div>	

		{/* NAV BAR */}
		<div className={`${styles.navBar}`}>
			<Link onClick={loadData} to="/" className={`${NavColor("/")} ${styles.navCircle}`}/>
			<Link onClick={loadData} to="/unity" className={`${NavColor("/unity")} ${styles.navCircle}`}/>
			<Link onClick={loadData} to="/python" className={`${NavColor("/python")} ${styles.navCircle}`}/>
		</div>
		
		
		{/* Tranparent background Image / Gif */}
		<div className='z-20 relative flex flex-row h-screen w-full
			top-1/2 left-1/2 bg-orange -translate-x-1/2'>

			<div style={{'--image-url': `url(${splashImage})`}}
			className={`absolute bg-[image:var(--image-url)] ${styles.splashScreenBackgroundStyle}`}>
				<div className='flex flex-row w-[100vw] h-[100vh] bg-toolBGColor opacity-85'/>
			</div>
		</div>
	</>
	)
}