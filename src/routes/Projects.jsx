import React, {useState} from "react";

// Components Import:
import Nav from "../components/Nav";
import Header from "../components/Header";
import Input from "../components/Input";

// Sections Import:
import ProjectGrid from "../sections/ProjectGrid";

const Projects = () => {
  const title = "Porject Gallery";
  const subTitle = "Browse my projects";

  return (
    <div className="page">
      <Nav changeHeight={(40 * window.innerHeight) / 100} />
      <Header title={title} subTitle={subTitle} />
      <ProjectGrid />
    </div>
  );
};

export default Projects;
