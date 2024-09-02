import { createRef, useMemo } from "react"
import { useLocation } from 'react-router-dom'
import { styles } from '../styles.js'
import Index from './Index.jsx'

function Node({ name, animation, description, reference }) {
    return (
    <div className={`${styles.coreNodeStyle}`}
        ref={reference}>
        <div className="absolute z-50">
            <p className={`${styles.nodeTitleText}`}>
                {name}
            </p>

            <div className='flex flex-row w-full items-center justify-center gap-5'>
                <img src={animation} alt="React Logo" className={`${styles.animationSize}`}/>
                <p className={`${styles.nodeDescriptionText}`}>
                    {description}
                </p>
            </div>
        </div>
    </div>
    )
}

export default function ToolNodes({ commits, indexShow }) {
    
    const location = useLocation()

    const nodeRefs = useMemo(() =>
        Array(commits.length)
        .fill(0)
        .map(i=> createRef())
    )
    let j = 0

    function BackgroundNode({ background }) {
        return (
            <div style={{ '--image-url': `url(${background})` }}
            className={
                `bg-[image:var(--image-url)] 
                ${styles.backgroundNode}`
            }/>   
        )
    }

    function Commit({ commit, index }) {
        const result = []
        let i = index + 1;

        while (i < commits.length && !commits[i].main)
        {
            result.push(location.pathname === "/" &&
                <Node name={commits[i].name} animation={commits[i].animation} 
                description={commits[i].description} reference={nodeRefs[i]}/>
                || location.pathname === "/unity" && 
                <Node name={commits[i].name} animation={commits[i].animation} 
                description={commits[i].description} reference={nodeRefs[i]}/>
                || location.pathname === "/python" &&
                <Node name={commits[i].name} animation={commits[i].animation} 
                description={commits[i].description} reference={nodeRefs[i]}/>
            )

            i += 1
        }

        return (
            <div className='flex flex-col select-none'>
                <Node name={commit.name} 
                    animation={commit.animation} 
                    description={commit.description}
                    reference={nodeRefs[index]}
                    />

                { result.length > 0 && <>{result}</> }
            </div>
        ) 
    }

    function Commits() {
        return (
            commits.map(( commit, index ) => {
                return commit.main &&
                <div>
                    <Commit commit={commit} index={index} />
                    <BackgroundNode background={commit.backgroundImage}/>
                </div>
            })
        )
    }
    

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
                <Commits />
            </div>
        </>
    )
}