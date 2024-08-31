import React, { useEffect, useState, createRef, useMemo, createContext } from 'react';
import ToolUnityNodes from './ToolUnityNodes.jsx'
import ToolGameEngineNodes from './ToolGameEngineNodes.jsx'
import ToolPythonNodess from './ToolPythonNodes.jsx'
import SplashScreen from "./SplashScreen.jsx"
import { motion, useInView } from "framer-motion"
import { useLocation } from 'react-router-dom';

export const ToolContext = createContext(); 

export default function ToolBranch({ path }) {

	const location = useLocation()

	const [data, setData] = useState(
		{ items: "", name: "", commits:"", splashImage:"", customStyle: "" }
	)
    const [isLoaded, setIsLoaded] = useState(false)
	const ref = useMemo(() => createRef())
	const isInView = useInView(ref, {
		amount: "some",
	});

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
				const dataDict = Object.entries(finalData)[0]
				setData({...data,
					items: dataDict, name: dataDict[0],
					commits: dataDict[1].commits, splashImage: dataDict[1].splashImage,
				})
			})
		}
		catch(error) {
			console.log(error)
		}
	}
	
	useEffect(function()
	{
		if (isLoaded === false)
			fetchData()

		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'instant',
		})
		
	},[isLoaded]);


	return (
		<>
		{ data && data.items &&
		<ToolContext.Provider value={{isLoaded, loadData}}>

			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center no-scrollbar">
				{
					location.pathname === "/" && 
					<ToolGameEngineNodes commits={data.commits} indexShow={isInView}/>
					|| location.pathname === "/unity" && 
					<ToolUnityNodes commits={data.commits} indexShow={isInView}/>
					|| location.pathname === "/python" && 
					<ToolPythonNodess commits={data.commits} indexShow={isInView}/>
				}
				<SplashScreen splashImage={data.splashImage} name={data.name}
				 	reference={ref}/>
			</div>

		</ToolContext.Provider>
		}
		
		<motion.div
		className="fixed z-[100] top-0 left-0 w-full h-[100vh] outline-none bg-orange origin-left"
		initial={{ scaleX: 0 }}
		animate={{ scaleX: 0 }}
		exit={{ scaleX: 1 }}
		transition={{ duration: 1.5, ease: [ 0.22, 1, 0.36, 1 ] }}
		/>

		<motion.div
		className="fixed z-[100] top-0 left-0 w-full h-[100vh] outline-none bg-orange origin-right"
		initial={{ scaleX: 1 }}
		animate={{ scaleX: 0 }}
		exit={{ scaleX: 0 }}
		transition={{ duration: 1.5, ease: [ 0.22, 1, 0.36, 1 ] }}
		/>
	</>
	)
}