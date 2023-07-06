import { useState } from "react";

// Styles Import:
import "../../styles/section/tech.css";

// Json Import:
import tech from "../../data/tech.json";

const Frontend = () => {
  const [data] = useState(tech);
  const filteredItems = data.filter((item) => item.type === "frontend");
  return (
    <div className="section_skill">
      <div className={"Content_Container"}>
        <div className={"Technolgies_Container"}>
          <div className={"Tech_Grid"}>
            {filteredItems?.map((value, i) => {
              return (
                <div className={"Card"} key={value.id}>
                  <img src={value.Icon} alt="Icon" className={"Icon"} />
                  <p className={"Title"}>{value.Title}</p>
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
