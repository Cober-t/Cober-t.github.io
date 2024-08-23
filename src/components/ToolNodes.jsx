import { createRef, useContext, useEffect, useMemo, useRef } from "react"
import '../style.css'
import Index from './Index.jsx';


export default function ToolNodes({ commits }) {

    const nodeRefs = useMemo(() =>
        Array(commits.length)
        .fill(0)
        .map(i=> createRef())
    )

    return (
        <>
            {
                nodeRefs && 
                <Index commits={commits} refs={nodeRefs}/>
            }

            {/* Change background if isInView and
            the current background is different from the new one */}
            <div className='relative z-20 flex flex-col items-center justify-end select-none'>
            {
                commits.map((commit, index) =>
                    <div ref={nodeRefs[index]}
                        className='flex flex-col items-center justify-center whitespace-pre-line w-full h-screen text-[92px] uppercase'>
                        
                        <div className="z-20">
                            <p className={`flex flex-row items-center justify-center w-full mr-[-100px] mb-[50px]`}>
                                {commit.name}
                            </p>
                
                            <div className='flex flex-row w-full items-center justify-center gap-5'>
                                <img src={commit.animation} alt="React Logo" className='w-[200px] h-[200px]'/>
                                <p className='flex flex-row max-w-[750px] tracking-wider h-full text-[24px] font-regular items-center'>
                                    {commit.description}
                                </p>
                            </div>
                        </div>

                        {/* BACKGROUND IMAGE */}
                        <div style={{
                            '--image-url': `url(${commit.backgroundImage})`,
                        }}
                        className={`fixed bg-[image:var(--image-url)]
                            flex flex-row h-screen w-full bg-center bg-cover bg-no-repeat`}>
                        </div>

                        <div style={{
                            position: "fixed", height: "100vh", width: "100vw",
                            backgroundColor: "#000000", opacity: "0.5"
                        }}>
                        </div>
                    </div>
                )
            }
            </div>
        </>
    )
}