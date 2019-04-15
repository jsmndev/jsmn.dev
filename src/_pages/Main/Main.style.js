import styled from "styled-components";
import { wrapper } from "../../_styles/mixins.style";

export const MainContainer = styled.div`
  border: 1px solid red;
  ${wrapper()}
`;

export const MainWrapper = styled.div`
  border: 1px solid blue;
  ${wrapper("80%", "0 auto")}
`;
