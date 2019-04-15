import styled from "styled-components";
import { wrapper } from "../../_styles/mixins.style";

export const MainContainer = styled.div`
  ${wrapper()}
`;

export const MainWrapper = styled.div`
  border: 2px solid lightgreen;
  ${wrapper("80%", "0 auto")}
  margin-top: 9rem;
`;
