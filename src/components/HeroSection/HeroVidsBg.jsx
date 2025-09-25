import videoBg from '../../videos/cmatrix.mp4'

export const HeroVidsBg = () => {
  return (
    <div>
      <video src={videoBg} autoPlay loop muted className='max-h-[408px]  md:w-[380px] lg:w-[580px] object-contain border-lime-400 border-[0.5px] rounded-b-[4%] rounded-[4%] shadow-xs md:ml-1.5 lg:ml-14 sm:hidden md:hidden lg:block opacity-100'>
      </video>
    </div>
  );
}

export default HeroVidsBg; 

