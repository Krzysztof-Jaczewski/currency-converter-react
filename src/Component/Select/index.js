import "./style.css";

const Select = ({ currencies }) => {
  return(<select
    className="select"
  >
    {currencies.map(currency => (
      <option
        key={currency.id}
      >
        {currency.name}
      </option>
    ))};
  </select >)
};

export default Select;