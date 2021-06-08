import Main from "./Main";
import Logo from "./Logo";


function App() {
  return (
    <Main>
      <Logo/>
      <Form></Form>
        <Fieldset
          title= {"Kwota do przeliczenia"}
          extraContent= {Number}
          {Number}
          />
            <select className="form__select" name="typ walut<input className="form__number" type="number" min="0.01" step="0.01" required placeholder="Wpisz Kwotę" value=""/>y">
              <option value="PLN">PLN</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
           
          <Fieldset
          title= {"Na jaką walutę"}  />

            <legend>Na jaką walutę wymienić</legend>
            <label className="form__label">
              <input className="form__inputRadio " type="radio" name="currency" value="GBP" checked />
              <span className="form__radioSpan">GBP</span>
            </label>
            <label className="form__label">
              <input className="form__inputRadio   " type="radio" name="currency" value="EUR" />
              <span className="form__radioSpan ">EUR</span>
            </label>
            <label className="form__label">
              <input className="form__inputRadio " type="radio" name="currency" value="USD" />
              <span className="form__radioSpan ">USD</span>
            </label>
            <label className="form__label ">
              <input className="form__inputRadio" type="radio" name="currency" value="CHF" />
              <span className="form__radioSpan ">CHF</span>
            </label>
           
           <Fieldset 
          title= {"Wynik"}  />
            <legend>Wynik</legend>
            <label>
              <p className="form__paragraph" ></p>
            </label>

         
          <button type="submit" className="neonButton">Przelicz</button>
          </Form>
    </Main>
  );
}

export default App;
