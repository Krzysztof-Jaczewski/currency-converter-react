
import "./style.css";

export const Select = ({ currencies, setSelectedCurrency }) => {

  return (
  <select
    className="select"
    value={currencies.rate}
    onChange={({ target }) => setSelectedCurrency(target.value)}
  >
    {currencies.map(currency => (
      <option
      key={currency.id}
      value ={currency.id}
      >
        {currency.name}
      </option>
    ))};
  </select >)
};