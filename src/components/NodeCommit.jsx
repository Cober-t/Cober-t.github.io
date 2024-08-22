import { useEffect } from "react"
import '../style.css'

export default function NodeCommit({ name, animation, description, main }) {

    return (
        <div className='whitespace-pre-line flex flex-col items-center jusity-center w-full h-screen text-[92px] uppercase'>
            <p className={`flex flex-row items-center justify-center w-full mr-[-100px] mb-[50px]`}
            onClick={() => { console.log("asdasdasdasdasdada")}}>
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