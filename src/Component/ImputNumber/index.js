import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  margin: 10px auto;
  flex-grow: 1;
  margin: 20px;
`;
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
