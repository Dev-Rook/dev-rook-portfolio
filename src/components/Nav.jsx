import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Hooks Import:
import useWindowWidth from "../hooks/useWindowWidth";
import useWindowHeight from "../hooks/useWindowHeight";

// Styles Import:
import styles from "../styles/comps/nav.module.scss";

// Json Import:
import routeData from "../data/routes";
import socialData from "../data/social.json";

// Component Import:
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [routes, setRoutes] = useState(routeData);
  const [social, setSocial] = useState(socialData);
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [iconColor, setIconColor] = useState();

  // Hooks
  const { windowWidth } = useWindowWidth();
  const { windowHeight } = useWindowHeight();
  // const { scrollUp } = useScrollUp();

  let menuRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 755) {
        setIconColor("black");
      } else {
        setIconColor("white");
      }
    });
  }, []);

  const toggleMobileMenu = () => {
    setShow((prev) => !prev);
  };

  const profileLink = `https://i.pinimg.com/564x/2e/bf/3f/2ebf3fedb20aaf0235ba11a69e34f7fe.jpg`;

  return (
    <nav ref={menuRef} className={styles.nav}>
      <ul className={styles.left}>
        {social?.map((value) => {
          return (
            <a
              href={value.link}
              target="_blank"
              rel="noreferror"
              key={value.id}
            >
              <div className={styles.iconContainer}>
                <img src={value.image} alt="" className={styles.icon} />
              </div>
            </a>
          );
        })}
      </ul>
      <div className={styles.right}>
        {auth ? (
          <ul className={styles.navlink_container}>
            {routes?.map((route) => {
              return (
                <li key={route.id} onClick={toggleMobileMenu}>
                  <Link to={route.route}>{route?.name}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <>{windowWidth <= 996 ? null : <Link to="/login">Login</Link>}</>
        )}
          <svg
            onClick={toggleMobileMenu}
            className={styles.profile_icon}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path fill={iconColor} d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
          </svg>
      </div>

      <MobileMenu show={show} toggleMobileMenu={toggleMobileMenu} auth={auth} />
    </nav>
  );
};

export default Nav;
