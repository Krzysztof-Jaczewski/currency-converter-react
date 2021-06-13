import "./style.css";

export const Fieldset = ({ title, extraContent, body }) => (
    <fieldset className="fieldset">
        <legend className="fieldset__legend">
            {title}
        </legend>
        {extraContent}
        {body}
    </fieldset>
);
