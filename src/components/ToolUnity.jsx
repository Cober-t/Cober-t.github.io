import React, { useEffect, useState, createRef, useMemo } from 'react';
import ToolNodes from './ToolNodes.jsx';
import SplashScreen from "./SplashScreen.jsx"
import { motion, useInView } from "framer-motion"


export default function ToolUnity({ path }) {

	const [data, setData] = useState(
		{ items: "", name: "", commits:"", splashImage:"", customStyle: "" }
	)
	const ref = useMemo(() => createRef())
	const isInView = useInView(ref, {
		amount: "some",
	});

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
		fetchData()

		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'instant',
		})
	},[]);


	return (
		<>
		{ data && data.items &&
		<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center no-scrollbar">
			<ToolNodes commits={data.commits} indexShow={isInView}/>
			<SplashScreen splashImage={data.splashImage} name={data.name}
				reference={ref}/>
		</div>
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