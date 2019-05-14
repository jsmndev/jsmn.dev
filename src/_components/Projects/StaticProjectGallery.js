// This component is a hard-coded project section so that if
// the server is down, the project section of the portfolio
// will not break
import React from "react";

import { ProjectGallery, Project } from "./Projects.style";

const StaticProjectGallery = () => {
  return (
    <ProjectGallery>
      <Project>
        <div className="project-thumbnail">
          <img
            src={require("../../_assets/img/project-learnlocker.png")}
            alt="learnlocker website"
          />
        </div>

        <div className="project-description">
          <h3>TEAM</h3>
          <h2>LearnLocker</h2>
          <p>
            A web application that allows users to keep and organize resources
            from the internet in one place.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://learnlocker.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view
            </a>
            <a
              className="src-btn"
              href="https://github.com/learneda"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            <img
              src={require("../../_assets/svg/minion-4.svg")}
              alt="4 minions"
            />
          </div>
        </div>
      </Project>

      <Project>
        <div className="project-description">
          <h3>TEAM</h3>
          <h2>Luncher</h2>
          <p className="long-description">
            A revolutionary tool to connect schools directly to donors who
            provided funds, helping remove barriers stopping children in need of
            healthy lunches.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://luncher-0311.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view
            </a>
            <a
              className="src-btn"
              href="https://github.com/build-week-luncher"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            <img
              src={require("../../_assets/svg/minion-3.svg")}
              alt="4 minions"
            />
          </div>
        </div>

        <div className="project-thumbnail inverted-thumbnail">
          <img
            src={require("../../_assets/img/project-luncher.png")}
            alt="luncher website"
          />
        </div>
      </Project>

      <Project>
        <div className="project-thumbnail">
          <img
            src={require("../../_assets/img/project-lambdanotes.png")}
            alt="lambda notes website"
          />
        </div>

        <div className="project-description">
          <h3>PERSONAL</h3>
          <h2>Lambda Notes</h2>
          <p>
            A simple note-taking web application that lets a user create,
            update, delete and display notes.
          </p>

          <div className="btn-group">
            <a
              className="app-btn"
              href="https://ls-notes.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              view
            </a>
            <a
              className="src-btn"
              href="https://github.com/jsmnglng/front-end-project-week"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <div className="minions">
            <img
              src={require("../../_assets/svg/minion-1.svg")}
              alt="4 minions"
            />
          </div>
        </div>
      </Project>
    </ProjectGallery>
  );
};

export default StaticProjectGallery;
