import { StyledResult } from "./styled";

export const Result = ({ resultUpdate }) =>
  resultUpdate !== 0 && <StyledResult>{resultUpdate}</StyledResult>;
