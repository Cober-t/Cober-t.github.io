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

            <div className='flex xs:flex-col md:flex-row w-full text-justify items-center justify-center gap-5'>
                <p className={`${styles.nodeDescriptionText}`}>
                    {description}
                </p>
                {animation && <img src={animation} alt="React Logo" className={`${styles.animationSize}`}/>}
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
                `bg-[image:var(--image-url)] xs:z-40 md:z-10
                ${styles.backgroundNode} w-full top-0 opacity-50`
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

                    <BackgroundNode background={commit.backgroundImage}/>

                    <Commit commit={commit} index={index} />
                </div>
            })
        )
    }
    

    return (
        <>
            {/* {
                nodeRefs && 
                <Index commits={commits} refs={nodeRefs} show={indexShow}/>
            } */}

            <div className="bg-black">
                <Commits />
                <div className="z-40 sticky bottom-0 xs:h-[50vh] xs:w-full bg-black
                md:h-0 md:w-0 md:bg-transparent">
                </div>
            </div>
        </>
    )
}