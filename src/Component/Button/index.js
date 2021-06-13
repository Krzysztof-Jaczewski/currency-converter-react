import "./style.css";

export const Button = ({ title }) => (
    <button
        type="submit"
        className="neonButton"
    >
        {title}
    </button>
);