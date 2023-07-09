import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/comps/socialIcon.module.scss";

// Json Import:
import socialData from "../data/social.json";

const SocialIcon = () => {
  const [social, setSocial] = useState(socialData);
  return (
    <div className="section_contact">
      <div className={styles.icon_grid}>
        {social?.map((value) => {
          return (
            <Link to={value.link}>
              <div className={styles.icon}>
                <div className={styles.img_container}>
                  <img src={value.image} alt="" className={styles.img} />
                </div>
                <p className={styles.text}>{value.name}</p>
              </div>
              ;
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcon;
