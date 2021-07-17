import { useEffect } from "react";
import { currencies } from "../../currencies/currencies";
import styled from "styled-components";

const StyledAmountResult = styled.b`
  font-size: 24px;
`;

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
          <StyledAmountResult>{amount}</StyledAmountResult>
          &nbsp;&nbsp;
          {currencies[selectedCurrencyId].fullName}
        </p>
        <p>wymienisz na:</p>
        <p>
          <StyledAmountResult>{result}</StyledAmountResult>
          &nbsp;&nbsp;
          {currencies[targetCurrencyId].fullName}
        </p>
      </>
    );
  };

  return <form onSubmit={onFormSubmit}>{children}</form>;
};
