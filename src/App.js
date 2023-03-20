import { Box } from "@mui/material";
import React from "react";
import Blog from "./Blog/Blog";
import ContactMe from "./ContactMe/ContatctMe";
import Experience from "./Experience/Experience";
import Introduction from "./Introduction/Introduction";
import NavBar from "./NavBar/NavBar";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Box sx={{ height: "calc(100vh - 64px)", marginTop: "64px" }}>
        <Introduction />
        <Experience />
        <Portfolio />
        <Blog />
        <ContactMe />
      </Box>
    </div>
  );
}

export default App;
