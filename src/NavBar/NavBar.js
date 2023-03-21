import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import HomeButton from "./HomeButton";
import NavItem from "./NavItem";
import ResumeButton from "./ResumeButton";

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <HomeButton />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rebekah Figueroa
        </Typography>
        <Stack direction="row" spacing={2}>
          <NavItem to="/experience" label="Experience" />
          <NavItem to="/portfolio" label="Portfolio" />
          <NavItem to="/blog" label="Blog" />
          <NavItem to="/contact-me" label="Contact Me" />

          <ResumeButton />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
