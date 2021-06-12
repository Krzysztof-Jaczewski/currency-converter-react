import "./style.css";

export const ImputNumber = ({setAmont}) => (
    <input
        className="imputNumber"
        type="number"
        min="0.01"
        step="0.01"
        required 
        placeholder="Wpisz Kwotę"
        onChange = {({target})=>setAmont(target.value)}
    />
);