import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-image: url(./images/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  min-height: 100vh;
  text-align: center;
  font-family: "Merriweather", serif;
  color: white;
  margin: 0 20px;
}
`;
