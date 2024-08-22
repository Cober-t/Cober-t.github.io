import { styles } from "../styles"

export default function Index({ commits }) {

    function Goto(index) {
        console.log(index)
    }

    function IndexNodeStyle(isMain) {
        return isMain === true ? styles.indexMainNode : styles.indexNode
    }

    function IndexNodeWidth(isMain) {
        return isMain === true ? styles.indexMainNodeWidth : styles.indexNodeWidth
    }

    return (
		<div className='fixed z-30 top-1/2 left-1/2 -translate-x-[53%] translate-y-1/2
        flex flex-col w-full items-end justify-end text-[14px] gap-4 uppercase font-titleSections font-semibold'>
        {commits.map(function(commit, index) {
            return (
                <p onClick={()=> {Goto(index)} } className={IndexNodeStyle(commit.main)}>
                    {commit.name}
                    <hr className={IndexNodeWidth(commit.main)}/>
                    {index}
                </p>
            )
        })}
    </div>
    )
}