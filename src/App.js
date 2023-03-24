import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Blog from "./Blog/Blog";
import ContactMe from "./ContactMe/ContatctMe";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import Portfolio from "./Portfolio/Portfolio";
import SuggestAProject from "./SuggestAProject/SuggestAProject";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <NavBar />
        <Box sx={{ height: "calc(100vh - 3rem)" }}>
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
            <Route path="/suggest-a-project">
              <SuggestAProject />
            </Route>
            <Route path="/contact-me">
              <ContactMe />
            </Route>
            <Redirect from="/" to="/home" />
          </Switch>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
