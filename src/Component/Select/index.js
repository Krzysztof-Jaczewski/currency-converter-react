import "./style.css";

const Select = () => (
  <select
    className="select"
    name="typ walut"
  >
    <option value="PLN">PLN</option>
    <option value="GBP">GBP</option>
    <option value="EUR">EUR</option>
    <option value="USD">USD</option>
    <option value="CHF">CHF</option>
  </select>
);

export default Select;