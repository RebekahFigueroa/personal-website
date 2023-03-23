import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PortfolioCards from "./PortfolioCards";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      fetch("http://localhost:3001/portfolios")
        .then((response) => response.json())
        .then((portfolios) => setPortfolioData(portfolios));
    };
    fetchPortfolios();
  }, []);

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
          {portfolioData.map((portfolio) => (
            <PortfolioCards key={portfolio.id} {...portfolio} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;
