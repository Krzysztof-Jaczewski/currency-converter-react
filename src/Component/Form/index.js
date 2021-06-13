
import { useEffect } from "react";
import { currencies } from "../../currencies/currencies";

export const Form = ({ children, amount, selectedCurrencyId, targetCurrencyId, setResultUpdate, result, calculateResult }) => {

    useEffect(() => {
        calculateResult(amount, currencies[selectedCurrencyId].rate, currencies[targetCurrencyId].rate);
    }, [amount, calculateResult, selectedCurrencyId, targetCurrencyId]);
    const onFormSubmit = (event) => {
        event.preventDefault();
        setResultUpdate(
            <>
                <p>
                    <b className="result__amount">
                        {amount}
                    </b>
                    &nbsp;&nbsp;
                    {currencies[selectedCurrencyId].fullName}
                </p>
                <p>
                    wymienisz na:
                </p>
                <p>
                    <b className="result__amount">
                        {result}
                    </b>
                    &nbsp;&nbsp;
                    {currencies[targetCurrencyId].fullName}
                </p>
            </>
        )
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            {children}
        </form>
    )
};