import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/section/contact.scss";

// Json Import:
import socialData from "../data/social.json";

// Components Import:
import SocialIcon from "../components/SocialIcon";

const Contact = () => {
  const [social, setSocial] = useState(socialData);
  return (
    <div className="section">
      <div className="sectionTitle">Let's Get In Touch</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem
        dolor qui, amet ducimus cupiditate.
      </p>
      <div className="social_icon_board">
        <ul className="icon_list">
          {social?.map((value) => {
            return (
              <Link to={value.link} className="link" key={value.id}>
                <li>
                  <img src={value.image} alt="" className="img" />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
        <SocialIcon />
    </div>
  );
};

export default Contact;
