import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/sec-styles/grid.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";

// Json Import:
import posts from "../data/posts.json";

const Posts = () => {
  const [data, setData] = useState(posts);
  const { scrollUp } = useScrollUp();
  //   const { data, loading, error } = useFirebase();
  return (
    <div className={"section"} id="work">
      <p className={"sectionTitle"}>Posts</p>

      <div className={styles.contentCotainer}>
        {data?.map((value) => {
          return (
            <Link to={value.link} key={value.id}>
              <div className={styles.card}>
                <div className={styles.imgContainer}>
                  <img src={value.image} alt="Under Development" className={styles.img} />
                </div>

                <p className={styles.description}>{value.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <br />
      <br />
      <div className={"CallToActionBox"}>
        <Link to={"/posts"} onClick={scrollUp}>
          <button className={"Button"}>Vew All</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Posts;
