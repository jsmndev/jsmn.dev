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
`;

export const AboutHeadline = styled.div`
  border: 2px solid pink;
  width: 50%;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: ${redRegular};
    text-transform: uppercase;
  }

  p {
    color: ${blackRegular};
  }

  .main-headline {
    font-size: 2.5rem;
  }
`;

export const AboutImage = styled.div`
  border: 2px solid lightgreen;
  width: 50%;
  text-align: right;

  img {
    width: 85%;
    height: auto;
  }
`;
