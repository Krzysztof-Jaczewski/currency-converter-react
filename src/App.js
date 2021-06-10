
import {Main} from "./Component/Main";
import {Logo} from "./Component/Logo";
import {Form} from "./Component/Form";
import {Fieldset} from "./Component/Fieldset";
import {Select} from "./Component/Select";
import { RadioCheck } from "./Component/RadioCheck";
import {Result} from "./Component/Result";
import {Button} from "./Component/Button";
import {ImputNumber} from "./Component/ImputNumber";
import { useState } from "react";
import {currencies} from "./currencies/currencies"


function App() {
  

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
