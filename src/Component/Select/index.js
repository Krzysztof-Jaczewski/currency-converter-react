
import "./style.css";

export const Select = ({ currencies, setSelectCurrency }) => {

  return (
  <select
    className="select"
    value={currencies.rate}
    onChange={({ target }) => setSelectCurrency(target.value)}
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