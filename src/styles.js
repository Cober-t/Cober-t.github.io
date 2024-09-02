const styles = {
    paddingX: "xs:px-10 sm:px-10 px-6",
    paddingY: "xs:px-10 sm:py-10 py-6",
    padding: "xs:px-16 sm:px-16 px-6 sm:py-16 py-10",

    // CONTACT
    sectionHeadText:
    "text-white font-black-100 md:text-[60px] sm:text-[50px] xs:text-[50px] text-[30px]",
    
    // INDEX
    indexMainNode: "flex hover:bg-red-700 min-w-[250px] items-center justify-between font-regular select-none",
    indexMainNodeWidth: "opacity-0 bg-transparent w-20",

    indexNode: "flex hover:bg-red-700 max-w-[250px] items-center justify-end font-regular select-none",
    indexNodeWidth: "opacity-0 bg-transparent w-10",

    // SPLASH SCREEN
    coreSplashScreen: "absolute z-30 overflow-hidden flex flex-row \
    h-screen w-full justify-center items-center",
    splashScreenTitle: "items-center justify-center whitespace-pre-line text-transparent",
    splashScreenText: "tracking-tighter font-['Ignite'] justify-center \
    text-center h-screen leading-[280px] w-full flex flex-row items-center \
    font-regular md:text-[350px] sm:text-[20rem] xs:text-[10rem]",
    splashScreenBackgroundStyle: "flex flex-row h-screen w-full \
    bg-center bg-cover bg-no-repeat bg-clip-text",
    navBar:"absolute z-50 justify-center flex flex-row w-full h-screen items-end gap-5",
    
    // NODES
    coreNodeStyle: "flex flex-row text-center items-center justify-center \
    whitespace-pre-line w-full h-screen text-[60px] uppercase",
    
    nodeTitleText: "flex flex-row flex-nowrap \
    w-full pl-[50px] pr-[50px] mb-[50px]",
    nodeDescriptionText: "flex flex-row max-w-[750px] tracking-wider \
    h-full text-[24px] font-regular",
    navCircle: "h-5 w-5 rounded-full mb-[50px]",
    animationSize: "w-[200px] h-[200px]",

    backgroundNode: "sticky bottom-0 h-screen w-full \
    -mb-[750px] bg-center bg-cover bg-no-repeat"
};

export { styles };