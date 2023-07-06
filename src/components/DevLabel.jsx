import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/comp-styles/errorLabel.module.scss";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

import StartIcon from "@mui/icons-material/Start";

const DevLabel = () => {
  const { scrollUp } = useScrollUp();
  return (
    <div className={"section"}>
      <div className={styles.Content_Container}>
        <h1 className={styles.Title}>Dev</h1>
        <h3 className={styles.Subtitle}>Under Development, Stay Tuned</h3>
        <p className={styles.Text}>
          But if you don't change your direction, and if you keep looking, you
          may end up where you are heading.
        </p>
        <div className={styles.CallToActionBox}>
          <Link to={"/"}>
            <button onClick={scrollUp} className={styles.View_Button}>Home</button>
          </Link>
          <StartIcon
            sx={{ color: "red", fontSize: 25 }}
            className={styles.arrow}
          />
        </div>
      </div>
    </div>
  );
};

export default DevLabel;
