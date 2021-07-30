import { useEffect } from "react";
import { currencies } from "../../../currencies/currencies";
import { StyledAmount } from "./styled";

export const Form = ({
  children,
  amount,
  selectedCurrencyId,
  targetCurrencyId,
  setResultUpdate,
  result,
  calculateResult,
}) => {
  useEffect(() => {
    calculateResult(
      amount,
      currencies[selectedCurrencyId].rate,
      currencies[targetCurrencyId].rate
    );
  }, [amount, calculateResult, selectedCurrencyId, targetCurrencyId]);
  const onFormSubmit = (event) => {
    event.preventDefault();
    setResultUpdate(
      <>
        <p>
          <StyledAmount>
            {amount.slice(-18, -15)} {amount.slice(-15, -12)}{" "}
            {amount.slice(-12, -9)} {amount.slice(-9, -6)}{" "}
            {amount.slice(-6, -3)} {amount.slice(-3)}
          </StyledAmount>
          &nbsp;&nbsp;
          {currencies[selectedCurrencyId].fullName}
        </p>
        <p>wymienisz na:</p>
        <p>
          <StyledAmount>
            {result.slice(-18, -15)} {result.slice(-15, -12)}{" "}
            {result.slice(-12, -9)} {result.slice(-9, -6)}{" "}
            {result.slice(-6, -3)} {result.slice(-3)}
          </StyledAmount>
          &nbsp;&nbsp;
          {currencies[targetCurrencyId].fullName}
        </p>
      </>
    );
  };

  return <form onSubmit={onFormSubmit}>{children}</form>;
};
