import "./style.css";

const Button = ({ title }) => (
    <button
        type="submit"
        className="neonButton"
    >
        {title}
    </button>
);

export default Button;