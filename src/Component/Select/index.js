
import "./style.css";

export const Select = ({ currencies, setSelectedCurrencyId }) => (
  <select
    className="select"
    onChange={({ target }) => setSelectedCurrencyId(target.value)}

  >
    {currencies.map(currency => (
      <option
        key={currency.id}
        value={currency.id}
      >
        {currency.name}
      </option>
    ))}
  </select >
);