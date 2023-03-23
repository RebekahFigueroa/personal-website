import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const BlogCard = ({
  blogTitle,
  datePublished,
  blogImage,
  blogDescription,
  blogLink,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          {blogTitle}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          color="text.secondary"
          sx={{ marginRight: "2rem" }}
        >
          {datePublished}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image={blogImage}
          title="Personal Website"
        />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "2rem" }}
        >
          {blogDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ textDecoration: "none" }}
          as="a"
          href={blogLink}
          target="_blank"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
