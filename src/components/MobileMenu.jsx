import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/comps/mobileMenu.module.scss";

// Json Import:
import routeData from "../data/routes";

const MobileMenu = ({ show, toggleMobileMenu, auth }) => {
  const [routes, setRoutes] = useState(routeData);

  return (
    <nav className={`${styles.mobile_menu} ${show ? styles.reveal : ""}`}>
      {auth ? (
        <ul className={styles.mobile_navlink_container}>
          {routes?.map((route) => {
            return (
              <li key={route.id} onClick={toggleMobileMenu}>
                <Link to={route.route} className={styles.link}>
                  {route?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <Link
          onClick={toggleMobileMenu}
          to="/login"
          className={styles.login_button}
        >
          <button>Login</button>
        </Link>
      )}
    </nav>
  );
};

export default MobileMenu;
