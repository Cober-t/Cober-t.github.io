import { useState } from "react"
import { styles } from "../styles"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Index({ commits, refs, show }) {

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
        <motion.div className='fixed z-[90] flex flex-col left-full bottom-0 w-fit h-fit
        uppercase font-titleSections font-semibold gap-y-4
        items-end justify-end text-[14px]'
        animate={{
            x: show ? "0%" : "-100%"
        }}>
        <div onMouseLeave={() => { setShowSubCommits(undefined)} }>
        {
            commits.map(function(commit, index) {
            return (
                <>
                    {
                    !commit.main && showSubCommits && showSubCommits === commit.index.substring(0, 1) &&
                    <motion.div onClick={()=> { handleScroll(index)} }
                    className={IndexNodeStyle(false)}
                    animate={{
                        y: showSubCommits ? "0%" : "0%"
                    }}>
                        {commit.name}
                        <hr className={IndexNodeWidth(commit.main)}/>
                        {index}
                    </motion.div>
                    }

                    {
                    commit.main &&
                    <motion.div onClick={()=> { handleScroll(index)} }
                    className={IndexNodeStyle(true)}
                    onMouseEnter={() => { setShowSubCommits(commit.index) } }
                    animate={{
                        y: showSubCommits ? "-50%" : "0%"
                    }}>
                        {commit.name}
                        <hr className={IndexNodeWidth(commit.main)}/>
                        {index}
                    </motion.div>
                    }
                </>
            )})
        }
        </div>
        </motion.div>
    )
}