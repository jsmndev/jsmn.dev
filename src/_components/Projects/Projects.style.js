import styled from "styled-components";
import {
  blackRegular,
  blackLight,
  headingStyle,
  buttonDark,
  buttonLight
} from "../../_styles/variables.style";

export const ProjectContainer = styled.section`
  border: 2px solid pink;

  h1 {
    margin-bottom: 3rem;
    ${headingStyle}
  }

  p {
    font-size: 2.5rem;
    color: ${blackRegular};
    letter-spacing: 0.05rem;
    line-height: 3.5rem;
  }
`;

export const ProjectGallery = styled.div`
  border: 2px solid lightgreen;
  margin: 2rem 0;
`;

export const Project = styled.section`
  border: 2px solid orange;

  .project-description {
    h3 {
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
      line-height: 2.5rem;
      color: ${blackLight};
    }

    h2 {
      margin-bottom: 3rem;
      font-size: 3.5rem;
      font-weight: 700;
      color: ${blackRegular};
    }

    p {
      color: ${blackLight};
    }
  }

  .btn-group {
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    a {
      transition: 150ms ease-in;
    }

    .app-btn {
      ${buttonDark}
    }

    .src-btn {
      ${buttonLight}
    }
  }
`;
