import { downloadCV } from "../constants";
import { Link } from "react-router-dom";


const Hero = () => {

  return (
    <div className="container mx-auto h-full">
      <div className={`relative w-full flex flex-col xl:flex-row 
      items-center justify-center xl:pt-8 xl:pb-24 xl:mt-10 gap-x-[10vw] select-none`}>
        
          <div style={{'--image-url': `url("./profilePic.png")`}}
          className="w-[30vh] h-[30vh] xl:w-[45vh] xl:h-[45vh] mb-8 rounded-full translate-x-6
          bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center"/>

          <div className="items-center flex flex-col justify-center text-center xl:text-left xl:pr-[100px]">
            {/* <span className="text-[28px] xl:text-[36px]">Desarrollador de software y programador de gráficos</span> */}
            <h1 className={`text-[42px] xl:text-[62px] mb-5 leading-[1.5] xl:whitespace-nowrap`}>
              Hola, soy <span className='text-accent'>Jorge Tejado</span>
            </h1>
            <p className={`max-w-[70vw] text-[18px] xl:text-[21px] font-semibold mb-9 text-white/70`}>
              I develop 3D visuals, user interfaces and web applications
            </p>

            <div className="w-full flex flex-col xl:flex-row items-center justify-center gap-x-10">
              <div className="flex flex-col xl:flex-row items-center gap-8 transition-all
              hover:bg-yellow-100 xl:mb-0 mb-6">
                  <a href={downloadCV} download="curriculum"
                  className="outline w-[120px] uppercase justify-center flex items-center font-tags text-2xl tracking-wider font-thin
                  outline-2 p-2 outline-darkOrange text-accent select-none">
                    Download CV
                  </a>
              </div>

              <div className="flex flex-col xl:flex-row items-center gap-8 transition-all
              hover:bg-yellow-100">
                  <Link to="/contact"
                  className="outline w-[120px] uppercase justify-center flex items-center font-tags text-2xl tracking-wider font-thin
                  outline-2 p-2 outline-darkOrange text-accent select-none">
                    Contact Me
                  </Link>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
};

export default Hero;
