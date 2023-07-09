import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks:
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/section/projects.module.scss";

// Json Import:
import projectData from "../data/work.json";

const Projects = () => {
  const table = `projects`;
  const { data, loading, error } = useFirebase(table);
  const [projects, setProject] = useState(projectData);
  return (
    <div className="section">
      <p className="sectionTitle">Projects</p>
      <div className={styles.project_Grid}>
        {data?.slice(0, 3).map((value) => {
          return (
            <div className={styles.card} key={value.id}>
              <Link to={value.demoLink}>
                <div className={styles.imgContainer}>
                  <img src={value.image} alt="" className={styles.img} />
                </div>
              </Link>
              {value.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
