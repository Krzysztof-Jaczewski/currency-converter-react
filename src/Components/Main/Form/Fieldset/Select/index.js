import StyledSelect from "./styled";

export const Select = ({ currencies, setSelectedCurrencyId }) => (
  <StyledSelect onChange={({ target }) => setSelectedCurrencyId(target.value)}>
    {currencies.map((currency) => (
      <option key={currency.id} value={currency.id}>
        {currency.name}
      </option>
    ))}
  </StyledSelect>
);
