import { createRef, useMemo } from "react"
import '../style.css'
import Index from './Index.jsx';

function Node({ name, animation, description }) {
    return (
    <div className="absolute z-50">
        <p className={`flex flex-row flex-nowrap items-center text-center justify-center w-full pl-[50px] pr-[50px] mb-[50px]`}>
            {name}
        </p>

        <div className='flex flex-row w-full items-center justify-center gap-5'>
            <img src={animation} alt="React Logo" className='w-[200px] h-[200px]'/>
            <p className='flex flex-row max-w-[750px] tracking-wider h-full text-[24px] font-regular items-center'>
                {description}
            </p>
        </div>
    </div>
    )
}

export default function ToolUnityNodes({ commits, indexShow }) {

    const nodeRefs = useMemo(() =>
        Array(commits.length)
        .fill(0)
        .map(i=> createRef())
    )
  
    return (
        <>
            {
                nodeRefs && 
                <Index commits={commits} refs={nodeRefs} show={indexShow}/>
            }

            {/* BACKGROUND TINT*/}
            <div style={{ position: "fixed",  zIndex:"30",
                height: "100vh", width: "100vw",
                backgroundColor: "#000000", opacity: "0.5" }}/>

            <div>

                <div>   
                    <div style={{ '--image-url': `url(${commits[0].backgroundImage})` }}
                    className={`sticky bottom-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />

                    <div className='flex flex-col items-center justify-end select-none'>
                        <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                        ref={nodeRefs[0]}>
                            <Node name={commits[0].name} animation={commits[0].animation} description={commits[0].description} />
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ '--image-url': `url(${commits[3].backgroundImage})` }}
                    className={`sticky top-0 bg-[image:var(--image-url)] 
                        h-screen w-full -mb-[600px] bg-center bg-cover bg-no-repeat`}
                    />

                    <div className='flex flex-col items-center justify-end select-none'>
                        <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                        ref={nodeRefs[1]}>
                            <Node name={commits[1].name} animation={commits[1].animation} description={commits[1].description}/>
                        </div>
                        <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                        ref={nodeRefs[2]}>
                            <Node name={commits[2].name} animation={commits[2].animation} description={commits[2].description}/>
                        </div>
                        <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                        ref={nodeRefs[3]}>
                            <Node name={commits[3].name} animation={commits[3].animation} description={commits[3].description}s/>
                        </div>
                    </div>
                    

                </div>
            </div>
        
        </>
    )
}