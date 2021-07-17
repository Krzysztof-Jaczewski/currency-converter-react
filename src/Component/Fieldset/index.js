import { StyledFieldset, StyledLegend } from "./styled";

export const Fieldset = ({ title, extraContent, body }) => (
  <StyledFieldset>
    <StyledLegend>{title}</StyledLegend>
    {extraContent}
    {body}
  </StyledFieldset>
);
