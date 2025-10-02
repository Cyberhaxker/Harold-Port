import React from "react";
import { LuCircleArrowOutDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <button onClick={() => alert("Call +263787601944")} className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-300 border flex items-center gap-1 bg-gradient-to-r from-cyan-300 to-lime-300 hover:border-lime-500  hover:shadow-xs hover:scale-110 transition-all duration-500'>
        Hire Me  
        <div className='sm:hidden md:block text-2xl'>
        <LuCircleArrowOutDownRight />
        </div>
    </button>
  )
}

export default NavbarBtn  