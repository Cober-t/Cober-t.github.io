import { useState } from "react"
import { styles } from "../styles"

export default function Index({ commits, refs }) {

    const [showSubCommits, setShowSubCommits] = useState(undefined)

    function handleScroll(index) {
        if (refs[index] !== null) {
            window.scrollTo({
              top: refs[index].current.offsetTop,
              left: 0,
              behavior: "smooth",
            });
        }
    }

    // function IndexNode({ name, main, index }, ...props) {
    //     return (
    //     <p onClick={()=> {handleScroll(index)} }
    //     className={IndexNodeStyle(false)}
    //     props>
    //         {name}
    //         <hr className={IndexNodeWidth(main)}/>
    //         {index}
    //     </p>
    //     )
    // }

    function IndexNodeStyle(isMain) {
        return isMain === true ? styles.indexMainNode : styles.indexNode
    }

    function IndexNodeWidth(isMain) {
        return isMain === true ? styles.indexMainNodeWidth : styles.indexNodeWidth
    }

    return (
        <div className='fixed z-40 flex flex-col w-full h-screen
        uppercase font-titleSections font-semibold
        items-end justify-end text-[14px] gap-4'>
        <div onMouseLeave={() => { setShowSubCommits(undefined)} }>
        {
            commits.map(function(commit, index) {
            return (
                <>
                    {
                    !commit.main && showSubCommits && showSubCommits === commit.index.substring(0, 1) &&
                    <p onClick={()=> { handleScroll(index)} }
                    className={IndexNodeStyle(false)}>
                        {commit.name}
                        <hr className={IndexNodeWidth(commit.main)}/>
                        {index}
                    </p>
                    }

                    {
                    commit.main &&
                    <p onClick={()=> { handleScroll(index)} }
                    className={IndexNodeStyle(true)}
                    onMouseEnter={() => { setShowSubCommits(commit.index) } }>
                        {commit.name}
                        <hr className={IndexNodeWidth(commit.main)}/>
                        {index}
                    </p>
                    }
                </>
            )})
        }
        </div>
        </div>
    )
}