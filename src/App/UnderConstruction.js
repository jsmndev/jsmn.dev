import React from "react";
import styled from "styled-components";

const UnderConstruction = () => {
  return (
    <Banner>
      <h1>
        🚧 This portfolio website is still under construction. You can visit the
        old one <a href="https://jsmnglng.github.io">here</a>. Thank you!
      </h1>
    </Banner>
  );
};

const Banner = styled.div`
  padding: 2rem;
  color: #f9f9f9;
  background-color: #ff635b;

  a {
    color: #fff;
  }
`;

export default UnderConstruction;
