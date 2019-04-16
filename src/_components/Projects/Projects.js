import React from "react";
import StaticProjectGallery from "./StaticProjectGallery";

import { ProjectContainer } from "./Projects.style";

const Projects = () => {
  return (
    <ProjectContainer id="projects">
      <h1>Projects.</h1>
      <p>
        Here are a few selections of my work as a web developer. You can view my
        other small projects{" "}
        <a
          href="https://github.com/jsmnglng"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </p>

      <StaticProjectGallery />
    </ProjectContainer>
  );
};

export { Projects };
