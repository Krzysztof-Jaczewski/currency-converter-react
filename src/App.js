
import { useState, useEffect } from "react";
import { Main } from "./Component/Main";
import { Logo } from "./Component/Logo";
import { Form } from "./Component/Form";
import { Fieldset } from "./Component/Fieldset";
import { Select } from "./Component/Select";
import { RadioCheck } from "./Component/RadioCheck";
import { Result } from "./Component/Result";
import { Button } from "./Component/Button";
import { ImputNumber } from "./Component/ImputNumber";
import { Clock } from "./Component/Clock";
import { currencies } from "./currencies/currencies";
import  { ThemeProvider } from "styled-components";

const theme = {
  colors:{
    mainColor: "rgb(82, 231, 211)",
    fontColor: "rgb(250, 250, 250)",
  },
};

function App() {

  const [result, setResult] = useState(() => (0));
  const [resultUpdate, setResultUpdate] = useState(() => (0));
  const [date, setDate] = useState(() => new Date());


  const [amount, setAmont] = useState(() => (0));
  const [selectedCurrencyId, setSelectedCurrencyId] = useState(() => (0));
  const [targetCurrencyId, setTargetCurrencyId] = useState(() => (1));

  const calculateResult = (amount, selectedCurrencyId, targetCurrencyId) => {
    amount = +amount;
    let result = selectedCurrencyId * amount / targetCurrencyId;
    result = result.toFixed(2);
    setResult(result);
  }

  useEffect(() => {
    let intervalID = setInterval(() =>
      setDate(new Date())
      , 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Main>
      <Logo />
      <Clock
        date={date}
      />
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
    </ThemeProvider>
  );
}

export default App;
