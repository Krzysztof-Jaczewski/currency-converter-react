import "./style.css";

export const RadioCheck = ({ currencies,setRadioCurrency }) => {
       return (
        currencies.map(currency => {
            if (currency.id === 1) return null
             return (
                <label key={currency.id}
                    className="form__label"
                    onClick = {({ target }) => setRadioCurrency(target.value)}
                    >
                        
                    <input 
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
