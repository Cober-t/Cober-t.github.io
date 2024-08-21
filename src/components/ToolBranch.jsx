import React, { useEffect, useState, createContext } from 'react';
import NodeCommit from './NodeCommit.jsx';
import Index from './Index.jsx';
import SplashScreen from "./SplashScreen.jsx"

export const ToolContext = createContext();

export default function ToolBranch({ path }) {

	const [data, setData] = useState(
		{ items: "", name: "", customStyle: "" }
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
				setData({
					items: Object.entries(finalData)[0], 
					name: data.items[0]
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
			<div className='relative z-10 flex flex-col items-center justify-end'>
				{data && data.items[1].commits.map((commit, index) =>
					<NodeCommit name={commit.name} 
							description={commit.description}
							animation={commit.animation} 
							index={index}/>
				)}
				</div>
			
			<Index commits={data.items[1].commits}/>

			<SplashScreen splashImage={data.items[1].splashImage} name={data.name}/>
		</div>
	</ToolContext.Provider>
	)
}