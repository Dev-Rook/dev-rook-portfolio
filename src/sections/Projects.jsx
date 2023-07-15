import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks:
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/section/projects.module.scss";

// Json Import:
import projectTypeData from "../data/projectType.json";

// Component Import:
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  const table = `projects`;
  const { data, loading, error } = useFirebase(table);
  const [projects, setProject] = useState(projectTypeData);
  return (
    <div className="section">
      <p className="sectionTitle">Projects</p>

      <ProjectGrid  title="Websites" table="projects" type="websites" />
    </div>
  );
};

export default Projects;
