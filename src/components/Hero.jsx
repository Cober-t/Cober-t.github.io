import { downloadCV } from "../constants";

const Hero = () => {
  return (
    <div className="container mx-auto h-full">
      <div className={`relative w-full flex flex-col xl:flex-row 
      items-center justify-center xl:pt-8 xl:pb-24 xl:mt-10 gap-x-[10vw]`}>
        
          <img src="" alt="" className="bg-accent w-[30vh] h-[30vh] xl:w-[45vh] xl:h-[45vh] mb-8 rounded-full"/>

          <div className="items-center flex flex-col justify-center text-center xl:text-left xl:pr-[100px]">
            <span className="text-[28px] xl:text-[42px]">Software developer</span>
            <h1 className={`text-[42px] xl:text-[62px] mb-5 leading-[1.5] xl:whitespace-nowrap`}>
              Hi, I'm <span className='text-accent'>Jorge Tejado</span>
            </h1>
            <p className={`max-w-[70vw] text-[18px] xl:text-[21px] mb-9 text-white/70`}>
              I develop 3D visuals, user interfaces and web applications
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href={downloadCV} download="curriculum"
                className="outline rounded-full uppercase flex items-center
                outline-2 p-2 outline-darkOrange text-accent text-sm select-none">
                  Download CV
                </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
