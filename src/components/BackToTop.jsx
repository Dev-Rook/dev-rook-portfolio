import React, { useState } from "react";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import styles from "../styles/comps/backToTop.module.scss";

// Mui Import:
import NavigationIcon from "@mui/icons-material/Navigation";

const BackToTop = () => {
  const { scrollUp, backToTop } = useScrollUp();
  return (
    <div
      onClick={scrollUp}
      className={`${styles.back_to_top} ${backToTop ? styles.reveal : ""}`}
    >
      <NavigationIcon sx={{ fontSize: 30, color: "black" }} />
    </div>
  );
};

export default BackToTop;
