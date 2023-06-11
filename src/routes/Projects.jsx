import { useState } from "react";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/grid.module.scss";

// Components Import:
import Hero from "../components/Hero";
import Input from "../components/Input";

// Json Import:
import work from "../data/work.json";

const Projects = () => {
  // Hereo Props:
  const title = "Projects";
  const subtitle = "Project Gallery";

  const placeholder = "title";
  const [search, setSearch] = useState("");
  const { data, loading, error } = useFirebase();
  return (
    <div className="page">
      <Hero title={title} subtitle={subtitle} />
      <div className={"section"} id="work">
        <Input setSearch={setSearch} placeholder={placeholder} />
        <div className={styles.contentCotainer}>
          {data
            ?.filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((value) => {
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
      </div>
    </div>
  );
};

export default Projects;
