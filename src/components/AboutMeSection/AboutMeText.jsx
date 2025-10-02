import React from 'react'
import ScrollFloat from '../ScrollFloat';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center mt-4'>
        <ScrollFloat

         animationDuration={1}

         ease='back.inOut(2)'

         scrollStart='center bottom+=50%'

         scrollEnd='bottom bottom-=50%'

         stagger={0.03}

        >About Me
        </ScrollFloat>
        <p className='text-white text-bold'> 
        Hello World!, I am an aspiring AI or ML engineer with a strong passion of building advanced inteligent computer systems or 
        advanced inteligent information systems to solve variouse real world problems.
        I am the person who is driven by creativity, hard work and innovation. With a strong focus on delivering high-quality solutions 
        that meet the needs of users and businesses alike.2027,I will graduate with a BSc Honors Degree in Data science and informatics from the Midlands State University Gweru in Zimbabwe.
        So far, I have honed my skills in data science, machine learning and software development.
        </p>
        
    </div>
  );
};

export default AboutMeText;