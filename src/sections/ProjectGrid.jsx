import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Imports:
import useAxios from "../hooks/useAxios";
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/section/projectGrid.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Material UI Imports:
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Components Import:
import Input from "../components/Input";

const ProjectGrid = () => {
  const table = `projects`;
  const { data, loading, error } = useFirebase(table);
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
      <div className={styles.gridHeader}>
        {/* <p className={"sectionTitle"}>Project Grid</p> */}
        <Input
          setSearch={setSearch}
          search={search}
          placeholder={placeholder}
        />
      </div>

      <div className={styles.contentCotainer}>
        {data?.map((value) => {
          return (
            <div className={styles.card} key={value.id}>
              <div className={styles.imgContainer}>
                <img
                  src={value.image}
                  alt="Under Development"
                  className={styles.img}
                />
              </div>
              <div className={styles.info_Container}>
                <p className={styles.title}>{value.name}</p>
                <p className={styles.description}>{value.description}</p>
              </div>
              <div className={styles.action_container}>
                <p className={styles.type}>{value.type}</p>

                <div className={styles.actions}>
                  <Link to={`/project/${value.id}`}>
                    <VisibilityIcon
                      sx={{ color: "white", cursor: "pointer" }}
                    />
                  </Link>
                  <Link to={value.demoLink}>
                    <LaunchIcon sx={{ color: "white", cursor: "pointer" }} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;

{
  /* <DoesntExist search={search} /> */
}
