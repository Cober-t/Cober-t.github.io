import { motion } from "framer-motion";
import { styles } from '../styles';


const Hero = () => {
	
	return (

		<section className='relative flex w-full h-screen mx-auto'>

			<div className={`${styles.paddingX} absolute inset-0 top-[120px] 
			max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className="w-5 h-5 rounded-full bg-orange"/>
					<div className="w-1 sm:h-80 h-40 orange-gradient"/>
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-black-100`}>
						Hi, I'm <span className="text-orange">Jorge</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-black-100`}>
						I develop videogames and <br className="sm:block hidden" />
						some art stuff in my spare time :D
					</p>
				</div>

			</div>
		</section>
	)
}

export default Hero