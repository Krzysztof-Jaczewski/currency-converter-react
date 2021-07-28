import styled from "styled-components";

const StyledMain = styled.main`
  max-width: 600px;
  margin: 0 auto;
`;

export const Main = ({ children }) => <StyledMain>{children}</StyledMain>;
