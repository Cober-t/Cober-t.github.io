import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from '../styles';
import { toolsDict } from '../constants';


const Hero = () => {

	const [data, setData] = useState([])
	const [currentTool, selectTool] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(() => {
		
		fetch(toolsDict)
        .then((response) => response.json())
        .then((data) => {
			setData(data) 
            setIsLoaded(true)
			selectTool(Object.entries(data)[0])
        })
    }, [])


	if (isLoaded && data)
	{

		return <>
			<div className='absolute z-10 flex flex-row h-screen w-full'>

				<div className='flex flex-row h-screen w-full justify-center items-center'>
					
					<div style={{'--image-url': `url(${currentTool[1].splashImage})`}}
					className={`bg-[image:var(--image-url)] flex flex-row h-screen w-full
						bg-center bg-cover bg-no-repeat bg-clip-text
						font-homeSections leading-[175px] whitespace-pre-line text-transparent
						xs:text-[90px] sm:text-[150px] md:text-[180px] text-center items-center`}>

						<div className='text-stroke tracking-wider'>
							{`${currentTool[0]}`}
						</div>
					</div>

					{/* Copy of the text for outline */}
					<div style={{'--image-url': `url(${currentTool[1].splashImage})`}}
					className={`absolute bg-[image:var(--image-url)] flex flex-row h-screen w-full
						bg-center bg-cover bg-no-repeat bg-clip-text
						font-homeSections leading-[175px] whitespace-pre-line text-transparent
						xs:text-[90px] sm:text-[150px] md:text-[180px] text-center items-center`}>

						<div className='tracking-wider'>
							{`${currentTool[0]}`}
						</div>
					</div>

				</div>


				<div className='absolute justify-between flex flex-row w-full h-screen items-center'>
					{/* Forward Tool */}
					<a className="bg-darkOrange hover:bg-red-700 h-4 w-4 ml-6 rounded-full"/>
					{/* Backward Tool */}
					<a className="bg-darkOrange hover:bg-red-700 h-4 w-4 mr-6 rounded-full"/>
				</div>

			</div>

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