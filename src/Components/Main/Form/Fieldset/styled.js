import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  margin: 20px 0;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: transparent;
  box-shadow: inset 0 0 100px rgb(0, 0, 0);
`;

export const Legend = styled.legend`
  border-radius: 30px;
  padding: 5px 10px;
  box-shadow: 0 0 0 1px black,
    0 0 0 3px ${({ theme }) => theme.colors.mainColor};
`;
