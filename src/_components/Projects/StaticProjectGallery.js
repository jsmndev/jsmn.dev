// This component is a hard-coded project section so that if
// the server is down, the project section of the portfolio
// will not break
import React from "react";

import { ProjectGallery, Project } from "./Projects.style";

const StaticProjectGallery = () => {
  return (
    <ProjectGallery>
      <Project>
        <div className="project-description">
          <h3>TEAM</h3>
          <h2>LearnLocker</h2>
          <p>
            A web application that allows users to keep and organize resources
            from the internet in one place.
          </p>

          <div className="btn-group">
            <a className="app-btn" href="https://learnedadev.netlify.com/">
              view
            </a>
            <a className="src-btn" href="https://github.com/learneda">
              source
            </a>
          </div>
        </div>

        <div className="project-thumbnail">
          <img
            src={require("../../_assets/img/project-learnlocker.png")}
            alt="learnlocker website"
          />
        </div>
      </Project>
    </ProjectGallery>
  );
};

export default StaticProjectGallery;
