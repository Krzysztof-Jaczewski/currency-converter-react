import "./style.css";
import { useState, useEffect } from "react";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let intervalID = setInterval(() =>
            setDate(new Date())
            , 1000);

        return () => clearInterval(intervalID);
    }, []);

    const currentDate =
        date.toLocaleDateString(undefined,
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }
        );

    return (
        <div className="clock">
            Dzisiaj jest {currentDate}
        </div>
    );
};

