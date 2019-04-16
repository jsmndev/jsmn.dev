import styled from "styled-components";
import { flex } from "../../_styles/mixins.style";

export const HeroContainer = styled.section`
  ${flex("center", "center")}
  flex-direction: column;
  height: 100vh;

  @media (max-width: 700px) {
    display: none;
  }

  .hero-image {
    text-align: center;

    img {
      width: 60%;
      height: auto;
    }
  }

  .drop-down-icon {
    img {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      width: 4.5rem;
      opacity: 0.8;
      cursor: pointer;
      animation: bounce 2s infinite;
      transition: 150ms ease-in;

      &:hover {
        opacity: 0.5;
      }
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
  }
`;
