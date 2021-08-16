import { useState, useEffect } from "react";
import axios from "axios";

export const useRatesApi = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getRatesApi = async () => {
      const APIURL = "https://api.exchangerae.host/latest?base=PLN";

      try {
        const response = await axios.get(APIURL);

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
