import { Link } from "react-router-dom";
import { useState } from "react";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/bio.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";

// Component Import:

// Json Import:
import social from "../data/social.json";

const Bio = () => {
  const { scrollUp } = useScrollUp();
  const [data, setData] = useState(social);
  return (
    <div className="section">
      <p className={"sectionTitle"}>Bio</p>
      <div className={styles.contentContainer}>
        <p className={styles.bio}>
          I am a Freelance Fullstack developer with a passion for building
          digital services/things. I find planing, designing and the
          implementing logic to solve problems with code absolutely fun. I
          currently work remotely with a selected freelance client base, however
          I am interested in ambitious or large team based projects.
        </p>
        <div className={styles.socialCard}>
          <div className={styles.iconContainer}>
            {data?.map((item) => {
              return (
                <a href={item.link} target="_blank" rel="noreferrer" key={item.id}>
                  <div className={styles.card}> 
                    <div className={styles.imageContainer}>
                      <img src={item.image} alt="" className={styles.img} />
                    </div>
                    <p className={styles.name}>{item.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className={"CallToActionBox"}>
        <Link to={"/profile"} onClick={scrollUp}>
          <button className={"Button"}>About Me</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Bio;
