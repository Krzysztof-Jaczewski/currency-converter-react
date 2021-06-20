import "./style.css";

export const ImputNumber = ({ setAmont }) => (
    <input
        className="imputNumber"
        type="number"
        min="0.01"
        max="1000000000000"
        step="0.01"
        required
        placeholder="Wpisz Kwotę"
        onChange={({ target }) => setAmont(target.value)}
    />
);