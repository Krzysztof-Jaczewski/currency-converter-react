// import { useState } from "react";
import Main from "./Component/Main";
import Logo from "./Component/Logo";
import Form from "./Component/Form";
import Fieldset from "./Component/Fieldset";
import Select from "./Component/Select";
import RadioCheck from "./Component/RadioCheck";
import Result from "./Component/Result";
import Button from "./Component/Button";
import ImputNumber from "./Component/ImputNumber";


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
    value: 4.0901,
  },
  {
    id: 3,
    name: "USD",
    fullName: "Dolarów Amerykańskich",
    value: 3.6690,
  },

  {
    id: 4,
    name: "GBP",
    fullName: "Funtów brytyjskich",
    value: 5.1889,
  },

  {
    id: 5,
    name: "EUR",
    fullName: "Euro",
    value: 4.4674,
  },

]

function App() {
  
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
            />}
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck
              currencies={currencies}
            />}
        />
        <Fieldset
          title="Wynik"
          extraContent={
            <Result
              currencies={currencies}
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
