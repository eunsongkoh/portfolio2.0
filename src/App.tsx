// import { HeroUIProvider } from "@heroui/react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { motion, useScroll, useSpring } from "framer-motion";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Introduction from "./pages/Introduction";
import Multimedia from "./pages/Multimedia";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed", // Ensures it stays fixed in place while scrolling
          top: 0, // Aligns to the top of the screen
          left: 0, // Aligns to the left of the screen
          right: 0, // Stretches the div across the width
          height: 10, // Set the height of the indicator
          originX: 0, // The origin of scaling is set to the left
          zIndex: 9999, // Ensures it sits on top of other elements
          backgroundColor: "#E8D7F8", // Background color for the indicator
        }}
      />

      <About />
      <Introduction />
      <Fade direction="down" cascade>
        <Experience />
      </Fade>

      <Slide>
        <Projects />
      </Slide>
      <Zoom>
        <Multimedia />
      </Zoom>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
