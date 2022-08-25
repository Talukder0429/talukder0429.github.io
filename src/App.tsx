import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="container max-w-4xl mx-auto px-4 h-full text-primary">
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
