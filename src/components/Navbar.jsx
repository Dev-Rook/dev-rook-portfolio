import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/comp-styles/nav.module.scss";

// Json Import:
import routes from "../data/routes.json";

const Navbar = () => {
  const [data, setData] = useState(routes);
  return (
    <nav className={styles.nav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <ul className={styles.navlinkContainer}>
          {data?.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.route} className={styles.link}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.imgContainer}>
          <img src="" alt="" className={styles.img} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
