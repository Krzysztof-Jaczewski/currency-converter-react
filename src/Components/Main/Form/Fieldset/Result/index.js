import styled from "styled-components";

const StyledResult = styled.label`
  margin: 5px auto;
`;
export const Result = ({ resultUpdate }) =>
  resultUpdate !== 0 && <StyledResult>{resultUpdate}</StyledResult>;
