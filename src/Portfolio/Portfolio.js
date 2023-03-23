import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PortfolioCards from "./PortfolioCards";

function Portfolio() {
  return (
    <>
      <Box>
        <Typography
          gutterBottom
          variant="h1"
          component="div"
          sx={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "0",
          }}
        >
          Portfolio
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "5rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "3rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          Software Development
        </Button>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "3rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          Product Management
        </Button>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "3rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          Formulation Development
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
          }}
        >
          <PortfolioCards />
          <PortfolioCards />
          <PortfolioCards />
        </Box>

        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <PortfolioCards />
          <PortfolioCards />
          <PortfolioCards />
        </Box>
      </Box>
    </>
  );
}

export default Portfolio;
