import AttachFileRoundedIcon from "@mui/icons-material/AttachFileRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          fontSize="inherit"
          aria-label="Home button"
        >
          <HomeRoundedIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rebekah Figueroa
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact Me</Button>
          <Button
            color="inherit"
            variant="outlined"
            size="Large"
            startIcon={<AttachFileRoundedIcon />}
          >
            Resume
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
