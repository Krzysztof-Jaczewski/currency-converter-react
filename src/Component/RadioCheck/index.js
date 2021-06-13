import "./style.css";

export const RadioCheck = ({ currencies, setTargetCurrencyId, selectedCurrencyId, targetCurrencyId }) => {

    return (
        currencies.map((currency, index) => {
            if (currency.id === +selectedCurrencyId) return null
            return (<label key={currency.name}
                className="form__label"
            >
                <input
                    defaultChecked={index === targetCurrencyId}
                    onClick={({ target }) => setTargetCurrencyId(target.value)}
                    value={currency.id}
                    className="form__inputRadio "
                    type="radio"
                    name="currency"
                />
                <span
                    className="form__radioSpan"
                >
                    {currency.name}
                </span>
            </label>
            )
        }));
}
