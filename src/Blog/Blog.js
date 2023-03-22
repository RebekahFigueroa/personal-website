import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCards from "./BlogCards/BlogCards";

function Blog() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h1" component="div">
            Technical Blog @ Medium
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-evenly",
            mb: 4,
          }}
        >
          <BlogCards />
          <BlogCards />
          <BlogCards />
        </Box>
      </Box>
    </>
  );
}

export default Blog;
