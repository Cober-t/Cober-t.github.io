const styles = {
    paddingX: "xs:px-10 sm:px-10 px-6",
    paddingY: "xs:px-10 sm:py-10 py-6",
    padding: "xs:px-16 sm:px-16 px-6 sm:py-16 py-10",

    // CONTACT
    sectionHeadText:
    "text-white font-black-100 md:text-[60px] sm:text-[50px] xs:text-[50px] text-[30px]",
    
    // INDEX
    coreIndex:"fixed z-[90] flex flex-col left-full bottom-0 w-fit h-fit \
    uppercase font-titleSections font-semibold gap-y-4 \
    items-end justify-end text-[14px]",
    indexMainNode: "flex hover:bg-red-700 min-w-[250px] items-center justify-between font-regular select-none",
    indexMainNodeWidth: "opacity-0 bg-transparent w-20",

    indexNode: "flex hover:bg-red-700 max-w-[250px] items-center justify-end font-regular select-none",
    indexNodeWidth: "opacity-0 bg-transparent w-10",

    // SPLASH SCREEN
    coreSplashScreen: "absolute z-30 overflow-hidden flex flex-row \
    h-screen w-full justify-center items-center",
    // splashScreenTitle: "items-center justify-center whitespace-pre-line text-transparent",
    splashScreenText: "w-full font-title flex items-center font-extrabold justify-center \
    tracking-normal text-center h-screen \
    xs:leading-[35vw] sm:leading-[33vw] md:leading-[26vw] xl:leading-[24vw]",
    splashScreenBackgroundStyle: "flex flex-row h-screen w-full \
    bg-center bg-cover bg-no-repeat bg-clip-text",
    navBar:"absolute z-50 justify-center flex flex-row w-full h-screen items-end gap-5",
    
    // NODES
    coreNodeStyle: "flex flex-row text-center items-center justify-center \
    whitespace-pre-line w-full h-screen",
    nodeTitleText: "flex flex-row font-['RobotoCondensed'] font-regular uppercase tracking-wide \
    w-full pl-[50px] pr-[50px] mb-[50px] justify-center \
    xs:text-[10vw] sm:text-[10vw] md:text-[8vw]",
    nodeDescriptionText: "flex xs:flex-col md:flex-row max-w-[1000px] tracking-normal uppercase\
    font-['Montserrat'] font-semibold p-10 \
    xs:text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.75vw]",
    navCircle: "h-5 w-5 rounded-full mb-[50px]",
    animationSize: "w-[200px] h-[200px]",

    backgroundNode: "sticky bottom-0 h-screen w-full \
    mt-[-20vh] bg-center bg-cover bg-no-repeat"
};

export { styles };