import styled from "styled-components";

export const StyledScreen = styled.div`
  display: grid;
  place-items: center;
  justify-content: space-evenly;
  height: 350px;
  line-height: 24px;
  background-color: transparent;
  box-shadow: inset 0 0 300px black;
  border-radius: 10%;
  padding: 20px;
  margin: 20px;
`;

export const LoadingAnimation = styled.span`
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  font-size: 100px;
  margin: 10px;
  background: linear-gradient(
    90deg,
    green,
    ${({ theme }) => theme.colors.mainColor}
  );
  background-size: 400%;
  animation: loading infinite linear 5s;

  @keyframes loading {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }

    100% {
      background-position: 0%;
      transform: rotateY(360deg);
    }
  }
`;

export const StyledError = styled(LoadingAnimation)`
  animation: none;
  background: red;
`;
