import { experience } from "../../constants.jsx"
import { BsSteam } from "react-icons/bs"


const ExperienceWork = () => {

    return (
        <div className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-5xl font-bold font-nodeTitle uppercase">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-medium">
                    {experience.description}
                </p>
                <div className="h-[600px] xl:overflow-y-scroll scroll">
                    <ul className="grid grid-cols-1 gap-[30px]">
                        {experience.items.map((item, index) => {
                            return (
                                <li key={index}
                                style={{'--image-url': `url(${item.image})`}}
                                className={`bg-[#232329] h-fit xl:h-[220px] py-6 px-10 flex flex-col 
                                justify-center items-center lg:items-start gap-1 xl:bg-[image:var(--image-url)] bg-bottom xl:bg-right bg-contain bg-no-repeat`}>
                                    <div 
                                    className="w-full flex xl:flex-row flex-col items-center justify-center sm:justify-between">
                                        <div>
                                            <span className="text-accent font-tags text-2xl font-medium">
                                                    {item.duration}
                                                </span> 
                                            <h3 className="text-xl min-h-[60px] font-medium
                                            text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                            <div className="flex items-center gap-3 xl:mb-0 mb-5">
                                                <span className="w-[6px] h-[6px] bg-accent" />
                                                <p className="text-white/60 font-medium">{item.company}</p>
                                            </div>
                                        </div>
                                        {
                                            item.image !== null && 
                                            <div>
                                                <img src={item.image} alt=""
                                                className="w-[300px] xl:w-0 bg-center"/>
                                                <div className="xl:translate-y-14 -translate-y-12 xl:translate-x-0 translate-x-80 
                                                w-[50px] h-[50px] rounded-full bg-white/5 flex items-center
                                                justify-center hover:text-accent text-white">
                                                    <BsSteam className="text-3xl"/>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceWork