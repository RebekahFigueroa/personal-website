import { Button, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import image from "./blogPlaceholder.jpg";

function BlogCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ rightMargin: "2rem" }}
        >
          A Beginner’s Guide To APIs
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          color="text.secondary"
          sx={{ marginRight: "2rem" }}
        >
          January 25th, 2023{" "}
        </Typography>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="Personal Website"
        />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          fringilla erat ut tellus accumsan tempus. Proin faucibus, purus et
          tristique malesuada, nulla risus varius ante, quis ultricies lectus
          justo volutpat lorem. Cras eget tincidunt nisl, nec convallis est.
          Nullam eu convallis ex. Sed vehicula orci leo, consequat viverra
          libero fermentum eu.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ textDecoration: "none" }}
          as="a"
          href="https://medium.com/@figueroarebekah/a-beginners-guide-to-apis-15fdf8fc48a1"
          target="_blank"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCards;
