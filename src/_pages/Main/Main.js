import React, { Component } from "react";

import { Navbar } from "../../_components/Navbar";
import { Hero } from "../../_components/Hero";
import { About } from "../../_components/About";
import { Projects } from "../../_components/Projects";
import { Footer } from "../../_components/Footer";

import { MainContainer } from "./Main.style";

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </MainContainer>
    );
  }
}

export { Main };
