import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Blog from "./Blog/Blog";
import ContactMe from "./ContactMe/ContatctMe";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box sx={{ height: "calc(100vh - 64px)", marginTop: "64px" }}>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact-me">
            <ContactMe />
          </Route>
          <Redirect from="/" to="/home" />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
