import styled from "styled-components";
import { flex, wrapper } from "../../_styles/mixins.style";
import {
  blackLight,
  redRegular,
  redLight,
  whiteRegular
} from "../../_styles/variables.style";

export const NavContainer = styled.div`
  ${wrapper()}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${whiteRegular};
  transition: 150ms ease-in;
`;

export const NavWrapper = styled.div`
  ${wrapper("80%", "0 auto")}
  ${flex("space-between", "center")}
  padding: 1rem 0;
`;

export const NavBrand = styled.a`
  img {
    width: 4.5rem;
    height: auto;
  }
`;

export const NavMenu = styled.nav`
  ul {
    ${flex("space-between", "center")}
    width: 100%;
    min-width: 50rem;
    text-align: center;

    li {
      margin-left: 3.5rem;
      width: 25%;

      a {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 150ms ease-in;

        &:hover {
          color: ${blackLight};
          border-bottom: 2px solid ${blackLight};
          padding-bottom: 0.5rem;
          transition: 150ms ease-in;
        }
      }
    }

    li:first-child {
      margin: 0;
    }

    li:last-child {
      a {
        border: 2px solid ${redRegular};
        border-radius: 3rem;
        padding: 1.5rem 2.5rem;
        color: ${redRegular};

        &:hover {
          border-color: ${redLight};
          color: ${redLight};
        }
      }
    }
  }
`;
