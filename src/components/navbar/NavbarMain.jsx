import React from 'react';
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { TiThMenu } from "react-icons/ti";
import { useState } from 'react';

 //Main NavBar
 
function NavbarMain() {
  const [menuOpen,setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className='max-w-[1300px] mx-auto p-4 w-full absolute left-[50%] -translate-x-[50%] z-20 flex gap-2 mt-2'>
      <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-lime-500 shadow-xs'>
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div className='flex lg:hidden sm:block p-6 items-center justify-center bg-black rounded-full border-[0.5px] border-lime-500 shadow-xs'>
         <button className='text-2xl text-white p-3 border border-lime-500 shadow-xs rounded-full' onClick={toggleMenu}>
         <TiThMenu />
         </button>
      </div>

    </nav>
  )
}

export default NavbarMain