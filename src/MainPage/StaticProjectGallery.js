// This component is a hard-coded project section so that if
// the server is down, the project section of the portfolio
// will not break
import React from "react";
import { ProjectGallery, Project } from "./MainPage.style";

const StaticProjectGallery = () => {
  return (
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
  );
};

export default StaticProjectGallery;
