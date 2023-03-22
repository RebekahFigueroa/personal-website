import { Grid, Typography } from "@mui/material";
import React from "react";

function ExperienceText() {
  return (
    <Grid>
      <Typography sx={{ fontSize: "7rem" }}>About</Typography>
      <Typography sx={{ fontSize: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        fringilla erat ut tellus accumsan tempus. Proin faucibus, purus et
        tristique malesuada, nulla risus varius ante, quis ultricies lectus
        justo volutpat lorem. Cras eget tincidunt nisl, nec convallis est.
        Nullam eu convallis ex. Sed vehicula orci leo, consequat viverra libero
        fermentum eu. Praesent molestie mi nulla, non semper nisl tristique non.
        Donec quis imperdiet enim. Duis malesuada nisl eu nibh convallis,
        blandit iaculis lectus condimentum.
      </Typography>
    </Grid>
  );
}

export default ExperienceText;
