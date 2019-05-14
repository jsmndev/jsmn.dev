import styled from "styled-components";
import { flex, wrapper } from "../../_styles/mixins.style";
import { buttonLight, colors } from "../../_styles/variables.style";

export const NavContainer = styled.div`
  ${wrapper()}
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${colors.whiteRegular};
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
  .active {
    color: ${colors.blackLight};
    border-bottom: 2px solid ${colors.blackLight};
    padding-bottom: 0.5rem;
    transition: 150ms ease-in;
  }

  ul {
    ${flex("space-between", "center")}
    width: 100%;
    min-width: 50rem;
    text-align: center;
    @media (max-width: 700px) {
      min-width: 0;
    }

    .page-links {
      @media (max-width: 700px) {
        display: none;
      }
    }

    li {
      margin-left: 3.5rem;
      width: 25%;

      a {
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 150ms ease-in;
        cursor: pointer;

        &:hover {
          color: ${colors.blackLight};
          border-bottom: 2px solid ${colors.blackLight};
          padding-bottom: 0.5rem;
        }
      }
      a:active {
        color: ${colors.blackLight};
        border-bottom: 2px solid ${colors.blackLight};
        padding-bottom: 0.5rem;
      }
    }

    li:first-child {
      margin: 0;
    }

    li:last-child {
      a {
        ${buttonLight}

        @media (max-width: 500px) {
          padding: 1rem 2rem;
        }
      }
    }
  }
`;
