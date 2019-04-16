import React, { Component } from "react";

import { Navbar } from "../../_components/Navbar";
import { Hero } from "../../_components/Hero";
import { About } from "../../_components/About";
import { Projects } from "../../_components/Projects";
import { Footer } from "../../_components/Footer";

import { MainContainer, MainWrapper } from "./Main.style";

class Main extends Component {
  render() {
    return (
      <MainContainer>
        <Navbar />

        <MainWrapper>
          <Hero />
          <About />
          <Projects />
        </MainWrapper>

        <Footer />
      </MainContainer>
    );
  }
}

export { Main };
