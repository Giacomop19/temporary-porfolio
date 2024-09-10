import About from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";

export default function Home() {
  return (
      <div>
        <main>
          
          <div id="about">
            <About/>
          </div>
          <div id="projects">
            <Projects/>
          </div>
          <div id="experience">
            <Experience/>
          </div>
          
        </main>
      </div>
    
    
  );
}
