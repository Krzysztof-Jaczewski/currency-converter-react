import { StyledInput } from "./styled";

export const ImputNumber = ({ setAmont }) => (
  <StyledInput
    type="number"
    min="0.01"
    max="1000000000000"
    step="0.01"
    required
    placeholder="Wpisz Kwotę"
    onChange={({ target }) => setAmont(target.value)}
  />
);
