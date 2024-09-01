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

export default function ToolGameEngineNodes({ commits, indexShow }) {

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
                    <div className='flex flex-col items-center justify-end select-none'>
                        <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                        ref={nodeRefs[0]}>
                            <Node name={commits[0].name} animation={commits[0].animation} description={commits[0].description}s/>
                        </div>
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

                    <div style={{ '--image-url': `url(${commits[0].backgroundImage})` }}
                    className={`sticky bottom-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />
                </div>


                <div>   
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[4]}>
                        <Node name={commits[4].name} animation={commits[4].animation} description={commits[4].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[5]}>
                        <Node name={commits[5].name} animation={commits[5].animation} description={commits[5].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[6]}>
                        <Node name={commits[6].name} animation={commits[6].animation} description={commits[6].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[7]}>
                        <Node name={commits[7].name} animation={commits[7].animation} description={commits[7].description}s/>
                    </div>

                    <div style={{ '--image-url': `url(${commits[4].backgroundImage})` }}
                    className={`sticky bottom-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />
                </div>

                <div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[8]}>
                        <Node name={commits[8].name} animation={commits[8].animation} description={commits[8].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[9]}>
                        <Node name={commits[9].name} animation={commits[9].animation} description={commits[9].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[10]}>
                        <Node name={commits[10].name} animation={commits[10].animation} description={commits[10].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[11]}>
                        <Node name={commits[11].name} animation={commits[11].animation} description={commits[11].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[12]}>
                        <Node name={commits[12].name} animation={commits[12].animation} description={commits[12].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[13]}>
                        <Node name={commits[13].name} animation={commits[13].animation} description={commits[13].description}s/>
                    </div>

                    <div style={{ '--image-url': `url(${commits[8].backgroundImage})` }}
                    className={`sticky bottom-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />
                </div>

                <div>   
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[14]}>
                        <Node name={commits[14].name} animation={commits[14].animation} description={commits[14].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[15]}>
                        <Node name={commits[15].name} animation={commits[15].animation} description={commits[15].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[16]}>
                        <Node name={commits[16].name} animation={commits[16].animation} description={commits[16].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[17]}>
                        <Node name={commits[17].name} animation={commits[17].animation} description={commits[17].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[18]}>
                        <Node name={commits[18].name} animation={commits[18].animation} description={commits[18].description}s/>
                    </div>

                    <div style={{ '--image-url': `url(${commits[14].backgroundImage})` }}
                    className={`sticky bottom-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />
                </div>

                <div>   
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[20]}>
                        <Node name={commits[20].name} animation={commits[20].animation} description={commits[20].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[21]}>
                        <Node name={commits[21].name} animation={commits[21].animation} description={commits[21].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[22]}>
                        <Node name={commits[22].name} animation={commits[22].animation} description={commits[22].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[23]}>
                        <Node name={commits[23].name} animation={commits[23].animation} description={commits[23].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[24]}>
                        <Node name={commits[24].name} animation={commits[24].animation} description={commits[24].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[25]}>
                        <Node name={commits[25].name} animation={commits[25].animation} description={commits[25].description}s/>
                    </div>
                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[26]}>
                        <Node name={commits[26].name} animation={commits[26].animation} description={commits[26].description}s/>
                    </div>

                    <div style={{ '--image-url': `url(${commits[19].backgroundImage})` }}
                    className={`sticky bottom-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />
                </div>

                <div>   
                    <div style={{ '--image-url': `url(${commits[27].backgroundImage})` }}
                    className={`sticky top-0 bg-[image:var(--image-url)]
                        h-screen w-full -mb-[750px] bg-center bg-cover bg-no-repeat`}
                    />

                    <div className='flex flex-row text-center items-center justify-center whitespace-pre-line w-full h-screen text-[60px] uppercase'
                    ref={nodeRefs[27]}>
                        <Node name={commits[27].name} animation={commits[27].animation} description={commits[27].description}s/>
                    </div>
                </div>
            </div>
        
        </>
    )
}