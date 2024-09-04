import { useState } from "react"
import { styles } from "../styles"
import { motion } from "framer-motion";

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

    function IndexNodeStyle(isMain) {
        return isMain === true ? styles.indexMainNode : styles.indexNode
    }

    function IndexNodeWidth(isMain) {
        return isMain === true ? styles.indexMainNodeWidth : styles.indexNodeWidth
    }
    

    return (
        <motion.div className={`${styles.coreIndex}`}
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
                    y: showSubCommits ? "-0%" : "0%"
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