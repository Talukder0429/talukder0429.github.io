import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Log from "./components/Log";
import Nav from "./components/Nav";
import Notes from "./components/Notes";
import Projects from "./components/Projects";
import Work from "./components/Work";

const App = () => (
  <>
    <Nav />
    <div className="mx-auto max-w-[1040px] px-6">
      <main>
        <Hero />
        <Work />
        <Notes />
        <Log />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  </>
);

export default App;
