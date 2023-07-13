import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Imports:
import useAxios from "../hooks/useAxios";
import useFirebase from "../hooks/useFirebase";
import useWindowWidth from "../hooks/useWindowWidth";

// Styles Import:
import styles from "../styles/section/projectGrid.module.scss";
import "../styles/comps/projectCard.scss";

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

const ProjectGrid = () => {
  const table = `projects`;
  const { data, loading, error } = useFirebase(table);
  const [projects, setProjects] = useState(projectsData);
  const {windowWidth} = useWindowWidth();
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const placeholder = "Find a project";

  return (
    <div className={"section"} id="">
      <p className="title">Websites</p>
      {windowWidth >= 580 ? (
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
      ) : <ProjectSlider data={data} loading={loading} error={error} projects={projects} /> }
    </div>
  );
};

export default ProjectGrid;

{
  /* <DoesntExist search={search} /> */
}
