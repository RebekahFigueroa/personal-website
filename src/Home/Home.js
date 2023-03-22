import { Box, Grid, Typography } from "@mui/material";
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
        <Typography sx={{ fontSize: "7rem" }}>Heading</Typography>
        <Typography sx={{ fontSize: "3rem" }}>Lorem ipsum dolor sit</Typography>
        <Typography sx={{ fontSize: "1rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          fringilla erat ut tellus accumsan tempus. Proin faucibus, purus et
          tristique malesuada, nulla risus varius ante, quis ultricies lectus
          justo volutpat lorem. Cras eget tincidunt nisl, nec convallis est.
          Nullam eu convallis ex. Sed vehicula orci leo, consequat viverra
          libero fermentum eu. Praesent molestie mi nulla, non semper nisl
          tristique non. Donec quis imperdiet enim. Duis malesuada nisl eu nibh
          convallis, blandit iaculis lectus condimentum.
        </Typography>
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
