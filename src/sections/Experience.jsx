import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Import:
import useScrollUp from "../hooks/useScrollUp";

// Styles Import:
import styles from "../styles/sec-styles/experience.module.scss";
// Json Import:
import experience from "../data/experience.json";

// Material UI Timeline Imports Start
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
// Material UI Timeline Imports End

import LaunchIcon from "@mui/icons-material/Launch";
import StartIcon from "@mui/icons-material/Start";

const Experience = () => {
  const [data, setData] = useState(experience);
  const { scrollUp } = useScrollUp();
  return (
    <div className={"section"}>
      <p className={"sectionTitle"}>Experience</p>
      <>
        {data?.slice(0, 3).map((value) => {
          return (
            <Timeline
              className={`${styles.Timeline}`}
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
              key={value.id}
            >
              <TimelineItem className={styles.Timeline_Item}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent className={styles.Time_Card}>
                  <span>
                    <p className={styles.Year}>{value.year}</p>
                    <p className={styles.Title}>{value.title}</p>
                    <a
                      href={value.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={scrollUp}
                    >
                      <LaunchIcon sx={{ color: "red" }} />
                    </a>
                  </span>
                  <p className={styles.Description}>{value.description}</p>
                  <p className={styles.Type}>{value.type}</p>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}
      </>
      <br />
      <br />
      <div className={"CallToActionBox"}>
        <Link to={"/projects"} onClick={scrollUp}>
          <button className={"Button"}>Vew All</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default Experience;
