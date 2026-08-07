import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className="px-5 pb-10 flex flex-col gap-16 md:px-10 lg:px-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
