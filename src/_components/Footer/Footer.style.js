import styled from "styled-components";
import { flex, wrapper } from "../../_styles/mixins.style";

export const FooterContainer = styled.footer`
  border: 2px solid lightblue;
`;

export const FooterWrapper = styled.div`
  ${wrapper("80%", "0 auto")}
  padding: 1rem 0;
`;
