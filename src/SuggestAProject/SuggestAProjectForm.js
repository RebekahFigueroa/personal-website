import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const SuggestAProjectForm = ({ setSuggestionsData }) => {
  const [suggestionTitle, setSuggestionTitle] = useState("");
  const [suggestionDescription, setSuggestionDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/suggestions", {
      method: "POST",
      body: JSON.stringify({
        suggestionTitle: suggestionTitle,
        suggestionDescription: suggestionDescription,
        numberOfLikes: 0,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((suggestion) => {
        setSuggestionsData((suggestions) => [suggestion, ...suggestions]);
        setSuggestionTitle("");
        setSuggestionDescription("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <TextField
            sx={{ width: "100%" }}
            required
            id="outlined-required"
            label="Required"
            value={suggestionTitle}
            onChange={(e) => setSuggestionTitle(e.target.value)}
            placeholder="Add title of project"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-flexible"
            label="Project Description"
            multiline
            rows={10}
            value={suggestionDescription}
            onChange={(e) => setSuggestionDescription(e.target.value)}
            placeholder="Add description of project"
          />
        </Grid>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          sx={{ marginTop: "1rem", marginLeft: "7px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
};

export default SuggestAProjectForm;
