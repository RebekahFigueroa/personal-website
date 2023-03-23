import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Chip, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";

const PortfolioCards = ({
  projectTitle,
  githubLink,
  pageLink,
  projectDescription,
  languagesUsed,
  projectImage,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "25rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={projectImage}
        title="Personal Website"
      />
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ rightMargin: "2rem" }}
          >
            {projectTitle}
          </Typography>
          <Box>
            <Link href={githubLink} target="_blank" sx={{ color: "white" }}>
              <GitHubIcon />
            </Link>
            <Link href={pageLink} target="_blank" sx={{ color: "white" }}>
              <OpenInNewIcon />
            </Link>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: "auto" }}>
        {languagesUsed.map((language) => (
          <Chip color="primary" label={language} />
        ))}
      </CardActions>
    </Card>
  );
};

export default PortfolioCards;
