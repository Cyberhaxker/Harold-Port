import React from 'react'

const SingleInfo = ({ text, Image }) => {
  return (
    <div className='flex gap items-center justify-start'>
        {Image && <Image className='text-3xl'/>}
        <p className='text-white mt-4'>{text}</p>
    </div>
  );
};

export default SingleInfo;