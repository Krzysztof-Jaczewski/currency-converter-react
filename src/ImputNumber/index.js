import "./style.css";

const ImputNumber = () => (
    <input
        class="form__number js-number"
        type="number"
        min="0.01"
        step="0.01"
        required placeholder="Wpisz Kwotę"
        value=""
    />
)

export default ImputNumber;