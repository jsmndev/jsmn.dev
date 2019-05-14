import styled from "styled-components";
import { flex, wrapper } from "../../_styles/mixins.style";
import { colors } from "../../_styles/variables.style";

export const FooterContainer = styled.footer`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
`;

export const FooterWrapper = styled.div`
  ${wrapper("80%", "0 auto")}
  ${flex("space-between", "center")}
  padding: 2rem 0;
  color: ${colors.blackLight};

  @media (max-width: 680px) {
    font-size: 1.4rem;
  }

  @media (max-width: 588px) {
    ${flex()}
    flex-direction: column;
  }

  a {
    transition: 150ms ease-in;
  }

  .footer-links {
    width: 45rem;

    @media (max-width: 805px) {
      width: 35rem;
    }

    @media (max-width: 680px) {
      width: 30rem;
    }

    nav {
      ${flex()}
      width: 100%;

      @media (max-width: 588px) {
        flex-direction: column;
        margin: 2rem 0;
      }

      a {
        width: 40%;
        letter-spacing: 0.04rem;
        color: ${colors.blackLight};

        @media (max-width: 588px) {
          margin-bottom: 2rem;
        }

        &:hover {
          color: ${colors.redRegular};
        }
      }
    }
  }

  .copyright-text {
    letter-spacing: 0.04rem;

    @media (max-width: 588px) {
      margin-bottom: 1.5rem;
    }

    a {
      color: ${colors.redLight};

      &:hover {
        color: ${colors.redRegular};
      }
    }
  }
`;
