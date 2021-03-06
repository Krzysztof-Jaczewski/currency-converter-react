import styled from "styled-components";

export const Label = styled.label`
  position: relative;
  margin: 12px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-image: linear-gradient(to bottom, #020d0f, #073130);
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5),
    inset 2px 2px 10px rgba(255, 255, 255, 0.3);
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  appearance: none;
`;

export const StyledCheckbox = styled.span`
  position: relative;
  padding: 12px;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 99%;
    height: 99%;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5),
      inset 2px 2px 10px rgba(255, 255, 255, 0.3);
    font-size: 22px;
    font-weight: 500;
  }

  ${HiddenCheckbox}:checked ~ &::before {
    content: "";
    color: var(--font-color);
    text-shadow: 0 0 20px #0f0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5),
      inset 1px 1px 1px rgba(0, 0, 0, 0.4),
      inset -1px -1px 4px rgba(255, 255, 255, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.unCheckedColor};
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.unCheckedColor},
      0 0 10px ${({ theme }) => theme.colors.unCheckedColor},
      0 0 15px ${({ theme }) => theme.colors.unCheckedColor},
      0 0 20px ${({ theme }) => theme.colors.unCheckedColor},
      0 0 25px ${({ theme }) => theme.colors.unCheckedColor},
      0 0 30px ${({ theme }) => theme.colors.unCheckedColor};
  }

  ${HiddenCheckbox}:checked ~ &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.checkedColor};
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.checkedColor},
      0 0 10px ${({ theme }) => theme.colors.checkedColor},
      0 0 15px ${({ theme }) => theme.colors.checkedColor},
      0 0 20px ${({ theme }) => theme.colors.checkedColor},
      0 0 25px ${({ theme }) => theme.colors.checkedColor},
      0 0 30px ${({ theme }) => theme.colors.checkedColor};
  }
`;
