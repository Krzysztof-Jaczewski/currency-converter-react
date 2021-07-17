import { HiddenCheckbox, StyledCheckbox, StyledLabel } from "./styled";

export const Checkbox = ({
  currencies,
  setTargetCurrencyId,
  selectedCurrencyId,
  targetCurrencyId,
}) => {
  return currencies.map((currency, index) => {
    if (currency.id === +selectedCurrencyId) return null;

    return (
      <StyledLabel key={index}>
        <HiddenCheckbox
          defaultChecked={index === targetCurrencyId}
          onClick={({ target }) => setTargetCurrencyId(target.value)}
          key={currency.id}
          value={currency.id}
          type="radio"
          name="currency"
        />
        <StyledCheckbox>
          {currency.flag}
          {currency.name}
        </StyledCheckbox>
      </StyledLabel>
    );
  });
};
