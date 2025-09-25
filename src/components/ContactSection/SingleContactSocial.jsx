import React from 'react'

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className='text-2xl h-12 border border-lime-400 text-lime-400 rounded-full p-3 flex items-center justify-center'>
        <a href={link} className='cursor-pointer '>
            {Icon && <Icon />}
        </a>
    </div>
  );
};

export default SingleContactSocial;