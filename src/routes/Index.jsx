import { Outlet } from "react-router-dom";
// Utilities Import:
import { TabTitle } from "../utilities/TabTitle";

// Components Import:

// Section Import:
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Posts from "../sections/Posts";
import Contact from "../sections/Contact";
import ContactForm from "../components/ContactForm";

const Index = () => {
  TabTitle("Dev Rook 🚀 | Home");
  const title = "Developer Rook";
  const subtitle = "Fullstack Developer";
  return (
    <div className="page">
      <Hero />
      <Intro />
      <Projects />
      <Skills />
      <Outlet />
      <Posts />
      <Contact />
    </div>
  );
};

export default Index;
