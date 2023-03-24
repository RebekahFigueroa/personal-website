import { Grid, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import SuggestAProjectForm from "./SuggestAProjectForm";
import SuggestAProjectList from "./SuggestAProjectList";

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
        <List>
          {suggestionsData.map((suggestion) => (
            <SuggestAProjectList key={suggestion.id} {...suggestion} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default SuggestAProject;
