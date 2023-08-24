

import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Footer from "./components/sections/Footer";
import ButtonToTop from "./components/ButtonToTop";

import React, {useEffect, useState} from "react"
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";



function App() {

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
        <Navbar />
      </header>

      
      <main className={"main"}>
        <div style={{display: isVisible ? 'block' : 'none'}} onClick={goTop}>
          <ButtonToTop />
        </div>
        <About />
        <Skills  />
        <Projects  />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
