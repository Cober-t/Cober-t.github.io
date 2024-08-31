import { useContext } from "react"
import { Link } from "react-router-dom";
import '../style.css'


export default function SplashScreen({ splashImage, name, reference }) {

	function NavColor(path) {
		let color = "bg-white hover:bg-gray-700"
		let currentPath = window.location.href
		let lastSlashIndex = currentPath.lastIndexOf("/")

		if (currentPath.substring(lastSlashIndex, currentPath.length) === path)
			color = "bg-orange hover:bg-red-700"
		
		return color
	}

	return (
	<>
		<div className='absolute z-30 overflow-hidden flex flex-row h-screen w-full justify-center items-center'
			ref={reference}>
			
			<div style={{'--image-url': `url(${splashImage})`}}
			className={`bg-[image:var(--image-url)] flex flex-row h-screen w-full
				bg-center bg-cover bg-no-repeat bg-clip-text items-center justify-center
				whitespace-pre-line text-transparent`}>

				<p className='text-stroke tracking-tighter font-["Ignite"] justify-center text-center
				h-screen leading-[280px] w-full flex flex-row items-center font-regular md:text-[350px] sm:text-[20rem] xs:text-[10rem]'>
					{`${name}`}
				</p>
			</div>

			{/* Copy of the text for outline */}
			<div style={{'--image-url': `url(${splashImage})`}}
			className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
				bg-center bg-cover bg-no-repeat bg-clip-text items-center justify-center
				whitespace-pre-line text-transparent`}>

				<p className='tracking-tighter font-["Ignite"] justify-center h-screen text-center
				leading-[280px] w-full flex flex-row items-center md:text-[350px] sm:text-[20rem] xs:text-[10rem]'>
					{`${name}`}
				</p>
			</div>

		</div>	

		{/* NAV BAR */}
		<div className={`absolute z-50 justify-center flex flex-row w-full h-screen items-end gap-5`}>
			<Link onClick={loadData} to="/" className={`${NavColor("/")} h-5 w-5 rounded-full mb-[50px]`}/>
			<Link onClick={loadData} to="/unity" className={`${NavColor("/unity")} h-5 w-5 rounded-full mb-[50px]`}/>
			<Link onClick={loadData} to="/python" className={`${NavColor("/python")} h-5 w-5 rounded-full mb-[50px]`}/>
		</div>
		
		{/* Tranparent background Image / Gif */}
		<div className='z-20 relative top-1/2 left-1/2 bg-orange -translate-x-1/2 flex flex-row h-screen w-full'>

			<div style={{'--image-url': `url(${splashImage})`}}
			className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
				bg-center bg-cover bg-no-repeat`}>
					
				<div className='flex flex-row w-full h-screen bg-toolBGColor opacity-85'/>
			</div>
		</div>
	</>
	)
}