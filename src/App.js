
import Main from "./Component/Main";
import Logo from "./Component/Logo";
import Form from "./Component/Form";
import Fieldset from "./Component/Fieldset";
import Select from "./Component/Select";
import { RadioCheck } from "./Component/RadioCheck";
import Result from "./Component/Result";
import Button from "./Component/Button";
import ImputNumber from "./Component/ImputNumber";
import { useState } from "react";


function App() {
  const currencies = [
    {
      id: 1,
      name: "PLN",
      fullName: "złotych",
      value: 1,
    },
    {
      id: 2,
      name: "CHF",
      fullName: "Franków Szwajcarskich",
      rate: 4.0901,
    },
    {
      id: 3,
      name: "USD",
      fullName: "Dolarów Amerykańskich",
      rate: 3.6690,
    },

    {
      id: 4,
      name: "GBP",
      fullName: "Funtów brytyjskich",
      rate: 5.1889,
    },

    {
      id: 5,
      name: "EUR",
      fullName: "Euro",
      rate: 4.4674,
    },
  ];

   const[secectCurrency,setSelectCurrency] = useState([])
   console.log(secectCurrency)
   const[radioCurrency,setRadioCurrency] = useState([]);
   console.log(radioCurrency)
   console.log(radioCurrency)
  return (
    <Main>
      <Logo />
      <Form>
        <Fieldset
          title="Kwota do przeliczenia"
          extraContent={
            <ImputNumber
            />}
          body={
            <Select
              currencies={currencies}
              setSelectCurrency = {setSelectCurrency}
            />}
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck
              currencies={currencies}
              setRadioCurrency={setRadioCurrency}
            />}
        />
        <Fieldset
          title="Wynik"
          extraContent={
            <Result
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
