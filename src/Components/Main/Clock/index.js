import {
  StyledClock,
  NeonClockBorder,
  Seconds,
  Minutes,
  Hours,
} from "./styled";
import { useCurrentDate } from "./useCurrentDate";
export const Clock = () => {
  const date = useCurrentDate();

  const currentDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return <StyledClock>Dzisiaj jest {currentDate}</StyledClock>;
};

export const NeonClock = () => {
  const date = useCurrentDate();

  return (
    <NeonClockBorder>
      <Seconds seconds={date.getSeconds()} />
      <Minutes minutes={date.getMinutes()} />
      <Hours hours={date.getHours()} />
    </NeonClockBorder>
  );
};
