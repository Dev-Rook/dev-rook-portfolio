import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/comps/skillsNav.scss"

// Json Import:
import skillsRoutesData from "../data/skillsRoutes.json";

const SkillsNav = () => {
  const [routes, setRoutes] = useState(skillsRoutesData);
  return (
    <div className="nav">
      {routes?.map((item) => {
        return <Link to={item.route} key={item.id} className="link">{item.name}</Link>;
      })}
    </div>
  );
};

export default SkillsNav;
