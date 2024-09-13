
const Hero = () => {
  return (
    <div className="container mx-auto h-full">
      <div className={`relative w-full flex flex-col xl:flex-row
      items-center justify-between xl:pt-8 xl:pb-24 xl:mt-10`}>
        
          <img src="" alt="" className="bg-orange w-[30vh] h-[30vh] xl:w-[45vh] xl:h-[45vh] 
          mx-auto mb-8 rounded-full mix-blend-lighten"/>

          <div className="items-center text-center xl:text-left xl:pr-[100px]">
            <span className="text-[3vw]">Software developer</span>
            <h1 className={`text-[5vw] mb-5 leading-[1.5]`}>
              Hi, I'm <span className='text-orange'>Jorge Tejado</span>
            </h1>
            <p className={`max-w-[50vw] text-pretty text-xl mb-9 text-white/80`}>
            I develop 3D visuals, user interfaces and web applications
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button className="outline rounded-full uppercase flex items-center
              outline-2 p-2 outline-darkOrange text-orange text-sm">
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
