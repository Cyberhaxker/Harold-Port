import GlitchText from '../GlitchText';

function HeroText() {
  return (
    <div className='flex flex-col gap-4 h-full mt-20 justify-center md:text-left sm:text-center border-lime-400 border-[0.5px] rounded-[5%] bg-black sm:size-[400px] sm:mt-8 md:size-[480px] size-[720px] shadow-xs'>
    <h2 className='lg:text-2xl sm:text-xl uppercase mt-[10px] ml-[20px] text-cyan-500 text-bold'
    >
        AI/Ml-Engineer
    </h2>
    <GlitchText
     speed={5}

     enableShadows={true}

     enableOnHover={true}
     className='inline-block md:text-[2.8rem] lg:text-6xl sm:text-4xl mt-[20px] ml-[20px] text-lime-400 text-shadow-cyan-400 bg-black text-shadow-2xs'>
    Harold G. Muchenje
    </GlitchText>  
    <p className='text-xl mt-2 ml-[20px] text-white'>
    Sharing my thoughts and experiences with the world. <br /> Building advanced
    and intelligent information systems<br /> that make a difference.
    </p>
  </div>
);

};
export default HeroText;