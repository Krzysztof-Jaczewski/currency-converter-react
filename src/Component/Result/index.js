import "./style.css";

export const Result = ({ resultUpdate }) => (
    resultUpdate !== 0 && (
        <label className="result">
            {resultUpdate}
        </label>
    )
);
