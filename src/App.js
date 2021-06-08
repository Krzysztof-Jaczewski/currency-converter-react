import Main from "./Component/Main";
import Logo from "./Component/Logo";
import Form from "./Component/Form";
import Fieldset from "./Component/Fieldset";
import Select from "./Component/Select";
import RadioCheck from "./Component/RadioCheck";
import Result from "./Component/Result";
import Button from "./Component/Button";
import ImputNumber from "./Component/ImputNumber";

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
            />}
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck
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
