import { createRef, useEffect, useMemo } from "react"
import '../style.css'
import Index from './Index.jsx';

function Node({ name, animation, description }) {
    return (
    <div className="z-20">
        <p className={`flex flex-row items-center justify-center w-full mr-[-100px] mb-[50px]`}>
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

export default function ToolNodes({ commits, indexShow }) {

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

            {/* Change background if isInView and
            the current background is different from the new one */}
            <div className='relative z-20 flex flex-col items-center justify-end select-none'>
            {
                commits.map((commit, index) =>
                    <div ref={nodeRefs[index]}
                        className='flex flex-col items-center justify-center whitespace-pre-line w-full h-screen text-[92px] uppercase'>
                        <Node name={commit.name} animation={commit.animation} description={commit.description}/>
                    </div>
                )
            }
            </div>

            {/* BACKGROUND IMAGE */}
            {/* set background state and change when new main node is in view.*/}
            {/* <div style={{
                '--image-url': `url(${commit.backgroundImage})`,
            }}
            className={`fixed bg-[image:var(--image-url)]
                flex flex-row h-screen w-full bg-center bg-cover bg-no-repeat`}>
            </div>

            <div style={{
                position: "fixed", height: "100vh", width: "100vw",
                backgroundColor: "#000000", opacity: "0.5"
            }}>
            </div> */}
        </>
    )
}