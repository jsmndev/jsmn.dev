import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";
import {
  redRegular,
  blackRegular,
  blackLight
} from "../../_styles/variables.style";

export const AboutContainer = styled.section`
  border: 2px solid lightblue;
  ${flex("space-between", "center")}
  height: 100vh;
  padding-top: 3rem;
`;

export const AboutHeadline = styled.div`
  border: 2px solid pink;
  width: 50%;

  h1 {
    margin-bottom: 4rem;
    font-size: 5rem;
    font-weight: 700;
    color: ${redRegular};
    text-transform: uppercase;
  }

  p {
    color: ${blackRegular};
    letter-spacing: 0.05rem;
  }

  .main-headline {
    margin-bottom: 5rem;
    font-size: 4rem;
    line-height: 6rem;
  }

  .secondary-headline {
    font-size: 2.5rem;
    line-height: 4rem;
    color: ${blackLight};

    a {
      border-bottom: 0.1rem solid ${blackLight};
      color: ${blackLight};
      transition: 150ms ease-in;

      &:hover {
        border-bottom: 0.1rem solid ${redRegular};
        color: ${redRegular};
      }
    }
  }
`;

export const AboutImage = styled.div`
  border: 2px solid lightgreen;
  width: 50%;
  text-align: right;

  img {
    width: 80%;
    height: auto;
  }
`;
