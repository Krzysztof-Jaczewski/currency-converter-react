
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
  let result= 0;
const [amount, setAmont] = useState(0);
console.log(amount)
   const[selectCurrency,setSelectedCurrency] = useState(currencies[0].name);
   console.log(selectCurrency)
   const[targetCurrency,setTargetCurrency] = useState(currencies[1].name);
   console.log(targetCurrency)

  const calculateResult = ( amount, selectCurrency,targetCurrency ) =>{
       amount= +amount;
       result = selectCurrency* amount/ targetCurrency;
  }

  return (
    <Main>
      <Logo />
      <Form>
        <Fieldset
          title="Kwota do przeliczenia"
          extraContent={
            <ImputNumber
            setAmont={setAmont}
            />}
          body={
            <Select
              currencies={currencies}
              setSelectedCurrency = {setSelectedCurrency}
            />}
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck
              currencies={currencies}
              setTargetCurrency={setTargetCurrency}
            />}
        />
        <Fieldset
          title="Wynik"
          extraContent={
            <Result
            result = {result}
            />}
        />
        <Button
          onClick = {calculateResult}
          title="przelicz"
        />
      </Form>
    </Main>
  );
}

export default App;
