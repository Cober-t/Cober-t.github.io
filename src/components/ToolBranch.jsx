import React, { useEffect, useState, createContext } from 'react';
import ToolNodes from './ToolNodes.jsx';
import SplashScreen from "./SplashScreen.jsx"

export const ToolContext = createContext();

export default function ToolBranch({ path }) {

	const [data, setData] = useState(
		{ items: "", name: "", commits:"", splashImage:"", customStyle: "" }
	)
    const [isLoaded, setIsLoaded] = useState(false)

	function loadData() { 
		setIsLoaded(!isLoaded) 
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
	
	return ( data && data.items &&
	<ToolContext.Provider value={{isLoaded, loadData}}>
		<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-scroll no-scrollbar">

			<ToolNodes commits={data.commits}/>

			<SplashScreen splashImage={data.splashImage} name={data.name}/>
			
		</div>
	</ToolContext.Provider>
	)
}