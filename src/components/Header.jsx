import React from "react";

// Styles Import:
import "../styles/comps/header.scss"

const Header = ({title, subTitle}) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subTitle}</p>
    </div>
  );
};

export default Header;
