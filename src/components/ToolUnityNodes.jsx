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
                {
                    commits.map((commit, index) => {
                        return (
                        <>
                        {
                            commit.main &&
                            <div style={{ '--image-url': `url(${commit.backgroundImage})` }}
                            className={`sticky bottom-0 bg-[image:var(--image-url)]
                                h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                            />
                        }
                        <div className='flex flex-col items-center justify-end select-none'>
                            <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                            ref={nodeRefs[index]}>
                                <Node name={commit.name} animation={commit.animation} description={commit.description} />
                            </div>
                        </div>
                        </>
                        )
                    })
                }
            </div>
        
        </>
    )
}