import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import image from "./placeholder-photo.png";

function Home() {
  return (
    <Grid
      container
      spacing={4}
      sx={{ minHeight: "100%", display: "flex", alignItems: "center" }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={7}>
        <Typography sx={{ fontSize: "3rem" }}>Hi, welcome! </Typography>
        <Typography sx={{ fontSize: "5rem" }}>I'm Rebekah Figueroa,</Typography>
        <Typography sx={{ fontSize: "1rem", color: "text.secondary" }}>
          (She/Her) | (Ruh-beh-kuh Fee-ga-ro-ah)
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            color: "text.secondary",
            marginRight: "5rem",
            marginTop: "2rem",
          }}
        >
          A chemist turned product manager who has been working in the product
          development space for over 6 years. I specialize in first-to-market
          launches with an focus in the consumer product goods space. After
          transitioning to the tech space as a PM, I missed the satisfaction
          that came from seeing my products come to life through my own efforts.
          This has led me to the next stage of my career journey learning
          software engineering to continue to pursue my passion for development.
          Currently, I am studying software engineering full time at the
          Flatiron bootcamp.
        </Typography>
        <Box sx={{ marginTop: "2rem" }}>
          <Button variant="contained" sx={{ marginRight: "1rem" }}>
            LinkedIn
          </Button>
          <Button variant="contained">GitHub</Button>
        </Box>
      </Grid>
      <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: "20px" }}>
          <Box
            component={"img"}
            src={image}
            alt="headshot"
            sx={{ maxWidth: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Home;
