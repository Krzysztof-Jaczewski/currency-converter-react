
import { useState } from "react";
import { Main } from "./Component/Main";
import { Logo } from "./Component/Logo";
import { Form } from "./Component/Form";
import { Fieldset } from "./Component/Fieldset";
import { Select } from "./Component/Select";
import { RadioCheck } from "./Component/RadioCheck";
import { Result } from "./Component/Result";
import { Button } from "./Component/Button";
import { ImputNumber } from "./Component/ImputNumber";
import { currencies } from "./currencies/currencies"


function App() {

  const [result, setResult] = useState(() => {
    return 0
  });
  const [resultUpdate, setResultUpdate] = useState(() => {
    return 0
  });

  const [amount, setAmont] = useState(() => {
    return 0
  });
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(() => {
    return 0
  });
  const [targetCurrencyId, setTargetCurrencyId] = useState(() => {
    return 1
  });

  const calculateResult = (amount, selectedCurrencyId, targetCurrencyId) => {
    amount = +amount;
    let result = selectedCurrencyId * amount / targetCurrencyId;
    result = result.toFixed(2);
    setResult(result);
  }

  return (
    <Main>
      <Logo />
      <Form
        amount={amount}
        selectedCurrencyId={selectedCurrencyId}
        targetCurrencyId={targetCurrencyId}
        setResultUpdate={setResultUpdate}
        calculateResult={calculateResult}
        result={result}
      >
        <Fieldset
          title="Kwota do przeliczenia"
          extraContent={
            <ImputNumber
              setAmont={setAmont}
            />}
          body={
            <Select
              currencies={currencies}
              setSelectedCurrencyId={setSelectedCurrencyId}
            />}
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck
              currencies={currencies}
              setTargetCurrencyId={setTargetCurrencyId}
              selectedCurrencyId={selectedCurrencyId}
              targetCurrencyId={targetCurrencyId}
            />}
        />
        <Fieldset
          title="Wynik"
          extraContent={
            <Result
              resultUpdate={resultUpdate}
            />}
        />
        <Button
          title="przelicz"
        />
      </Form>
    </Main>
  );
}

export default App;
