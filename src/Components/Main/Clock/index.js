import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
export const Clock = () => {
  const currentDate = useCurrentDate();

  return <StyledClock>Dzisiaj jest {currentDate}</StyledClock>;
};
