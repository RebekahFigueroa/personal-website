import { Grid } from "@mui/material";
import React from "react";
import SuggestAProjectForm from "./SuggestAProjectForm";
import SuggestAProjectList from "./SuggestAProjectList";

const SuggestAProject = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{ minHeight: "100%", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={5}>
        <SuggestAProjectForm />
      </Grid>
      <Grid item xs={5} sx={{ display: "flex", alignItems: "center" }}>
        <SuggestAProjectList />
      </Grid>
    </Grid>
  );
};

export default SuggestAProject;
