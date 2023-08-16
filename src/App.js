
import "./styles/App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Typewriter from "./Components/Typewriter"
import { useRef } from "react";
import ButtonToTop from "./Components/ButtonToTop";

import React, {useEffect, useState} from "react"


function App() {

  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //For til topp-knapp
  const [isVisible, setIsvisible] = useState(false)

  //Hvis du scroller 100px nedover settes isVisible til å være sann
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100 && window.innerWidth >= 768) {
        setIsvisible(true)
      }
            else {
              setIsvisible(false)
            }
    })
  }, [])

  //Når funksjonen goTop blir kalt, vil siden gå til toppen (0 pixler)
  const goTop = () => {
    window.scrollTo ({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (

    <div className={"App"}>
      <header className={"header"}>
        <div className={"container_navbar"}>
            <button className={"navbarBtn"} onClick={() => scrollToSection(about)}>Om meg</button>
            <button className={"navbarBtn"} onClick={() => scrollToSection(skills)}>Ferdigheter</button>
          <button className={"navbarBtn"} onClick={() => scrollToSection(projects)}>Prosjekter</button>
          <button className={"navbarBtn"} onClick={() => scrollToSection(contact)}>Kontakt</button>
        </div>
      </header>

      <main className={"main"}>
        <button style={{display: isVisible ? 'block' : 'none'}} onClick={goTop}>
          <ButtonToTop />
        </button>

        <Typewriter />
        <About ref={about}/>
        <Skills ref={skills} />
        <Projects ref={projects} />
        <Contact ref={contact}/>
      </main>

        <Footer />

    </div>
  );
}

export default App;
