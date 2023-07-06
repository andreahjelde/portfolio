
import "./styles/App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className="App">
      <header className={"header"}>
        <Navbar />
      </header>

      <main className={"main"}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className={"footer"}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
