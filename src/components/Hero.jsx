import { div } from "three/examples/jsm/nodes/Nodes.js"
import { styles } from "../styles"

const Hero = () => {
  return (
    <div className="container mx-auto h-full">
      <div className={`relative w-full flex flex-col xl:flex-row
      text-center items-center justify-between xl:pt-8 xl:pb-24 xl:mt-10`}>
        
          <img src="" alt="" className="bg-orange w-[30vh] h-[30vh] xl:w-[45vh] xl:h-[45vh] 
          mx-auto mb-8 rounded-full mix-blend-lighten"/>

          <div className="text-center xl:text-left ml-[2vw]">
            <span className="text-[3vw]">Software developer</span>
            <h1 className={`text-[5vw] mb-5 leading-[1.5]`}>
              Hi, I'm <span className='text-orange'>Jorge Tejado</span>
            </h1>
            <p className={`max-w-[500px] text-xl mb-9 text-white/80`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button className="outline rounded-full uppercase flex items-center
              outline-2 p-2 outline-darkOrange text-orange text-[1.3vw]">
                <span>
                  Download CV
                </span>
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
