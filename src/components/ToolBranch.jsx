import React, { useEffect, useState, useRef, createContext } from 'react';
import ToolNodes from './ToolNodes.jsx';
import SplashScreen from "./SplashScreen.jsx"
import { motion } from 'framer-motion';

export const ToolContext = createContext();

export default function ToolBranch({ path }) {

	const [data, setData] = useState(
		{ items: "", name: "", commits:"", splashImage:"", customStyle: "" }
	)
    const [isLoaded, setIsLoaded] = useState(false)
	const entirePage = useRef(null);

	function loadData() { 
		setIsLoaded(false) 
	}

	async function fetchData() {
		try {
			await fetch(path)
			.then(function(response) {
				if (!response.ok) {
					throw new Error("Network response was not ok.");
				}
				return response.json()
			})
			.then((finalData) =>
			{
				setIsLoaded(true)
				setData({...data,
					items: Object.entries(finalData)[0], 
					name: data.items[0],
					commits: Object.entries(finalData)[0][1].commits,
					splashImage: Object.entries(finalData)[0][1].splashImage,
				})

				window.scrollTo({
					top: entirePage.current.scrollHeight,
					behavior: 'instant',
				})
			})
		}
		catch(error) {
			console.log(error)
		}
	}
	
	useEffect(function()
	{
		fetchData()
	},[isLoaded]);
	
	return (
		<>
		{ data && data.items &&
		<ToolContext.Provider value={{isLoaded, loadData}}>

			<div ref={entirePage} className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-scroll no-scrollbar">

				<ToolNodes commits={data.commits}/>

				<SplashScreen splashImage={data.splashImage} name={data.name}/>
			</div>

		</ToolContext.Provider>
		}

		<motion.div
		className="fixed z-[100] top-0 left-0 w-full h-[100vh] bg-orange origin-bottom"
		initial={{ scaleY: 0 }}
		animate={{ scaleY: 0 }}
		exit={{ scaleY: 1 }}
		transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
		onAnimationComplete={()=> { setIsLoaded(false) }}
		/>

		<motion.div
		className="fixed z-[100] top-0 left-0 w-full h-[100vh] bg-orange origin-top "
		initial={{ scaleY: 1 }}
		animate={{ scaleY: 0 }}
		exit={{ scaleY: 0 }}
		transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
		/>
	</>
	)
}