import styled from "styled-components";
import { flex } from "../_styles/mixins.style";
import { redRegular, blackRegular } from "../_styles/variables.style";

export const MainContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  border: 1px solid blue;
`;

export const ImageWrapper = styled.div`
  margin-top: 10vh;
  margin-bottom: 20rem;
  ${flex("center")}
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Section = styled.section`
  margin: 10vh 0;

  h1 {
    margin-bottom: 2.5rem;
    font-size: 3rem;
    font-weight: 700;
    color: ${redRegular};
  }

  p {
    font-size: 2.5rem;
    line-height: 4rem;
    color: ${blackRegular};
  }

  a {
    text-decoration: none;
    color: ${redRegular};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProjectGallery = styled.div`
  ${flex()}
`;
