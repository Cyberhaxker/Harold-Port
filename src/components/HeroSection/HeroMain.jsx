import HeroText from './HeroText';
import HeroVidsBg from './HeroVidsBg';
import AboutLine from './AboutLine';
import Paper  from './Paper';

function HeroMain() {
  return ( 
  <div className='pt-40 pb-16'>
    <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 mt-0
    '>
      <HeroText /> 
      <HeroVidsBg /> 
      <Paper />
    
    </div>
    <div className='max-w-[1200px] mt-50 mx-auto'><AboutLine /></div>
  </div>

  ); 
};

export default HeroMain;