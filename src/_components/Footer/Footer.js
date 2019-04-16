import React from "react";
import { FooterContainer, FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="footer-links">
          <nav>
            <a
              href="https://twitter.com/jsmnglng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>

            <a
              href="https://www.linkedin.com/in/jsmnglng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/jsmnglng"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>

            <a href="mailto:jsmn.glng@gmail.com">Email</a>
          </nav>
        </div>

        <div className="copyright-text">
          <p>
            &copy; 2019{" "}
            <a
              href="https://github.com/jsmnglng/jsmn.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jasmine Galang
            </a>
          </p>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export { Footer };
