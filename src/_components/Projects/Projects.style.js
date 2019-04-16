import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";
import {
  blackRegular,
  blackLight,
  headingStyle,
  buttonDark,
  buttonLight
} from "../../_styles/variables.style";

export const ProjectContainer = styled.section`
  padding-top: 15rem;

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
  margin: 4rem 0;
`;

export const Project = styled.section`
  ${flex()}
  margin-bottom: 10rem;

  .project-thumbnail {
    width: 50%;

    img {
      width: 90%;
      height: auto;
    }
  }

  .inverted-thumbnail {
    text-align: right;
  }

  .project-description {
    width: 50%;
    padding: 2rem 0;

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
      font-size: 1.8rem;
      line-height: 3rem;
      color: ${blackLight};
      height: 12rem;
      margin-bottom: 3.5rem;
    }

    .btn-group {
      position: relative;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      z-index: 1;

      a {
        margin-right: 3rem;
        transition: 150ms ease-in;
      }

      .app-btn {
        ${buttonDark}
        padding-left: 3.8rem;
        padding-right: 3.8rem;
      }

      .src-btn {
        ${buttonLight}
      }
    }

    .minions {
      text-align: right;
      img {
        width: 65%;
        height: auto;
      }
    }
  }
`;
