import React, { Component } from "react";

import {
  MainContainer,
  ImageWrapper,
  MainImage,
  Section,
  ProjectGallery,
  Project,
  Footer
} from "./MainPage.style";

class MainPage extends Component {
  render() {
    return (
      <MainContainer>
        <ImageWrapper>
          <MainImage
            src={require("../_assets/img/main-logo.png")}
            alt="main-image"
          />
        </ImageWrapper>

        <Section>
          <h1>HELLO WORLD.</h1>
          <p class="main-headline">
            I’m Jasmine Galang and I’m a front-end developer who is always
            creating and learning awesome stuff.
          </p>

          <p class="secondary-headline">
            Currently studying web development with computer science at{" "}
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

          <ProjectGallery>
            <Project>
              <h3>PERSONAL</h3>
              <h2>Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Project>

            <Project>
              <h3>PERSONAL</h3>
              <h2>Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Project>

            <Project>
              <h3>PERSONAL</h3>
              <h2>Project Name</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Project>
          </ProjectGallery>
        </Section>

        <Footer>
          <ul>
            <li>
              <a
                href="https://github.com/jsmnglng"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jsmnglng"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jsmnglng"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jsmnglng"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com/jsmnglng" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </Footer>
      </MainContainer>
    );
  }
}

export { MainPage };
