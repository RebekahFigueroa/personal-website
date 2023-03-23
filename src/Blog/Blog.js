import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      fetch("http://localhost:3001/blogs")
        .then((response) => response.json())
        .then((blogs) => setBlogData(blogs));
    };
    fetchBlogs();
  }, []);

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
          {blogData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Blog;
