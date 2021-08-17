import styled from "styled-components";
import clockNumbers from "../../../images/clockNumbers.png";

export const StyledClock = styled.div`
  padding: 10px;
  font-family: "Roboto", sans-serif;
`;

export const NeonClockBorder = styled.div`
  margin: 10px auto;
  width: 80px;
  min-height: 80px;
  background: url(${clockNumbers});
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 50%;
  position: relative;
`;

export const Seconds = styled.div`
  width: 1px;
  height: 28px;
  background-color: red;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: rotate(${({ seconds }) => seconds * 6}deg);
  border-radius: 30%;
  transform-origin: bottom;
  transition: transform 1s infinite;
`;

export const Minutes = styled(Seconds)`
  background-color: teal;
  top: 15px;
  width: 2px;
  height: 25px;
  transform: rotate(${({ minutes }) => minutes * 6}deg);
  z-index: -1;
`;

export const Hours = styled(Seconds)`
  background-color: teal;
  top: 27px;
  width: 3px;
  height: 13px;
  transform: rotate(${({ hours, minutes }) => hours * 30 + minutes * 0.5}deg);
  z-index: -1;
`;
