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
            <a
              href={value.demoLink}
              target="_blank"
              rel="noreferrer"
              key={value.id}
            >
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={value.image} alt="" className={styles.img} />
                </div>

                <div className={styles.titleContainer}>
                  <p className={styles.title}>{value.name}</p>
                </div>
                <p className={styles.description}>{value.description}</p>
              </div>
            </a>
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
