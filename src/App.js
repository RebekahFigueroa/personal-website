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
      <Introduction />
      <Experience />
      <Portfolio />
      <Blog />
      <ContactMe />
    </div>
  );
}

export default App;
