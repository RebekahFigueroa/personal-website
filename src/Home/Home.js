import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import image from "./headshot.png";

const Home = () => {
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
          As a software engineer with experience in product management and
          formulation chemistry, I bring a unique perspective to problem-solving
          and innovation. My technical skills in programming and development,
          combined with my knowledge of chemistry and consumer markets/
          interactions, allow me to approach challenges with a well-rounded and
          holistic approach.
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            color: "text.secondary",
            marginRight: "5rem",
            marginTop: "2rem",
          }}
        >
          I am excited to continue exploring the intersection of technology and
          science, and I am eager to apply my skills and knowledge to new
          challenges in the field of software engineering and product
          development.
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
};

export default Home;
