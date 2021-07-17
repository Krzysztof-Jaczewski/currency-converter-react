import "./style.css";

export const Clock = ({ date }) => {
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

