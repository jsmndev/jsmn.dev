import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";
import {
  redRegular,
  blackRegular,
  blackLight,
  headingStyle
} from "../../_styles/variables.style";

export const AboutContainer = styled.section`
  ${flex("space-between", "center")}
  height: 100vh;
  padding-top: 3rem;
`;

export const AboutHeadline = styled.div`
  width: 50%;

  h1 {
    margin-bottom: 4rem;
    ${headingStyle}
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
  width: 50%;
  text-align: right;

  img {
    width: 100%;
    height: auto;
  }
`;
