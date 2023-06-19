import { useState } from "react";

// Styles Import:
import styles from "../styles/sec-styles/tech.module.scss";
// Json Import:
import tech from "../data/tech.json";

const Tech = () => {
  const [data] = useState(tech);
  return (
    <div className="section">
        <p className="sectionTitle">Tech Stack</p>
      <div className={styles.Content_Container}>
        <div className={styles.Technolgies_Container}>
          <div className={styles.Tech_Grid}>
            {data?.map((value, i) => {
              return (
                <div className={styles.Card} key={i}>
                  <img src={value.Icon} alt="Icon" className={styles.Icon} />
                  <p className={styles.Title}>{value.Title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
