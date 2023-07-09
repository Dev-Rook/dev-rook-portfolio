import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Imports:
import useAxios from "../hooks/useAxios";
// import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/section/projectGrid.module.scss";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBoxIcon from "@mui/icons-material/AddBox";

// Components Import:
import Input from "../components/Input";

// Json Import:
import projectData from "../data/work.json";

const ProjectGrid = () => {
  const url = `https://fakestoreapi.com/products`;
  // const url = `https://dummyjson.com/products`;
  // const { data, loading, error } = useAxios(url);
  const [data, setData] = useState(projectData);
  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
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
              <div className={styles.actionBox}>
                <AddBoxIcon sx={{ fontSize: 30, color: "red" }} />
                <Link to={`/project/${value.title}`}>
                  <VisibilityIcon sx={{ fontSize: 30, color: "black" }} />
                </Link>
              </div>
              <div className={styles.imgContainer}>
                <img
                  src={value.preview}
                  alt="Under Development"
                  className={styles.img}
                />
              </div>
              <p className={styles.text}>{value.title}</p>
              {/* <p className={styles.text}>{value.description}</p> */}
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
