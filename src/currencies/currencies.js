import  flagaEuro  from "../images/flagaEuro.jpg";
import  flagaPolski  from "../images/flagaPolski.jpg";
import  flagaSzwajcarii  from "../images/flagaSzwajcarii.jpg";
import  flagaUSA  from "../images/flagaUSA.jpg";
import  flagaWielkiejBrytani  from "../images/flagaWielkiejBrytani.jpg";


export const currencies = [
  {
    id: 0,
    name: "PLN",
    fullName: "Złotych",
    rate: 1,
    flag: <img className="flag" src= {flagaPolski} alt="flaga Polski"/>
  },
  {
    id: 1,
    name: "CHF",
    fullName: "Franków Szwajcarskich",
    rate: 4.0901,
    flag: <img className="flag" src= {flagaSzwajcarii} alt="flaga Szwajcarii"/>
  },
  {
    id: 2,
    name: "USD",
    fullName: "Dolarów Amerykańskich",
    rate: 3.6690,
    flag: <img className="flag" src= {flagaUSA} alt="flaga Szwajcarii"/>
  },
  {
    id: 3,
    name: "GBP",
    fullName: "Funtów brytyjskich",
    rate: 5.1889,
    flag: <img className="flag" src= {flagaWielkiejBrytani} alt="flaga Wielkiej ytanii"/>
  },
  {
    id: 4,
    name: "EUR",
    fullName: "Euro",
    rate: 4.4674,
    flag: <img className="flag" src= {flagaEuro} alt="flaga Uni Europejskiej"/>
  },
];