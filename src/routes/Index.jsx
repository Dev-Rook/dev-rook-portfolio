import { Outlet } from "react-router-dom";
// Components Import:

// Section Import:
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

const Index = () => {
  const title = "Developer Rook";
  const subtitle = "Fullstack Developer";
  return <div className="page">
    <Hero />
    <Intro />
    <Projects />
    <Skills />
    <Outlet />
  </div>;
};

export default Index;
