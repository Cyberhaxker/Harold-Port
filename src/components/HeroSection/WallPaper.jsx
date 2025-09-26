import React from 'react'
import wallPaper from '../../videos/engineer.mp4';

export const WallPaper = () => {
  return (
    <div>
        <video src={wallPaper} autoPlay loop muted className='max-h-[408px]  w-[380px] object-contain border-lime-400 border-[0.5px] rounded-b-[4%] rounded-[4%] shadow-xs md:ml-1.5 sm:hidden md:block lg:hidden opacity-100'>
      </video>
    </div>
  );
};

export default WallPaper;
