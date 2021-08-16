import { LoadingAnimation } from "../styled";

export const Loading = () => {
  return (
    <>
      <LoadingAnimation>$</LoadingAnimation>
      Pobierane są dane z Banku Euporejskiego
      <br /> może to chwilę potrwać
    </>
  );
};
