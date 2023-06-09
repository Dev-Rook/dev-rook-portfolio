// Styles Import:
import styles from "../styles/comp-styles/hero.module.scss";

const Hero = ({ title, subtitle }) => {
  return (
    <div className={styles.hero}>
      {/* <p className={styles.text}>Hello There! I am -</p> */}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{subtitle}</p>
    </div>
  );
};

export default Hero;
