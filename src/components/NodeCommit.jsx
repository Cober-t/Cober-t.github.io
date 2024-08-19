import '../style.css'

export default function NodeCommit(props) {

    return (
        <div className='flex flex-col items-center jusity-center w-full h-screen text-[92px] uppercase'>
            <div className={`flex flex-row items-center justify-center w-full mr-[-100px] mb-[50px]`}>
                {props.name}
            </div>
            <div className='flex flex-row w-full items-center justify-center gap-5'>
                <img src={props.animation} alt="React Logo" className='w-[200px] h-[200px]'/>
                <div className='flex flex-row max-w-[750px] tracking-wider h-full text-[24px] font-regular items-center'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}