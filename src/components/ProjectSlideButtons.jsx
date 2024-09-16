import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"
import { useContext } from "react"
import { ProjectContext } from "./Projects"

const ProjectSlideButtons = ({ containerStyles, btnStyles, iconsStyles, projectSize }) => {

    const swiper = useSwiper()
    const {setProgress} = useContext(ProjectContext)

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={()=> {
                if  (swiper.activeIndex - 1 < 0)
                {
                    swiper.slideTo(projectSize - 1)
                    setProgress(100)
                }
                else
                {
                    swiper.slidePrev()
                    setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
                }
            }}>
               <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={()=> {
                if  (swiper.activeIndex + 1 >= projectSize)
                {
                    swiper.slideTo(0)
                    setProgress(100 / projectSize)
                }
                else
                {
                    swiper.slideNext()
                    setProgress(100 / projectSize * swiper.activeIndex + 100 / projectSize)
                }
            }}>
               <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    )
}


export default ProjectSlideButtons