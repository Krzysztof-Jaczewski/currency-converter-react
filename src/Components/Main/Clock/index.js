import styled from "styled-components";
import { useCurrentDate } from "./useCurrentDate";

const StyledClock = styled.div`
  padding: 5px;
`;

export const Clock = () => {
  const currentDate = useCurrentDate();

  return <StyledClock>Dzisiaj jest {currentDate}</StyledClock>;
};
