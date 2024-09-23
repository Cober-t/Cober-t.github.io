import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

const ProjectSlideButtons = ({ containerStyles, btnStyles, iconsStyles, projectSize }) => {

    const swiper = useSwiper()

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={()=> {
                if  (swiper.activeIndex === 0)
                    swiper.slideTo(projectSize - 1)
                else
                    swiper.slidePrev()
            }}>
               <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={()=> {
                if  (swiper.activeIndex + 1 >= projectSize)
                    swiper.slideTo(0)
                else
                    swiper.slideNext()
            }}>
               <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    )
}


export default ProjectSlideButtons