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
import Marquee from "react-fast-marquee";


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

const AllSkill = () => {
  return (
    <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <div className='flex gap-4'>
            {skills.map((item,index) => {
                return ( <SingleSkill key={index} imgSvg={<item.icon />} />);
            })}
        </div>
    </Marquee>
  );
};

export default AllSkill;