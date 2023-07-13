import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Imports:
import useAxios from "../hooks/useAxios";
import useFirebase from "../hooks/useFirebase";
import useWindowWidth from "../hooks/useWindowWidth";

// Styles Import:
import "../styles/comps/projectCard.scss";
import styles from "../styles/section/projectGrid.module.scss";
import headStyles from "../styles/other/projectSectionHead.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Material UI Imports:
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Json Import:
import projectsData from "../data/work.json";

// Components Import:
import Input from "../components/Input";
import ProjectSlider from "./ProjectSlider";

const ProjectGrid = ({title, table, type}) => {
  const { data, loading, error } = useFirebase(table);
  const [projects, setProjects] = useState(projectsData);
  const { windowWidth } = useWindowWidth();
  const [search, setSearch] = useState("");

  const filteredItems = data.filter((item) => item.type === type);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const number = projects.length;

  return (
    <>
      {windowWidth >= 580 ? (
        <div className={"section"} id="">
          <div className={headStyles.head}>
            <p className={headStyles.title}>{title}</p>
            <p className={headStyles.project_number}>{number} Projects</p>
          </div>
          <div className={styles.contentCotainer}>
            {projects?.map((value) => {
              return (
                <Link to={`/projects/${value.id}`} key={value.id}>
                  <div className="card">
                    <div className="img_container">
                      <img src={value.image} alt="" className="img" />
                    </div>
                    <div className="info_container">
                      <p className="title">{value.name}</p>
                      <p className="description">
                        {value.description.slice(0, 100)}...
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <ProjectSlider
          data={data}
          loading={loading}
          error={error}
          projects={projects}
          title={title}
          number={number}
        />
      )}
    </>
  );
};

export default ProjectGrid;

{
  /* <DoesntExist search={search} /> */
}
