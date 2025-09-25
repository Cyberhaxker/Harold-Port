import React from 'react'

const links = [
  { link: "Home", section: "home" },
 
];

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lime-400 shadow-xs mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] h-10 mx-auto'>
            <div className='flex flex-row ml-5'>
                <div>
                  <p className='text-2xl text-stone-200'>Harold G. Muchenje</p>
                </div>
                <div>
                  <p className='text-3xl text-lime-400 text-shadow-xs font-extrabold ml-2'>@MAMBOC001Dev.</p>
                </div>
            </div>
            <div className='flex gap-4 text-stone-200 text-xl border-lime-400 mr-5'>
                {links.map((item,index)=> {
                    return <button type='button' className='hover:text-lime-500 transition-all duration-500' key={index}>
                        <a href="#" className='no-underline'>
                            {item.link}
                        </a>
                </button> 
                })}
            </div>
        </div>
        <p className='max-w-[1200px] mx-auto text-stone-200 text-sm px-4 mt-2 mb-4'>&copy; 2025 Mambo@C001Dev. All rights reserved.</p>
    </div>
  );
};

export default FooterMain;