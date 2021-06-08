import Main from "./Main";
import Logo from "./Logo";
import Form from "./Form";
import Fieldset from "./Fieldset";
import Select from "./Select";
import RadioCheck from "./RadioCheck";
import Result from "./Result";
import Button from "./Button";


function App() {
  return (
    <Main>
      <Logo />
      <Form>
        <Fieldset
          title="Kwota do przeliczenia"
        
          body={
            <Select />
          }
        />
        <Fieldset
          title="Na jaką walutę"
          body={
            <RadioCheck />
          }
        />
        <Fieldset
          title="Wynik"
          extraContent={
             <Result/>
          }
          body={
            <Button
            title="przelicz"
            />
          }
        />
      </Form>
    </Main>
  );
}

export default App;
