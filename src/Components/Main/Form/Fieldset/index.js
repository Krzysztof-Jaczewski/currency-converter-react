import { StyledFieldset, Legend } from "./styled";

export const Fieldset = ({ title, extraContent, body }) => (
  <StyledFieldset>
    <Legend>{title}</Legend>
    {extraContent}
    {body}
  </StyledFieldset>
);
