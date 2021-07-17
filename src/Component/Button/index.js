
import {StyledButton} from "./styled"

export const Button = ({ title }) => (
    <StyledButton
        type="submit"
        className="neonButton"
    >
        {title}
    </StyledButton >
);