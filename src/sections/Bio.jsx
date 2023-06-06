import { Link } from "react-router-dom";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/bio.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";

// Component Import:

const Bio = () => {
  const { scrollUp } = useScrollUp();
  return (
    <div className="section">
      <p className={"title"}>Bio</p>
      <div className={styles.contentContainer}>
        <p className={styles.bio}>
          I am a Front-end Web Developer with a passion for
          constructing/implementing digital web services & solving real-life
          problems with code. I currently work remotely with a selected
          freelance client base, however I am interested in ambitious or large
          team based projects. &nbsp;
        </p>
      </div>
      <div className={"CallToActionBox"}>
        <Link to={"/projects"} onClick={scrollUp}>
          <button className={"Button"}>About Me</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Bio;
