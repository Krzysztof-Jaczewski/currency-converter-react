import styled from "styled-components";


export const StyledButton = styled.button`
position: relative;
    background-color: transparent;
    font-size: 32px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.mainColor};
    border: ${({ theme }) => theme.colors.mainColor} 4px solid;
    border-radius: 20px;
    padding: 10px 16px;
    text-shadow: 0 0 16px currentColor, 0 0 32px currentColor;
    box-shadow: 0 0 16px currentColor, inset 0 0 16px currentColor;

    &::before {
    content: "";
    pointer-events: none;
    position: absolute;
    background-color:  ${({ theme }) => theme.colors.mainColor};
    top: 50px;
    right: 0;
    width: 100%;
    height: 100%;
    transform: perspective(11px) rotateX(40deg)scale(1, 0.35);
    filter: blur(90px);
    opacity: 0.7;
    }

    &::after {
    content: "";
    position: absolute;
    border-radius: 10px;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
    z-index: -1;
    opacity: 0;
    background-color:  ${({ theme }) => theme.colors.mainColor};
    transition: opacity 200ms linear;

}
&:hover, &:focus{
    color: black;
    text-shadow: none;
}
&:hover::before, &:focus::before
{
    opacity: 1;
}

&:hover::after, &:focus::after
{
    opacity: 1;
}
`;