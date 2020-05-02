import React from "react";
import { AboutContainer, AboutHeadline, AboutImage } from "./About.style";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeadline>
        <h1>Hello World.</h1>
        <p className="main-headline">
          I'm Jasmine Galang and I'm a full-stack developer who is always
          creating and learning awesome stuff.
        </p>
      </AboutHeadline>

      <AboutImage>
        <img
          src={require("../../_assets/img/girl-sitting.png")}
          alt="girl-sitting"
        />
      </AboutImage>
    </AboutContainer>
  );
};

function greet() {
  return "wtf";
}

export { About };
