import "./style.css";

export const RadioCheck = ({ currencies,setTargetCurrency,selectedCurrency }) => {
       return (
        currencies.map(currency => {
            if (currency.id === +selectedCurrency) return null
             return (
                <label key={currency.name}
                    className="form__label"
                    >
                    <input 
                     onClick = {({ target }) => setTargetCurrency(target.value)}
                    value ={currency.id}
                    className="form__inputRadio "
                    type="radio" 
                    name="currency" 
                />
                    <span
                     className="form__radioSpan"
                     >{currency.name}</span>
                </label>
            )
        }));
}
