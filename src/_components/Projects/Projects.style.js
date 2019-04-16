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
  padding-top: 8rem;

  h1 {
    margin-bottom: 3rem;
    ${headingStyle}
  }

  p {
    font-size: 2.5rem;
    color: ${blackRegular};
    letter-spacing: 0.05rem;
    line-height: 3.5rem;

    @media (max-width: 755px) {
      font-size: 2.3rem;
      line-height: 3rem;
    }

    @media (max-width: 711px) {
      font-size: 2rem;
      line-height: 3rem;
    }
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
    padding: 0.5rem 0;

    h3 {
      font-size: 1.8rem;
      letter-spacing: 0.2rem;
      line-height: 2.5rem;
      color: ${blackLight};

      @media (max-width: 755px) {
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }

    h2 {
      margin-bottom: 3rem;
      font-size: 3.5rem;
      font-weight: 700;
      color: ${blackRegular};

      @media (max-width: 755px) {
        font-size: 2.5rem;
        line-height: 3rem;
      }
    }

    p {
      font-size: 1.8rem;
      line-height: 3rem;
      color: ${blackLight};
      height: 12rem;
      margin-bottom: 3.5rem;

      @media (max-width: 885px) {
        font-size: 1.6rem;
        line-height: 2.5rem;
      }
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

        @media (max-width: 755px) {
          margin-right: 2rem;
        }
      }

      .app-btn {
        ${buttonDark}
        padding-left: 3.8rem;
        padding-right: 3.8rem;

        @media (max-width: 755px) {
          padding: 0.5rem 2.8rem;
          /* padding-top: 0.5rem;
          padding-bottom: 0.5rem; */
        }
      }

      .src-btn {
        ${buttonLight}

        @media (max-width: 755px) {
          padding: 0.5rem 1.8rem;
        }
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
