
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
  const [result, setResult] = useState(0);
  const [amount, setAmont] = useState(0);
  console.log(amount)
  console.log(result);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].id);
  console.log(currencies[selectedCurrency].rate)

  const [targetCurrency, setTargetCurrency] = useState(currencies[1].id);
  console.log(currencies[targetCurrency].rate)


  console.log(result);
  return (
    <Main>
      <Logo />
      <Form
        amount={amount}
        selectedCurrency={selectedCurrency}
        targetCurrency={targetCurrency}
        setResult={setResult}
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
              setSelectedCurrency={setSelectedCurrency}
            />}
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck
              currencies={currencies}
              setTargetCurrency={setTargetCurrency}
              selectedCurrency={selectedCurrency}
            />}
        />
        <Fieldset
          title="Wynik"
          extraContent={
            <Result
              selectedCurrency={selectedCurrency}
              targetCurrency={targetCurrency}
              result={result}
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
