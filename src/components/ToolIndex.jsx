import { styles } from "../styles"

export default function ToolIndex(props) {

    return (
		<div className='fixed z-10 top-1/2 left-1/2 -translate-x-[53%] translate-y-1/2
        flex flex-col w-full items-end justify-end text-[14px] gap-4 uppercase font-titleSections font-semibold'>
        {props.items && props.items[1].commits.map(function(commit, index)
        {
            if (commit.main)
            {
                return (
                    <div className='flex min-w-[250px] items-center justify-between font-regular'>
                        {commit.name}
                        <hr className='opacity-0 bg-transparent w-20'/>
                        {index}
                    </div>
                )
            }
            else
            {
                return (
                    <div className='flex max-w-[250px] items-center justify-end font-regular'>
                        {commit.name}
                        <hr className='opacity-0 bg-transparent w-10'/>
                        {index}
                    </div>
                )
            }
        })}
    </div>
    )
}