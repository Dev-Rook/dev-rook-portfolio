import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/section/projects.module.scss";

// Json Import:
import projectData from "../data/work.json";

const Projects = () => {
  const [projects, setProject] = useState(projectData);
  return (
    <div className="section">
      <p className="sectionTitle">Projects</p>
      <div className={styles.project_Grid}>
        {projects?.map((value) => {
          return (
            <div className={styles.card} key={value.id}>
              <div className={styles.imgContainer}>
                <img src={value.image} alt="" className={styles.img} />
              </div>
              {value.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
