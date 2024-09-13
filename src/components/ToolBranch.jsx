import React, { useEffect, useState, createRef, useMemo } from 'react';
import SplashScreen from "./SplashScreen.jsx"
import { useInView } from "framer-motion"
import Header from "./Header.jsx"
import MotionTranstion from "./MotionTransition.jsx"
import Hero from "./Hero.jsx"

export default function ToolBranch({ path }) {
	
	const [data, setData] = useState(
		{ items: "", name: "", commits:"", splashImage:"", customStyle: "" }
	)
    const [isLoaded, setIsLoaded] = useState(false)
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

	},[isLoaded]);


	return (
		<>
			<Hero />

			<MotionTranstion />

			
			{/* { data && data.items &&
			<div className="bg-hero-pattern flex flex-row bg-cover bg-no-repeat bg-center no-scrollbar">
				<SplashScreen splashImage={data.splashImage} name={data.name} commits={data.commits}
					reference={ref}/>
			</div>
			} */}
		</>
	)
}