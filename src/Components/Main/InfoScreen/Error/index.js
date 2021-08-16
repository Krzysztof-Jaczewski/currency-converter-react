import { StyledError } from "../styled";

export const Error = () => {
  return (
    <>
      <StyledError>X</StyledError>
      Coś poszło nie tak 😢,
      <br /> sprawdź połączenie internetowe
      <br />
      lub spróbój ponownie później
    </>
  );
};
