import React from "react";

// Styles Import:
import styles from "../styles/section/hero.module.scss";

const Hero = () => {
  return <div className={styles.hero}>
    <h1 className={styles.title}>Developer Rook</h1>
    <p className={styles.subtitle}>Frontend Web Developer</p>
  </div>;
};

export default Hero;
