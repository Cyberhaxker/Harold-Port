import NavbarMain from "./components/navbar/NavbarMain"
import HeroMain from "./components/HeroSection/HeroMain";
import SubHeroSection from "./components/HeroSection/SubHeroSection";
import AboutMain from "./components/AboutMeSection/AboutMain";
import SkillMain from "./components/SkillSection/SkillMain";
import SubSkill from "./components/SkillSection/SubSkill";
import ContactMeMain from "./components/ContactSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";


function App() {
  
  return (

    <div className="bg-black">
      
       <NavbarMain />
       <HeroMain />
       <AboutMain/> 
       <SubHeroSection />
       <SkillMain/>
       <SubSkill/>
       <ContactMeMain/>
       <FooterMain/>

      

    </div>
  );
}

export default App;
