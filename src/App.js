import Main from "./Main";
import Logo from "./Logo";
import Form from "./Form";
import Fieldset from "./Fieldset";
import Select from "./Select";
import RadioCheck from "./RadioCheck";


function App() {
  return (
    <Main>
      <Logo/>
      <Form>
        <Fieldset
          title= {"Kwota do przeliczenia"}
          extraContent= {}
          body = {
          <Select/>
        }
          />
          <Fieldset
          title= {"Na jaką walutę"} 
          body = {
          <RadioCheck/>
        }
          />
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
