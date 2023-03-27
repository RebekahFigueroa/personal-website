import { Grid, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SuggestAProjectForm from "./SuggestAProjectForm";
import SuggestAProjectListItem from "./SuggestAProjectListItem";

const SuggestAProject = () => {
  const [suggestionsData, setSuggestionsData] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      fetch("http://localhost:3001/suggestions")
        .then((response) => response.json())
        .then((suggestions) => setSuggestionsData(suggestions));
    };
    fetchSuggestions();
  }, []);
  return (
    <Grid container spacing={3} sx={{ minHeight: "100%" }}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            marginBottom: "0",
            marginTop: "2rem",
          }}
        >
          Suggest A Project
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={5}>
        <SuggestAProjectForm setSuggestionsData={setSuggestionsData} />
      </Grid>
      <Grid item xs={5}>
        <List>
          {suggestionsData.map((suggestion) => (
            <SuggestAProjectListItem key={suggestion.id} {...suggestion} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default SuggestAProject;
