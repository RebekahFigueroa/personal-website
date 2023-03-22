import { Grid } from "@mui/material";
import React from "react";
import ExperienceText from "./ExperienceText";
import TimelineStructure from "./Timeline/TimelineStructure";

function Experience() {
  return (
    <Grid
      container
      spacing={4}
      sx={{ minHeight: "100%", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={5}>
        <ExperienceText />
      </Grid>
      <Grid item xs={5} sx={{ display: "flex", alignItems: "center" }}>
        <TimelineStructure />
      </Grid>
    </Grid>
  );
}

export default Experience;
