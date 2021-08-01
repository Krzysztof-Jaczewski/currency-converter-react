import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    let intervalID = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(intervalID);
  }, []);

  return date;
};
