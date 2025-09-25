import React from 'react'

function SubHeroSection() {
  return ( 
  <div 
  className='sm:w-[400] md:w-full lg:w-full border-y-[0.5px] border-lime-400 shadow-xs text-lime-200 flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-stone-500 mt-[140px] mb-15'
  >
     <p className='md:block sm:hidden'>Team Work</p>
     <p className='md:block sm:hidden'>Hard Work</p>
     <p>Stategic Work</p>
  </div>
  );
};

export default SubHeroSection;