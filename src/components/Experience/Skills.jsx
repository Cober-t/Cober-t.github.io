import { skills } from "../../constants.jsx"
import ProjectSlideButtons from "../Projects/ProjectSlideButtons.jsx"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Skills = () => {

    return (
        <div className="w-full h-full">
        <div className="flex flex-col gap-[20px]">

            <p className="font-title hover:text-accent transition-all
            flex text-4xl font-medium uppercase justify-center select-none">
                Lenguajes
            </p>
            <Swiper spaceBetween={10} slidesPerView={4} loop={true} navigation={true}
            className="h-[200px] xl:w-[1000px] w-full select-none">
                {skills.languages.map((skill, index) => {
                    return <SwiperSlide key={index} className="w-full">
                    <div className="w-full h-[150px] bg-[#232329] flex
                    items-center justify-end pb-2 flex-col">
                        <div className="text-6xl hover:text-accent
                        transition-all duration-300 mb-[12px]">
                            {skill.icon}
                        </div>
                        <p className="font-medium uppercase">{skill.name}</p>
                        <p className="font-light tracking-wider opacity-60 hover:opacity-100
                        text-xs uppercase text-accent">
                            {skill.level}
                        </p>
                    </div>
                    </SwiperSlide>
                })}
                <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                projectSize={5}
                btnStyles="hover:bg-accent text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>

            <p className="font-title hover:text-accent transition-all
            flex text-4xl font-medium uppercase justify-center select-none">
                Frameworks
            </p>
            <Swiper spaceBetween={10} slidesPerView={3} loop={true} navigation={true}
            className="h-[200px] xl:w-[1000px] w-full select-none">
                {skills.frameworks.map((skill, index) => {
                    return <SwiperSlide key={index} className="w-full">
                    <div className="w-full h-[150px] bg-[#232329] flex
                    items-center justify-end pb-2 flex-col">
                        <div className="text-6xl hover:text-accent
                        transition-all duration-300 mb-[12px]"> 
                            {skill.icon}
                        </div>
                        <p className="font-medium uppercase">{skill.name}</p>
                        <p className="font-light tracking-wider opacity-60 hover:opacity-100
                        text-xs uppercase text-accent">
                            {skill.level}
                        </p>
                    </div>
                    </SwiperSlide>
                })}
                {/* <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                projectSize={5}
                btnStyles="hover:bg-accent text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                /> */}
            </Swiper>

            <p className="font-title hover:text-accent transition-all
            flex text-4xl font-medium uppercase justify-center select-none">
                Programas
            </p>
            <Swiper spaceBetween={10} slidesPerView={4} loop={true} navigation={true}
            className="h-[200px] xl:w-[1000px] w-full select-none">
                {skills.softwares.map((skill, index) => {
                    return <SwiperSlide key={index} className="w-full">
                    <div className="ww-full h-[150px] bg-[#232329] flex
                    items-center justify-end pb-2 flex-col">
                        <div className="text-6xl hover:text-accent
                        transition-all duration-300 mb-[12px]"> 
                            {skill.icon}
                        </div>
                        <p className="font-medium uppercase">{skill.name}</p>
                        <p className="font-light tracking-wider opacity-60 hover:opacity-100
                        text-xs uppercase text-accent">
                            {skill.level}
                        </p>
                    </div>
                    </SwiperSlide>
                })}
                <ProjectSlideButtons containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] z-20 w-full justify-between -translate-y-5"
                projectSize={5}
                btnStyles="hover:bg-accent text-primary
                text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>
        </div>
    </div>
    )
}

export default Skills