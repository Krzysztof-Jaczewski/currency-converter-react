import styled from "styled-components";

export const Neon = styled.header`
  font-size: 26px;
  text-transform: uppercase;
  text-shadow: 0 0 5px ${({ theme }) => theme.colors.mainColor},
    0 0 10px ${({ theme }) => theme.colors.mainColor},
    0 0 15px ${({ theme }) => theme.colors.mainColor},
    0 0 20px ${({ theme }) => theme.colors.mainColor};
  font-family: "Ribeye Marrow", cursive;
  letter-spacing: 5px;
`;

export const FlashigNeon = styled.span`
  display: inline-block;
  position: absolute;
  transform: rotateZ(45deg);
  top: 60px;
  animation: flashingLight 5s linear infinite;

  @keyframes flashingLight {
    0%,
    90%,
    92%,
    98% {
      opacity: 0.2;
    }
    91%,
    93.5%,
    100% {
      opacity: 1;
    }
  }
`;
