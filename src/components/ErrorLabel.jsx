import { Link, useNavigate } from "react-router-dom";

import "../styles/global.scss";
import styles from "../styles/comp-styles/errorLabel.module.scss";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";
const { scrollUp } = useScrollUp();

import StartIcon from "@mui/icons-material/Start";

const ErrorLabel = () => {
  const { scrollUp } = useScrollUp();
  return (
    <div className={"section"}>
      <div className={styles.Content_Container}>
        <h1 className={styles.Title}>404</h1>
        <h3 className={styles.Subtitle}>Oops, Page Not Found</h3>
        <p className={styles.Text}>
          But if you don't change your direction, and if you keep looking, you
          may end up where you are heading.
        </p>
        <div className={styles.CallToActionBox}>
          <Link to={"/"}>
            <button onClick={scrollUp} className={styles.View_Button}>
              Home
            </button>
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

export default ErrorLabel;
