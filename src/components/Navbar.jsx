import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import styles from "../styles/comp-styles/nav.module.scss";

// Json Import:
import routes from "../data/routes.json";

// Component Import:
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [data, setData] = useState(routes);
  const [reveal, setReveal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleScrollLock = () => {
    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
  };


  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    toggleScrollLock();
  };

  const { scrollUp } = useScrollUp();

  let menuRef = useRef();

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setReveal(false);
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  const revealMenu = () => {
    setReveal((prev) => !prev);
    handleMenuToggle()
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <ul className={styles.navlinkContainer}>
          {data?.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.route}
                  onClick={scrollUp}
                  className={styles.link}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div ref={menuRef} onClick={revealMenu} className={styles.imgContainer}>
          <img src="" alt="" className={styles.img} />
        </div>
        <MobileMenu reveal={reveal} setReveal={setReveal} scrollUp={scrollUp} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
