import React from "react";

// Components Import:
import Nav from "../components/Nav";
import Header from "../components/Header";


const Projects = () => {
  const title = "Porject Gallery";
  const subTitle = "Browse my projects";
  return (
    <div className="page">
      <Nav changeHeight={(40 * window.innerHeight) / 100} />
      <Header title={title} subTitle={subTitle} />

    </div>
  );
};

export default Projects;
