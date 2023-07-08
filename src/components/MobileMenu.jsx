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
      <svg
        onClick={toggleMobileMenu}
        className={styles.profile_icon}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path fill={"white"} d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
      </svg>
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
