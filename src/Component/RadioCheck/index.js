import "./style.css";

const RadioCheck = ({ currencies }) => {
    return (
            currencies.map(currency => (
                <label key={currency.id}
                className="form__label">
                    <input className="form__inputRadio " type="radio" name="currency" />
                    <span className="form__radioSpan">{currency.name}</span>
                </label>
            )))
}

export default RadioCheck;