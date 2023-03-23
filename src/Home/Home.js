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
        <Typography sx={{ fontSize: "3rem", color: "text.secondary" }}>
          Hi, welcome!{" "}
        </Typography>
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
          Formulation chemist, product manager, and now software engineer. I am
          passionate about solving meaningful problems, developing products that
          delight consumers, and making a positive social impact on the
          communities around me.
        </Typography>
        <Box sx={{ marginTop: "3rem" }}>
          <Button
            variant="contained"
            sx={{
              marginRight: "1rem",
              textDecoration: "none",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
            size="large"
            as="a"
            href="https://www.linkedin.com/in/rebekah-figueroa/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            sx={{
              marginRight: "1rem",
              textDecoration: "none",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
            size="large"
            as="a"
            href="https://github.com/RebekahFigueroa"
            target="_blank"
          >
            GitHub
          </Button>
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
