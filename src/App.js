import { useState } from "react";
import { Main } from "./Components/Main";
import { Logo } from "./Components/Main/Logo";
import { Form } from "./Components/Main/Form";
import { Fieldset } from "./Components/Main/Form/Fieldset";
import { Select } from "./Components/Main/Form/Fieldset/Select";
import { Checkbox } from "./Components/Main/Form/Fieldset/Checkbox";
import { Result } from "./Components/Main/Form/Fieldset/Result";
import { Button } from "./Components/Main/Form/Button";
import { ImputNumber } from "./Components/Main/Form/ImputNumber";
import { Clock } from "./Components/Main/Clock";
import { currencies } from "./currencies/currencies";

function App() {
  const [result, setResult] = useState(() => 0);
  const [resultUpdate, setResultUpdate] = useState(() => 0);

  const [amount, setAmont] = useState(() => 0);
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(() => 0);
  const [targetCurrencyId, setTargetCurrencyId] = useState(() => 1);

  const calculateResult = (amount, selectedCurrencyId, targetCurrencyId) => {
    amount = +amount;
    let result = (selectedCurrencyId * amount) / targetCurrencyId;
    result = result.toFixed(2);
    setResult(result);
  };

  return (
    <Main>
      <Logo />
      <Clock />
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
          extraContent={<ImputNumber setAmont={setAmont} />}
          body={
            <Select
              currencies={currencies}
              setSelectedCurrencyId={setSelectedCurrencyId}
            />
          }
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <Checkbox
              currencies={currencies}
              setTargetCurrencyId={setTargetCurrencyId}
              selectedCurrencyId={selectedCurrencyId}
              targetCurrencyId={targetCurrencyId}
            />
          }
        />
        <Fieldset
          title="Wynik"
          extraContent={<Result resultUpdate={resultUpdate} />}
        />
        <Button title="przelicz" />
      </Form>
    </Main>
  );
}

export default App;
