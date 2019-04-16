import styled from "styled-components";
import { wrapper } from "../../_styles/mixins.style";

export const MainContainer = styled.div`
  ${wrapper()}

  .active-nav {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.01);
  }
`;

export const MainWrapper = styled.div`
  /* border: 2px solid lightgreen; */
  ${wrapper("80%", "0 auto")} /* margin-top: 9rem; */
`;
