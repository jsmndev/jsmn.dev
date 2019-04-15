import React from "react";
import { NavBrand, NavContainer, NavMenu, NavWrapper } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavBrand href="#">
          <img
            src={require("../../_assets/img/main-logo.png")}
            alt="letter J"
          />
        </NavBrand>
        <NavMenu>
          <ul>
            <li>
              <a href="#/">Home</a>
            </li>
            <li>
              <a href="#about/">About</a>
            </li>
            <li>
              <a href="#projects/">Projects</a>
            </li>
            <li id="resume">
              <a
                href="https://resume.creddle.io/resume/ikm2c1ejimy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export { Navbar };
