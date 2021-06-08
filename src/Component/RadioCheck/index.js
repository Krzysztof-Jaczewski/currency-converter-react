import "./style.css";

const RadioCheck = () => (
    <>
        <label className="form__label">
            <input className="form__inputRadio " type="radio" name="currency" value="GBP" />
            <span className="form__radioSpan">GBP</span>
        </label>
        <label className="form__label">
            <input className="form__inputRadio   " type="radio" name="currency" value="EUR" />
            <span className="form__radioSpan ">EUR</span>
        </label>
        <label className="form__label">
            <input className="form__inputRadio " type="radio" name="currency" value="USD" />
            <span className="form__radioSpan ">USD</span>
        </label>
        <label className="form__label ">
            <input className="form__inputRadio" type="radio" name="currency" value="CHF" />
            <span className="form__radioSpan ">CHF</span>
        </label>
    </>
);


export default RadioCheck;