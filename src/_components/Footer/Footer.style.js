import styled from "styled-components";
import { flex, wrapper } from "../../_styles/mixins.style";
import {
  blackRegular,
  blackLight,
  redRegular,
  redLight
} from "../../_styles/variables.style";

export const FooterContainer = styled.footer`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.23);
`;

export const FooterWrapper = styled.div`
  ${wrapper("80%", "0 auto")}
  ${flex("space-between", "center")}
  padding: 2rem 0;
  color: ${blackLight};

  a {
    transition: 150ms ease-in;
  }

  .footer-links {
    width: 45rem;

    nav {
      ${flex()}
      width: 100%;

      a {
        width: 40%;
        letter-spacing: 0.04rem;
        color: ${blackLight};

        &:hover {
          color: ${redRegular};
        }
      }
    }
  }

  .copyright-text {
    letter-spacing: 0.04rem;

    a {
      color: ${redLight};

      &:hover {
        color: ${redRegular};
      }
    }
  }
`;
