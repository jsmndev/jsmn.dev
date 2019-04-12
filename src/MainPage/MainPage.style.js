import styled from "styled-components";
import { flex } from "../_styles/mixins.style";
import {
  redRegular,
  redLight,
  blackRegular,
  blackLight
} from "../_styles/variables.style";

export const MainContainer = styled.div`
  border: 1px solid red;
  width: 80%;
  margin: 0 auto;
  color: ${blackRegular};
`;

export const ImageWrapper = styled.div`
  border: 1px solid blue;
  margin-top: 2rem;
  margin-bottom: 10rem;
  ${flex()}
`;

export const MainImage = styled.img`
  width: 5.5rem;
  height: auto;
`;

export const Section = styled.section`
  margin: 15vh 0;

  h1 {
    margin-bottom: 2.5rem;
    font-size: 5rem;
    font-weight: 700;
    color: ${redRegular};
  }

  p {
    font-size: 2.5rem;
    line-height: 4rem;
  }

  .main-headline {
    margin-bottom: 5rem;
    font-size: 4rem;
    line-height: 6rem;
  }

  .secondary-headline {
    color: ${blackLight};
  }

  a {
    border-bottom: 1px solid ${blackRegular};
    color: ${blackRegular};
    text-decoration: none;
    transition: 150ms ease-in;

    &:hover {
      border-bottom: 1px solid ${redRegular};
      color: ${redRegular};
    }
  }
`;

export const ProjectGallery = styled.div`
  ${flex("space-between")}
  margin: 3.5rem 0;
`;

export const Project = styled.div`
  border: 0.5rem solid ${redLight};
  width: 32%;
  height: 25rem;
  padding: 2.5rem;

  h3 {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: 150ms ease-in;

    &:hover {
      color: ${redRegular};
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  h3,
  p {
    color: ${blackLight};
  }
`;

export const Footer = styled.footer`
  margin-top: 20rem;
  margin-bottom: 7rem;

  ul {
    ${flex()}

    li {
      margin-right: 4rem;

      a {
        text-decoration: none;
        color: ${blackLight};
        transition: 150ms ease-in;

        &:hover {
          color: ${redRegular};
        }
      }
    }
  }
`;
