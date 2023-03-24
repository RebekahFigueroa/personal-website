import { Box, Grid, TextField } from "@mui/material";
import React from "react";

const SuggestAProjectForm = () => {
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
            defaultValue="Project Suggestion"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-multiline-flexible"
            label="Project Description"
            multiline
            rows={10}
            defaultValue="Add details here"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SuggestAProjectForm;
