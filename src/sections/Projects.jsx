import React, { useState } from "react";
import { Link } from "react-router-dom";

// Hooks:
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import styles from "../styles/section/projects.module.scss";

// Mui Imports:
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// Mantine Imports:
import { Grid, Skeleton, Container } from "@mantine/core";
const child = <Skeleton height={140} radius="md" animate={true} />;

// Json Import:
import projectTypeData from "../data/projectType.json";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Projects = () => {
  const table = `projects`;
  const { data, loading, error } = useFirebase(table);
  const [projects, setProject] = useState(projectTypeData);
  return (
    <div className="section">
      <p className="sectionTitle">Projects</p>



      <Container my="md" className={styles.container}>
        <Grid>
          <Grid.Col xs={4} className={styles.gridItem}> {child}  </Grid.Col>
          <Grid.Col xs={8} className={styles.gridItem}> {child}  </Grid.Col>
          <Grid.Col xs={8} className={styles.gridItem}> {child}  </Grid.Col>
          <Grid.Col xs={4} className={styles.gridItem}> {child}  </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
