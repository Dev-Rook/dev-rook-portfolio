import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/sec-styles/grid.module.scss";

// Json Import:
import work from "../data/work.json";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";

const Work = () => {
  // const [data, setData] = useState(work);
  const { scrollUp } = useScrollUp();
  const { data, loading, error } = useFirebase();
  return (
    <div className={"section"} id="work">
      <p className={"sectionTitle"}>Work</p>

      <div className={styles.contentCotainer}>
        {data?.map((value) => {
          return (
            <div className={styles.card} key={value.id}>
              <div className={styles.imgContainer}>
                <img src={value.image} alt="" className={styles.img} />
              </div>

              <div className={styles.titleContainer}>
                <p className={styles.title}>{value.name}</p>
                <a href={value.demoLink} target="_blank" rel="noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"
                    />
                  </svg>
                </a>
              </div>
              <p className={styles.description}>{value.description}</p>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div className={"CallToActionBox"}>
        <Link to={"/projects"} onClick={scrollUp}>
          <button className={"Button"}>Vew All</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Work;
