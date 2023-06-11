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
import posts from "../data/posts.json";

const Posts = () => {
  // Hereo Props:
  const title = "Posts";
  const subtitle = "Indulge in my media";

  //   Intput:
  const [search, setSearch] = useState("");
  const placeholder = "title";

  //   const { data, loading, error } = useFirebase();
  const [data, setData] = useState(posts);
  return (
    <div className="page">
      <Hero title={title} subtitle={subtitle} />
      <div className={"section"} id="work">
        <Input setSearch={setSearch} placeholder={placeholder} />
        <div className={styles.contentCotainer}>
          {data?.map((value) => {
            return (
              <a
                href={value.link}
                key={value.id}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.card}>
                  <div className={styles.imgContainer}>
                    <img
                      src={value.image}
                      alt="Under Development"
                      className={styles.img}
                    />
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

export default Posts;
