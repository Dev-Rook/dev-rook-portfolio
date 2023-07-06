import { useState } from "react";

// Styles Import:
import styles from "../../styles/section/tech.module.scss";

// Json Import:
import tech from "../../data/tech.json";

const Frontend = () => {
  const [data] = useState(tech);
  const filteredItems = data.filter((item) => item.type === "frontend");
  return (
    <div className="section_skill">
      <div className={styles.Content_Container}>
        <div className={styles.Technolgies_Container}>
          <div className={styles.Tech_Grid}>
            {filteredItems?.map((value, i) => {
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

export default Frontend;
