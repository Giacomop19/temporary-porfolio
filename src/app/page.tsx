import Projects from "./projects/page";
import Experience from "./experience/page";
import Intro from "./intro/page";
import About from "./about/page";

export default function Home() {
  return (
      <div>
        
          <div id="intro">
            <Intro/>
          </div>
          <div id="about">
            <About/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
          <div id="experience">
            <Experience/>
          </div>
          
        
      </div>
    
    
  );
}
