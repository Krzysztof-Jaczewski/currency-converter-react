import "./style.css";
export const Button = ({ title }) => {

    return(<button
        type="submit"
        className="neonButton"
    >
        {title}
    </button>)
};