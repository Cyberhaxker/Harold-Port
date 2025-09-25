import React from 'react'

const AboutMePic = () => {
  return (
    <div className='h-[500px] w-[300px] relative sm:hidden md:block'>
        <div className='h-[500px] w-[300px] rounded-[100px] border-[0.5px] border-lime-400 border-dashed shadow-xs absolute overflow-hidden'>
          <img src="images/Mambo.png" alt="about me pic" 
          className='h-full w-auto mt-[-20] object-cover'/>
        </div>
        

    </div>
  );
};

export default AboutMePic;