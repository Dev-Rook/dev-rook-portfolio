import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/comp-styles/mobileMenu.module.scss";

// Json Import:
import routes from "../data/routes.json";

const MobileMenu = ({ reveal, scrollUp, isOpen }) => {
  const [data, setData] = useState(routes);

  return (
    <div className={`${styles.mobileMenu} ${reveal ? styles.reveal : ""}`}>
      <ul className={styles.linksContainer}>
        {data?.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.route} onClick={scrollUp} className={styles.link}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
