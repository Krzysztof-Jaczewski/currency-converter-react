
import styled from "styled-components";

const StyledClock = styled.div`
 padding: 5px;
`

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
        <StyledClock>
            Dzisiaj jest {currentDate}
        </StyledClock>
    );
};

