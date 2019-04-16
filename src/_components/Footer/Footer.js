import React from "react";
import { FooterContainer, FooterWrapper } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div className="footer-links">
          <nav>
            <ul>
              <li>
                <a
                  href="https://twitter.com/jsmnglng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/jsmnglng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/jsmnglng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/jsmnglng"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export { Footer };
