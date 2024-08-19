import React, { useEffect, useState } from 'react';
import NodeCommit from './NodeCommit.jsx';
import ToolIndex from './ToolIndex.jsx';
import NavBar from './NavBar.jsx';

function SplashScreen(props)
{
	return (
	<>
		<div style={{'--image-url': `url(${props.tool[1].splashImage})`}}
		className='z-10 fixed h-screen w-full justify-center items-center
		top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
		</div>	

		<div className='absolute z-10 flex flex-row h-screen w-full'>

			<div className='flex flex-row h-screen w-full justify-center items-center'>
				
				<div style={{'--image-url': `url(${props.tool[1].splashImage})`}}
				className={`bg-[image:var(--image-url)] flex flex-row h-screen w-full
					bg-center bg-cover bg-no-repeat bg-clip-text items-center justify-center
					whitespace-pre-line text-transparent`}>

					<p className='text-stroke tracking-tighter font-["Ignite"] justify-center text-center
					h-screen leading-[280px] w-full flex flex-row items-center font-regular text-[350px]'>
						{`${props.tool[0]}`}
					</p>
				</div>

				{/* Copy of the text for outline */}
				<div style={{'--image-url': `url(${props.tool[1].splashImage})`}}
				className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
					bg-center bg-cover bg-no-repeat bg-clip-text items-center justify-center
					whitespace-pre-line text-transparent`}>

					<p className='tracking-tighter font-["Ignite"] justify-center h-screen text-center
					leading-[280px] w-full flex flex-row items-center text-[350px]'>
						{`${props.tool[0]}`}
					</p>
				</div>

			</div>

			<NavBar />
			
		</div>

		{/* Tranparent background Image / Gif */}
		<div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row h-screen w-full'>

			<div style={{'--image-url': `url(${props.tool[1].splashImage})`}}
			className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
				bg-center bg-cover bg-no-repeat`}>

				<div className='flex flex-row w-full h-screen bg-toolBGColor opacity-90'/>
			</div>
		</div>
	</>
	)
}

export default function ToolBranch(props) {

	const [data, setData] = useState(
		{ items: "", name: "" }
	)
    const [isLoaded, setIsLoaded] = useState(false)

	async function fetchData() {
		try {
			await fetch(props.path)
			.then(function(response) {
				if (!response.ok) {
					throw new Error("Network response was not ok.");
				}
				return response.json()
			})
			.then((finalData) =>
			{
				console.log(Object.entries(finalData)[0][1].commits)
				setIsLoaded(true)
				setData({
					items: Object.entries(finalData)[0], 
					name: Object.entries(finalData)[0]
				}) 
			})


		}
		catch(error)
		{
			console.log(error)
		}
	}
	
	
	useEffect(function()
	{
		fetchData()
	},
	[isLoaded]);
	
	
	return (
	<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-scroll no-scrollbar">
		{/* <div className='relative z-10 flex flex-col items-center justify-end'>
			{data && data.items.commits.map((commit, index) =>
				<NodeCommit name={commit.name} animation={commit.animation} index={index}/>
			)}
		</div>

		<ToolIndex commits={data.items}/>

		<SplashScreen tool={data.items}/> */}
	</div>
	)
}