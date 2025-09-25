import React from 'react'
import { FaPython } from "react-icons/fa6";
import { SiAnaconda } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaRProject } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import SingleSkill from './SingleSkill';

const skills = [
    {
        skill:"Python",
        icon: FaPython,
    },
    {
        skill:"Anaconda",
        icon: SiAnaconda,
    },
    {
        skill:"Django",
        icon: SiDjango,
    },
    {
        skill:"R",
        icon: FaRProject,
    },
    {
        skill:"Java",
        icon: FaJava,
    },
    {
        skill:"HTML",
        icon: FaHtml5,
    },
    {
        skill:"React",
        icon: FaReact,
    },
    {
        skill:"Tailwind CSS",
        icon: RiTailwindCssFill,
    },
    {
        skill:"MySQL",
        icon: SiMysql,
    },
    {
        skill:"PostgreSQL",
        icon: BiLogoPostgresql,
    },

];
const SkillSection = () => {
  return ( 
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index) => {
          return (
                  <div key={index} className='flex flex-col items-center'>
                    <item.icon className='text-8xl text-lime-400 margin-lime-400 hover:scale-110 transition-transform duration-300 shadow-xs rounded-[25%]'/>
                    <p className='text-center mt-4 text-white'>{item.skill}</p>  
                  </div>
                ) 
    })}
    </div>
  );
};

export default SkillSection;