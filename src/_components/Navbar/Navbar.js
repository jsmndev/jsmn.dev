import React, { Component } from "react";
import { NavBrand, NavContainer, NavMenu, NavWrapper } from "./Navbar.style";

class Navbar extends Component {
  state = {
    active: ""
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let scroll = window.scrollY;

    if (scroll > 0) {
      this.setState({ active: "active" });
    } else {
      this.setState({ active: "" });
    }
  };

  render() {
    return (
      <NavContainer className={this.state.active}>
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
  }
}

export { Navbar };
