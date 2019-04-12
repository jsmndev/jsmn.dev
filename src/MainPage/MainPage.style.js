import styled from "styled-components";
import { flex } from "../_styles/mixins.style";
import {
  redRegular,
  redLight,
  blackRegular,
  blackLight
} from "../_styles/variables.style";

export const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${blackRegular};
`;

export const ImageWrapper = styled.div`
  margin-top: 3rem;
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

    @media (max-width: 780px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 2.5rem;
    line-height: 4rem;

    @media (max-width: 780px) {
      font-size: 2rem;
    }
  }

  .main-headline {
    margin-bottom: 5rem;
    font-size: 4rem;
    line-height: 6rem;

    @media (max-width: 780px) {
      font-size: 3rem;
    }
  }

  .secondary-headline {
    color: ${blackLight};

    a {
      border-bottom: 0.1rem solid ${blackLight};
      color: ${blackLight};
    }
  }

  a {
    border-bottom: 0.1rem solid ${blackRegular};
    color: ${blackRegular};
    text-decoration: none;
    transition: 150ms ease-in;

    &:hover {
      border-bottom: 0.1rem solid ${redRegular};
      color: ${redRegular};
    }
  }
`;

export const ProjectGallery = styled.div`
  ${flex("space-between")}
  margin: 3.5rem 0;

  @media (max-width: 930px) {
    flex-wrap: wrap;
  }
`;

export const Project = styled.div`
  border: 0.5rem solid ${redLight};
  width: 32%;
  height: 25rem;
  padding: 2.5rem;

  @media (max-width: 930px) {
    width: 44%;
    margin: 2rem;
  }

  @media (max-width: 850px) {
    width: 90%;
    margin: 2rem;
    height: 20rem;
  }

  @media (max-width: 560px) {
    height: 25rem;
  }

  h3 {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  a {
    &:hover {
      color: ${blackRegular};
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    padding: 0.3rem;
    background-color: ${redLight};
    cursor: pointer;
    transition: 150ms ease-in;

    &:hover {
      /* color: ${redRegular}; */
      border-bottom: 0.3rem solid ${blackRegular};
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

export const Skills = styled.div`
  margin-top: 3rem;

  .row {
    ${flex()}
    width: 85%;

    @media (max-width: 650px) {
      flex-wrap: wrap;
    }
  }

  .col-2 {
    width: 50%;

    @media (max-width: 650px) {
      width: 100%;
    }

    li {
      ${flex("flex-start", "center")}
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
  }
`;

export const SkillsIcon = styled.img`
  width: 6rem;
  margin-right: 1.5rem;
`;

export const Footer = styled.footer`
  margin-top: 10rem;
  margin-bottom: 7rem;

  @media (max-width: 650px) {
    margin-bottom: 5rem;
  }

  ul {
    ${flex()}
    @media (max-width: 650px) {
      flex-wrap: wrap;
    }

    li {
      margin-right: 4rem;

      @media (max-width: 650px) {
        width: 100%;
        margin-bottom: 3rem;
        font-size: 1.8rem;
      }

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
