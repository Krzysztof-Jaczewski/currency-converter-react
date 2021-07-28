import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 5px;
  margin: 10px auto;
  width: 100px;
  cursor: pointer;
`;
export const Select = ({ currencies, setSelectedCurrencyId }) => (
  <StyledSelect onChange={({ target }) => setSelectedCurrencyId(target.value)}>
    {currencies.map((currency) => (
      <option key={currency.id} value={currency.id}>
        {currency.name}
      </option>
    ))}
  </StyledSelect>
);
