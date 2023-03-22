import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Chip } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
import image from "./placeholderPhoto.jpg";

function PortfolioCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={image} title="Personal Website" />

      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ rightMargin: "2rem" }}
          >
            Personal Website
          </Typography>
          <Box>
            <GitHubIcon />
            <OpenInNewIcon />
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          fringilla erat ut tellus accumsan tempus.
        </Typography>
      </CardContent>
      <CardActions>
        <Chip label="React" />
        <Chip label="MaterialUI" />
      </CardActions>
    </Card>
  );
}

export default PortfolioCards;
