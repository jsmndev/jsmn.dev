import React, { Component } from "react";

import {
  MainContainer,
  ImageWrapper,
  MainImage,
  Section,
  ProjectGallery
} from "./MainPage.style";

class MainPage extends Component {
  render() {
    return (
      <MainContainer>
        <ImageWrapper>
          <MainImage
            src={require("../_assets/svg/main-logo.svg")}
            alt="main-image"
          />
        </ImageWrapper>

        <Section>
          <h1>HELLO WORLD.</h1>
          <p>
            I'm Jasmine Galang and I'm an aspiring full-stack developer. I'm
            currently studying web development with computer science at{" "}
            <a
              href="https://lambdaschool.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lambda School
            </a>
            .
          </p>
        </Section>

        <Section>
          <h1>PROJECTS.</h1>
          <p>
            Here are a few selection of some of my work as a web developer. You
            can view my other small projects{" "}
            <a
              href="https://github.com/jsmnglng"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <ProjectGallery />
        </Section>
      </MainContainer>
    );
  }
}

export { MainPage };
