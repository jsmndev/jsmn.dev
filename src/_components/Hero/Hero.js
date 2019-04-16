import React from "react";
import { HeroContainer } from "./Hero.style";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <div className="hero-image">
        <img
          src={require("../../_assets/img/hero-image.png")}
          alt="Jasmine Galang"
        />
      </div>
      <div className="drop-down-icon">
        <a href="#about">
          <img
            src={require("../../_assets/img/down-arrow.png")}
            alt="down arrow"
          />
        </a>
      </div>
    </HeroContainer>
  );
};

export { Hero };
