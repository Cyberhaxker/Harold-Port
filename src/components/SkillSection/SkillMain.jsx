import React from 'react'
import SkillText from './SkillText';
import AllSkill from './AllSkill';
import SkillSection from './SkillSection';

const SkillMain = () => {
  return (
  <div id='skills'>
    <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] mt-25 relative overflow-hidden'>
    <SkillText />
     <div className='mt-[100px] p-10  absolute left-[50%] border-lime-400 -translate-x-[50%] w-full ml-2 lg:block sm:hidden'>
        <AllSkill />
      </div>
      <div className='sm:block lg:hidden'>
        <SkillSection/>
      </div>
    </div>
  </div>);
};

export default SkillMain;