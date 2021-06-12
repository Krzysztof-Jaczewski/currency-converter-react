
import "./style.css";

export const Select = ({ currencies, setSelectedCurrency }) => {

  return (
  <select
    className="select"
    onChange={({ target }) => setSelectedCurrency(target.value)}
  >
    {currencies.map(currency => (
      <option
      key={currency.name}
      value ={currency.rate}
      >
        {currency.name}
      </option>
    ))};
  </select >)
};