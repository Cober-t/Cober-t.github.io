import { useEffect, useState } from "react";
import { styles } from "../styles"
import { useLocation } from "react-router-dom";
import ToolNodes from './ToolNodes.jsx'


export default function SplashScreen({ splashImage, commits, name, reference }) {

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


	function SplashTitle({ prop }) {
		return (
			<>
			<div style={{'--image-url': `url(${splashImage})`}}
			className={
				`absolute bg-[image:var(--image-url)] text-transparent
				${styles.splashScreenBackgroundStyle}`
			}>
				<p className={`${prop}`}>
					{`${name}`}
				</p>
			</div>

			<ToolNodes commits={commits}/>
			</>
		)
	}

	return (
	<>
		<div className={`${styles.coreSplashScreen}`}
			ref={reference}>
			<SplashTitle prop={`${styles.splashScreenText} ${titleFontSize}`}/>
			{/* <SplashTitle prop={`text-stroke ${styles.splashScreenText} ${titleFontSize}`}/> */}
		</div>	
		
		{/* Tranparent background Image / Gif */}
		<div className='z-30 relative flex flex-row h-screen w-full top-1/2 bg-black'>

			<div style={{'--image-url': `url(${splashImage})`}}
			className={`absolute bg-[image:var(--image-url)]
			h-screen w-full flex bg-center bg-cover bg-no-repeat`}>
				<div className='flex flex-row w-full h-screen bg-toolBGColor opacity-90'/>
			</div>
		</div>
	</>
	)
}