import { Grid, Typography } from "@mui/material";
import React from "react";

function ExperienceText() {
  return (
    <Grid>
      <Typography sx={{ fontSize: "7rem" }}>About Me</Typography>
      <Typography
        sx={{ fontSize: "1rem", color: "text.secondary", marginBottom: "2rem" }}
      >
        I am a chemist turned product manager who has been working in the
        product development space for over 6 years. I specialize in
        first-to-market launches with an focus in the consumer product goods
        space.
      </Typography>
      <Typography
        sx={{ fontSize: "1rem", color: "text.secondary", marginBottom: "2rem" }}
      >
        After transitioning to the tech space as a PM, I missed the satisfaction
        that came from seeing my products come to life through my own efforts.
        This has led me to the next stage of my career journey learning software
        engineering to continue to pursue my passion for development.
      </Typography>
      <Typography
        sx={{ fontSize: "1rem", color: "text.secondary", marginBottom: "2rem" }}
      >
        Currently, I am studying software engineering full time at the Flatiron
        bootcamp. Curious about what I've worked on? Feel free to explore my
        work experience timeline for more details!
      </Typography>
    </Grid>
  );
}

export default ExperienceText;
