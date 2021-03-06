import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesApi = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRatesApi = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );
        console.log(response.data);
        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({ state: "error" });
      }
    };
    setTimeout(getRatesApi, 3000);
  }, []);

  return ratesData;
};
