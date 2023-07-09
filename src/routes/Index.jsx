import { Outlet } from "react-router-dom";
// Utilities Import:
import { TabTitle } from "../utilities/TabTitle";

// Components Import:
import Nav from "../components/Nav";

// Section Import:
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Posts from "../sections/Posts";
import Contact from "../sections/Contact";

const Index = () => {
  TabTitle("Dev Rook 🚀 | Home");
  return (
    <div className="page">
      <Nav changeHeight={(80 * window.innerHeight) / 100} />
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
