import ThemeProvider from "./ThemeProvider";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import PerformanceOptimizer from "./PerformanceOptimizer";

const Portfolio = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <PerformanceOptimizer />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;