import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";
import { colors, headingStyle } from "../../_styles/variables.style";

export const AboutContainer = styled.section`
  ${flex("space-between", "center")}
  height: 80vh;

  @media (max-width: 700px) {
    height: 100vh;
  }
`;

export const AboutHeadline = styled.div`
  width: 50%;

  @media (max-width: 650px) {
    width: 100%;
  }

  h1 {
    margin-bottom: 4rem;
    ${headingStyle}
  }

  p {
    color: ${colors.blackRegular};
    letter-spacing: 0.05rem;
  }

  .main-headline {
    margin-bottom: 5rem;
    font-size: 4rem;
    line-height: 6rem;

    @media (max-width: 1200px) {
      font-size: 3rem;
      line-height: 5rem;
    }

    @media (max-width: 885px) {
      font-size: 2.5rem;
      line-height: 4rem;
    }

    @media (max-width: 711px) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  .secondary-headline {
    font-size: 2.5rem;
    line-height: 4rem;
    color: ${colors.blackLight};

    @media (max-width: 1200px) {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media (max-width: 885px) {
      font-size: 1.8rem;
    }

    a {
      border-bottom: 0.1rem solid ${colors.blackLight};
      color: ${colors.blackLight};
      transition: 150ms ease-in;

      &:hover {
        border-bottom: 0.1rem solid ${colors.redRegular};
        color: ${colors.redRegular};
      }
    }
  }
`;

export const AboutImage = styled.div`
  width: 50%;
  text-align: right;

  @media (max-width: 650px) {
    display: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
