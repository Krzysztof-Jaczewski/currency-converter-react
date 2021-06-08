

function App() {
  return (
    <main className="main">
      <header className="logo">
        <h1>K<span className="logo_span">a</span> &nbsp;ntor</h1>
      </header>
      <form className="form" action="https://postman-echo.com/get" method="POST"
        enctype="application/x-www-form-urlencoded">
        <fieldset className="form__fieldset">
          <legend>Kwota do przeliczenia</legend>
          <input className="form__number" type="number" min="0.01" step="0.01" required placeholder="Wpisz Kwotę" value=""/>
            <select className="form__select" name="typ waluty">
              <option value="PLN">PLN</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
            </fieldset>
          <fieldset className="form__fieldset">
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
          </fieldset>
          <fieldset className="form__fieldset">
            <legend>Wynik</legend>
            <label>
              <p className="form__paragraph" ></p>
            </label>

          </fieldset>
          <button type="submit" className="neonButton">Przelicz</button>
        </form>
    </main>
  );
}

export default App;
