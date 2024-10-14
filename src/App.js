import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Display all sections sequentially */}
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          {/* <Contact /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
