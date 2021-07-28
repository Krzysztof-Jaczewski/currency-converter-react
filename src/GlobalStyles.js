import { createGlobalStyle } from "styled-components";
import backgroundImage from "./images/background.jpg";

export const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,s
::before {
  box-sizing: inherit;
}

body {
  background-image: url(${backgroundImage});
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
