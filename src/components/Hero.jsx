import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { toolsDict } from '../constants';

function NodeContentTemplate(nodeContent) {

	if (nodeContent.node)
	{
		return (
			<>
				<div className='z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<div className='bg-darkOrange resize opacity-85
					flex flex-col min-w-[600px] min-h-[800px] rounded-[1rem]'>
						{nodeContent.node.name}
					</div>
				</div>
			</>
		)
	}
}


function Node(props) {

	const [nodeVisibility, setNodeVisibility] = useState("hidden")
	const [nodeContentHolder, setNodeHandler] = useState()

	useEffect(()=> {

		const handleEsc = (event) => {
			if (event.key === 'Escape') 
				setNodeVisibility("hidden")
		}
		window.addEventListener('keydown', handleEsc);
	 
		return () => {
			window.removeEventListener('keydown', handleEsc);
		}
	}, [])


	if (props.node.main == true)
	{
		return (
			<>
			<div className={`${nodeVisibility}`}>
				<NodeContentTemplate node={nodeContentHolder}/>
			</div>

			<div className='justify-center items-center mt-[-0.5rem] flex flex-col grid-cols-1 w-full h-full'>

				<a className="z-20 bg-darkOrange hover:bg-red-700 h-20 w-20 rounded-full"
				onClick={()=> {
					document.getElementById("notif").remove()
					setNodeHandler(props.node)
					setNodeVisibility("block")

				}}>
				</a>
				<div className='z-10 mt-[-2rem] resize max-w-[350px] p-5 pt-10 font-regular
				outline-darkOrange outline outline-4 bg-backgroundColor rounded-md'>
					Buenas que tal estamos hoy aqui mu bien gracias por preguntar
				</div>

				<div className="flex flex-col justify-center items-center mt-[-0.5rem] w-[1.5rem] h-[20rem] bg-darkOrange"/>
			</div>
			</>
		)
	}
	else if (props.node.main == false)
	{
		return (
			<>
			<div className={`${nodeVisibility}`}>
				<NodeContentTemplate node={nodeContentHolder}/>
			</div>

			<div className='flex flex-row items-center resize-none grid-cols-2 ml-[13.25rem] gap-x-[10rem] w-full- h-full'>

				<div className="z-0 resize-none flex w-[1.5rem] h-[20rem] bg-darkOrange"/>

				<div className='flex justify-center'>
					<a className="z-10 outline outline-4 outline-darkOrange bg-backgroundColor hover:bg-red-500 h-20 w-20 rounded-full"
					onClick={()=> {
						setNodeHandler(props.node)
						setNodeVisibility("block")
					}}>
					</a>

					<div className='absolute resize max-w-[350px] mt-[2.5em] ml-[25px] p-5 pt-12 font-regular
					outline-darkOrange outline outline-4 bg-backgroundColor rounded-md'>
						Buenas que tal estamos
					</div>

					<div className="flex flex-col ml-[-3.25rem] w-[1.5rem] h-[20rem] bg-darkOrange"/>
				</div>
				
			</div>
			</>
		)
	}
}


const Hero = () => {

	const [data, setData] = useState([])
	const [toolIndex, setToolIndex] = useState(0)
	const [currentTool, selectTool] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
	const [isMainBranch, setMainBranch] = useState(true)

    useEffect(() => {
		
		fetch(toolsDict)
        .then((response) => response.json())
        .then((data) => {
			setData(data) 
            setIsLoaded(true)
			setMainBranch(true)
			selectTool(Object.entries(data)[toolIndex])
        })
    }, [])


	if (isLoaded && data)
	{
		return <>

			{/* TOOL BRANCH */}
			<div className='relative flex flex-col h-full w-full justify-end items-center'>
				{currentTool && currentTool[1].commits.map((commit) =>
					<Node node={commit} mainBranch={isMainBranch}/>
				)}
			</div>

			{/* Init path button */}
			<div className='absolute z-10 bg-transparent
			justify-center items-start flex flex-row w-full h-screen'>
				<a className="bg-darkOrange hover:bg-red-700 items-start h-20 w-20 mt-[-40px] rounded-full"
					onClick={()=> {
						// Init scroll animation
						console.log("PRESSED")
					}}/>
			</div>


			{/* SPLASH SCREEN */}
			<div className='absolute z-10 flex flex-row h-screen w-full'>

				<div className='flex flex-row h-screen w-full justify-center items-center'>
					
					<div style={{'--image-url': `url(${currentTool[1].splashImage})`}}
					className={`bg-[image:var(--image-url)] flex flex-row h-screen w-full
						bg-center bg-cover bg-no-repeat bg-clip-text
						font-homeSections leading-[175px] whitespace-pre-line text-transparent
						xs:text-[90px] sm:text-[150px] md:text-[180px] text-center justify-center items-center`}>

						<div className='text-stroke tracking-wider'>
							{`${currentTool[0]}`}
						</div>
					</div>

					{/* Copy of the text for outline */}
					<div style={{'--image-url': `url(${currentTool[1].splashImage})`}}
					className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
						bg-center bg-cover bg-no-repeat bg-clip-text
						font-homeSections leading-[175px] whitespace-pre-line text-transparent
						xs:text-[90px] sm:text-[150px] md:text-[180px] text-center justify-center items-center`}>

						<div className='tracking-wider'>
							{`${currentTool[0]}`}
						</div>
					</div>

				</div>

				<div className='absolute justify-between flex flex-row w-full h-screen items-center'>
					{/* Forward Tool */}
					<a className="bg-darkOrange hover:bg-red-700 h-4 w-4 ml-6 rounded-full"
						onClick={()=> {
							setToolIndex(toolIndex - 1)
							if (toolIndex <= 0)
								setToolIndex(Object.keys(data).length - 1)
							selectTool(Object.entries(data)[toolIndex])
							console.log(toolIndex)
						}}/>


					{/* Backward Tool */}
					<a className="bg-darkOrange hover:bg-red-700 h-4 w-4 mr-6 rounded-full"
						onClick={()=> {
							setToolIndex(toolIndex + 1)
							if (toolIndex >= Object.keys(data).length - 1)
								setToolIndex(0)
							selectTool(Object.entries(data)[toolIndex])
							console.log(toolIndex)
						}}/>
				</div>

			</div>


			{/* Tranparent background Image / Gif */}
			<div className='flex flex-row h-screen w-full'>

				<div style={{'--image-url': `url(${currentTool[1].splashImage})`}}
				className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
					bg-center bg-cover bg-no-repeat`}>

					<div className='flex flex-row w-full h-screen bg-toolBGColor opacity-90'/>
				</div>
			</div>
		</>
	}
	
}

export default Hero