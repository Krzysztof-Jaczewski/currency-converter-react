import { currencies } from "../../currencies/currencies";

export const Form = ({ children, amount, selectedCurrency, targetCurrency, setResult }) => {

    const calculateResult = (am, SC, TC) => {
        am = +am;
        let res = SC * amount / TC;
        res = res.toFixed(2);
        setResult(res);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currencies[selectedCurrency].rate, currencies[targetCurrency].rate)
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