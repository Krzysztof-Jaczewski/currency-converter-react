import flagaEuro from "../images/flagaEuro.jpg";
import flagaPolski from "../images/flagaPolski.jpg";
import flagaSzwajcarii from "../images/flagaSzwajcarii.jpg";
import flagaUSA from "../images/flagaUSA.jpg";
import flagaWielkiejBrytani from "../images/flagaWielkiejBrytani.jpg";
import styled from "styled-components";

const StyledFlagImage = styled.img`
  position: absolute;
  width: 25px;
  height: 20px;
  border-radius: 20%;
  left: 15px;
`;

export const currencies = [
  {
    id: 0,
    name: "PLN",
    fullName: "Złotych",
    rate: 1,
    flag: <StyledFlagImage src={flagaPolski} alt="flaga Polski" />,
  },
  {
    id: 1,
    name: "CHF",
    fullName: "Franków Szwajcarskich",
    rate: 4.0901,
    flag: <StyledFlagImage src={flagaSzwajcarii} alt="flaga Szwajcarii" />,
  },
  {
    id: 2,
    name: "USD",
    fullName: "Dolarów Amerykańskich",
    rate: 3.669,
    flag: <StyledFlagImage src={flagaUSA} alt="flaga Szwajcarii" />,
  },
  {
    id: 3,
    name: "GBP",
    fullName: "Funtów brytyjskich",
    rate: 5.1889,
    flag: (
      <StyledFlagImage src={flagaWielkiejBrytani} alt="flaga Wielkiej ytanii" />
    ),
  },
  {
    id: 4,
    name: "EUR",
    fullName: "Euro",
    rate: 4.4674,
    flag: <StyledFlagImage src={flagaEuro} alt="flaga Uni Europejskiej" />,
  },
];
