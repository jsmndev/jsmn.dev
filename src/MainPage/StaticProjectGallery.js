// This component is a hard-coded project section so that if
// the server is down, the project section of the portfolio
// will not break
import React from "react";
import { ProjectGallery, Project } from "./MainPage.style";

const StaticProjectGallery = () => {
  return (
    <ProjectGallery>
      <Project>
        <h3>TEAM</h3>

        <a
          href="https://learnedadev.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>LearnLocker</h2>
        </a>

        <p>
          A web application that allows users to keep and organize resources
          from the internet in one place.
        </p>
      </Project>

      <Project>
        <h3>TEAM</h3>
        <a
          href="https://luncher-0311.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Luncher</h2>
        </a>
        <p>
          A revolutionary tool to connect schools directly to donors who
          provided funds, helping remove barriers stopping children in need of
          healthy lunches.
        </p>
      </Project>

      <Project>
        <h3>PERSONAL</h3>
        <a
          href="https://ls-notes.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Lambda Notes</h2>
        </a>
        <p>
          A simple note-taking web application that lets a user create, update,
          delete and display notes.
        </p>
      </Project>
    </ProjectGallery>
  );
};

export default StaticProjectGallery;
