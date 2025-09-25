import React from 'react'

const SingleSkill = ({ text, imgSvg }) => {
  return (
    <div className=''>
        <div className='flex flex-col items-center gap-2 justify-evenly relative'>
            <div className='bg-black text-cyan-400 text-shadow-lime-500 h-[90px] w-[90px] flex items-center justify-center rounded-[25%] hover:text-lime-400 duration-500 text-6xl border-[2px] border-lime-400'>
                {imgSvg}
            </div>
            <p className='text-white font-bold'>{text}</p>
        </div>
        
    </div>
  );
};

export default SingleSkill;